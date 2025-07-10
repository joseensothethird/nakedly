const express = require("express");
const router = express.Router();
const pool = require("../Database/db");
const { verifyToken } = require("../Middlewares/authMiddleware");
const multer = require("multer");
const path = require("path");
const fs = require("fs");

// Multer config for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadDir = path.join(__dirname, "../../uploads/messages");
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  },
});

const upload = multer({
  storage,
  limits: { fileSize: 10 * 1024 * 1024 }, // 10MB
});

// 🔒 Utility to check if user is a participant in the conversation
async function isUserParticipant(conversationId, userId) {
  const { rows } = await pool.query(
    "SELECT 1 FROM conversation_participants WHERE conversation_id = $1 AND user_id = $2",
    [conversationId, userId]
  );
  return rows.length > 0;
}

// ✅ Get all conversations for logged-in user
router.get("/", verifyToken, async (req, res) => {
  try {
    const userId = req.user.id;

    const { rows: conversations } = await pool.query(
      `SELECT 
        c.id,
        c.updated_at,
        u.id as participant_id,
        u.username as participant_name,
        u.is_premium as participant_is_premium,
        COALESCE(m.content, '') as last_message,
        COALESCE(m.created_at, c.created_at) as last_message_time,
        m.sender_id as last_message_sender_id,
        COALESCE(unread.count, 0) as unread_count
      FROM conversations c
      JOIN conversation_participants cp ON c.id = cp.conversation_id
      JOIN users u ON cp.user_id = u.id
      LEFT JOIN (
        SELECT DISTINCT ON (conversation_id) 
          conversation_id, content, created_at, sender_id
        FROM messages
        ORDER BY conversation_id, created_at DESC
      ) m ON c.id = m.conversation_id
      LEFT JOIN (
        SELECT conversation_id, COUNT(*) as count
        FROM messages
        WHERE sender_id != $1 AND is_read = false
        GROUP BY conversation_id
      ) unread ON c.id = unread.conversation_id
      WHERE c.id IN (
        SELECT conversation_id FROM conversation_participants WHERE user_id = $1
      )
      AND u.id != $1
      ORDER BY COALESCE(m.created_at, c.created_at) DESC`,
      [userId]
    );

    const formatted = conversations.map(conv => ({
      id: conv.id,
      updated_at: conv.updated_at,
      participant: {
        id: conv.participant_id,
        username: conv.participant_name,
        is_premium: conv.participant_is_premium
      },
      last_message: conv.last_message,
      last_message_time: conv.last_message_time,
      unread_count: conv.unread_count,
      is_my_last_message: conv.last_message_sender_id === userId
    }));

    res.json(formatted);
  } catch (err) {
    console.error("GET / error:", err);
    res.status(500).json({ error: "Failed to fetch conversations", details: err.message });
  }
});

// ✅ Create a new conversation
router.post("/", verifyToken, async (req, res) => {
  const client = await pool.connect();
  try {
    const userId = req.user.id;
    let { participantId } = req.body;

    if (!participantId) return res.status(400).json({ error: "participantId is required" });

    participantId = parseInt(participantId);
    if (isNaN(participantId)) return res.status(400).json({ error: "Invalid participantId" });

    if (participantId === userId)
      return res.status(400).json({ error: "Cannot create conversation with yourself" });

    const participantResult = await client.query(
      "SELECT id, username, is_premium FROM users WHERE id = $1",
      [participantId]
    );
    if (participantResult.rows.length === 0)
      return res.status(404).json({ error: "Participant not found" });

    const participant = participantResult.rows[0];

    const existingConvo = await client.query(
      `SELECT c.id 
       FROM conversations c
       JOIN conversation_participants cp1 ON c.id = cp1.conversation_id AND cp1.user_id = $1
       JOIN conversation_participants cp2 ON c.id = cp2.conversation_id AND cp2.user_id = $2
       LIMIT 1`,
      [userId, participantId]
    );

    if (existingConvo.rows.length > 0) {
      return res.json({
        id: existingConvo.rows[0].id,
        participant,
        message: "Conversation already exists"
      });
    }

    await client.query("BEGIN");

    const convo = await client.query(
      "INSERT INTO conversations DEFAULT VALUES RETURNING id, created_at, updated_at"
    );

    await client.query(
      "INSERT INTO conversation_participants (conversation_id, user_id) VALUES ($1, $2), ($1, $3)",
      [convo.rows[0].id, userId, participantId]
    );

    await client.query("COMMIT");

    res.status(201).json({
      id: convo.rows[0].id,
      created_at: convo.rows[0].created_at,
      updated_at: convo.rows[0].updated_at,
      participant
    });
  } catch (err) {
    await client.query("ROLLBACK");
    console.error("POST / error:", err);
    res.status(500).json({ error: "Failed to create conversation", details: err.message });
  } finally {
    client.release();
  }
});

