// routes/conversations.js
const express = require('express');
const router = express.Router();
const pool = require('../Database/db');
const authenticate = require('../Middlewares/authMiddleware');

router.get('/', authenticate, async (req, res) => {
  try {
    const { rows } = await pool.query(`
      SELECT c.id, u.id as user_id, 
             u.first_name || ' ' || u.last_name as user_name,
             LEFT(u.first_name, 1) || LEFT(u.last_name, 1) as user_avatar,
             m.content as last_message,
             m.created_at as last_message_time,
             (SELECT COUNT(*) FROM messages 
              WHERE conversation_id = c.id 
              AND is_read = false 
              AND sender_id != $1) as unread_count
      FROM conversations c
      JOIN conversation_participants cp ON c.id = cp.conversation_id
      JOIN users u ON cp.user_id = u.id
      LEFT JOIN messages m ON m.id = (
        SELECT id FROM messages 
        WHERE conversation_id = c.id 
        ORDER BY created_at DESC 
        LIMIT 1
      )
      WHERE cp.user_id != $1
      AND c.id IN (
        SELECT conversation_id FROM conversation_participants WHERE user_id = $1
      )
      ORDER BY last_message_time DESC
    `, [req.user.id]);

    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

router.get('/:conversationId/messages', authenticate, async (req, res) => {
  try {
    const { rows: messages } = await pool.query(`
      SELECT m.*, 
             u.first_name || ' ' || u.last_name as sender_name,
             LEFT(u.first_name, 1) || LEFT(u.last_name, 1) as sender_avatar
      FROM messages m
      JOIN users u ON m.sender_id = u.id
      WHERE m.conversation_id = $1
      ORDER BY m.created_at ASC
    `, [req.params.conversationId]);

    await pool.query(
      `UPDATE messages SET is_read = true 
       WHERE conversation_id = $1 AND sender_id != $2`,
      [req.params.conversationId, req.user.id]
    );

    res.json(messages);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

router.post('/:conversationId/messages', authenticate, async (req, res) => {
  try {
    const { content } = req.body;
    const { rows: [message] } = await pool.query(
      `INSERT INTO messages (conversation_id, sender_id, content)
       VALUES ($1, $2, $3)
       RETURNING *`,
      [req.params.conversationId, req.user.id, content]
    );

    await pool.query(
      `UPDATE conversations SET updated_at = NOW() WHERE id = $1`,
      [req.params.conversationId]
    );

    res.status(201).json(message);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;