// ✅ Get messages from a conversation (updated to only show messages between participants)
router.get("/:conversationId/messages", verifyToken, async (req, res) => {
  try {
    const { conversationId } = req.params;
    const userId = req.user.id;

    // First verify the user is a participant
    const isParticipant = await isUserParticipant(conversationId, userId);
    if (!isParticipant) {
      return res.status(403).json({ error: "Access denied: not a participant of this conversation." });
    }

    // Get the other participant's ID
    const participantResult = await pool.query(
      `SELECT user_id 
       FROM conversation_participants 
       WHERE conversation_id = $1 AND user_id != $2`,
      [conversationId, userId]
    );
    
    if (participantResult.rows.length === 0) {
      return res.status(404).json({ error: "No other participant found in this conversation" });
    }
    
    const otherParticipantId = participantResult.rows[0].user_id;

    // Only fetch messages between these two users in this conversation
    const { rows: messages } = await pool.query(
      `SELECT 
        m.id, m.conversation_id, m.sender_id, m.content, m.is_read,
        m.created_at, m.updated_at, m.attachment_url, m.attachment_type,
        u.username AS sender_name
       FROM messages m
       JOIN users u ON m.sender_id = u.id
       WHERE m.conversation_id = $1 
       AND m.sender_id IN ($2, $3)
       ORDER BY m.created_at ASC`,
      [conversationId, userId, otherParticipantId]
    );

    // Mark messages as read
    await pool.query(
      `UPDATE messages 
       SET is_read = true 
       WHERE conversation_id = $1 AND sender_id = $2 AND is_read = false`,
      [conversationId, otherParticipantId]
    );

    const formatted = messages.map(msg => ({
      id: msg.id,
      conversation_id: msg.conversation_id,
      sender: {
        id: msg.sender_id,
        username: msg.sender_name
      },
      content: msg.content,
      is_read: msg.is_read,
      created_at: msg.created_at,
      updated_at: msg.updated_at,
      attachment: msg.attachment_url
        ? { url: msg.attachment_url, type: msg.attachment_type }
        : null
    }));

    res.json(formatted);
  } catch (err) {
    console.error("GET /:conversationId/messages error:", err);
    res.status(500).json({ error: "Failed to fetch messages", details: err.message });
  }
});

// ✅ Send a new message (updated to verify participants)
router.post("/:conversationId/messages", verifyToken, upload.single("attachment"), async (req, res) => {
  const client = await pool.connect();
  try {
    const { conversationId } = req.params;
    const { content } = req.body;
    const userId = req.user.id;
    const file = req.file;

    // Validate input
    if (!content && !file) {
      return res.status(400).json({ 
        error: "Message content or attachment is required",
        code: "MESSAGE_CONTENT_REQUIRED"
      });
    }

    // Verify user is a participant
    const isParticipant = await isUserParticipant(conversationId, userId);
    if (!isParticipant) {
      return res.status(403).json({ 
        error: "Access denied: not a participant of this conversation",
        code: "NOT_CONVERSATION_PARTICIPANT"
      });
    }

    // Get the other participant's ID
    const { rows: participants } = await client.query(
      `SELECT user_id, username FROM conversation_participants cp
       JOIN users u ON cp.user_id = u.id
       WHERE conversation_id = $1 AND user_id != $2`,
      [conversationId, userId]
    );
    
    if (participants.length === 0) {
      return res.status(404).json({ 
        error: "No other participant found in this conversation",
        code: "NO_OTHER_PARTICIPANT"
      });
    }
    
    const otherParticipant = participants[0];
    const otherParticipantId = otherParticipant.user_id;

    // Process attachment if exists
    let attachmentData = null;
    if (file) {
      attachmentData = {
        url: `/uploads/messages/${file.filename}`,
        type: file.mimetype.startsWith('image/') ? 'image' : 'file',
        originalName: file.originalname
      };
    }

    await client.query("BEGIN");

    // Insert message
    const { rows: [message] } = await client.query(
      `INSERT INTO messages (
        conversation_id, 
        sender_id, 
        content, 
        attachment_url, 
        attachment_type
      ) VALUES ($1, $2, $3, $4, $5)
      RETURNING 
        id,
        conversation_id,
        sender_id,
        content,
        attachment_url,
        attachment_type,
        is_read,
        created_at,
        updated_at`,
      [
        conversationId, 
        userId, 
        content || null, 
        attachmentData?.url || null, 
        attachmentData?.type || null
      ]
    );

    // Update conversation timestamp
    await client.query(
      "UPDATE conversations SET updated_at = NOW() WHERE id = $1",
      [conversationId]
    );

    await client.query("COMMIT");

    // Get sender info (removed avatar_url)
    const { rows: [sender] } = await client.query(
      "SELECT username FROM users WHERE id = $1", 
      [userId]
    );

    // Prepare response data (removed avatar)
    const responseData = {
      id: message.id,
      conversation_id: message.conversation_id,
      sender: {
        id: userId,
        username: sender.username
      },
      content: message.content,
      is_read: message.is_read,
      created_at: message.created_at,
      updated_at: message.updated_at,
      attachment: message.attachment_url ? {
        url: message.attachment_url,
        type: message.attachment_type,
        name: attachmentData?.originalName
      } : null
    };

    // Emit socket event
    const io = req.app.get('socketio');
    if (io) {
      try {
        const emitData = {
          ...responseData,
          is_private: true,
          conversation_type: 'direct'
        };

        // Emit to both participants
        io.to(`user_${userId}`)
          .to(`user_${otherParticipantId}`)
          .emit('new_message', emitData);
          
        // Also emit to the conversation room if you have one
        io.to(`conversation_${conversationId}`)
          .emit('new_message', emitData);
          
      } catch (socketError) {
        console.error('Socket emission error:', socketError);
      }
    }

    return res.status(201).json(responseData);

  } catch (err) {
    await client.query("ROLLBACK");
    console.error("Message creation error:", {
      error: err,
      endpoint: `POST /${req.params.conversationId}/messages`,
      userId: req.user?.id,
      timestamp: new Date().toISOString()
    });

    // Handle specific errors
    if (err.code === '23503') { // Foreign key violation
      return res.status(404).json({ 
        error: "Conversation or user not found",
        code: "RESOURCE_NOT_FOUND"
      });
    }

    return res.status(500).json({ 
      error: "Failed to send message",
      code: "MESSAGE_SEND_FAILED",
      details: process.env.NODE_ENV === 'development' ? err.message : undefined
    });
  } finally {
    client.release();
  }
});

module.exports = router;