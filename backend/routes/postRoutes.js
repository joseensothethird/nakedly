const express = require('express');
const router = express.Router();
const { authenticate } = require('../middleware/auth');
const { upload } = require('../middleware/upload');
const { Post, PostMedia, User } = require('../models');
const fs = require('fs');
const path = require('path');

// Create a new post
router.post('/', authenticate, upload.array('media', 4), async (req, res) => {
  try {
    const { content } = req.body;
    const userId = req.user.id;

    // Create the post
    const post = await Post.create({
      content,
      user_id: userId
    });

    // Handle media uploads
    if (req.files && req.files.length > 0) {
      const mediaPromises = req.files.map(file => {
        const mediaType = file.mimetype.startsWith('image') ? 'image' : 'video';
        return PostMedia.create({
          post_id: post.id,
          url: `/uploads/${file.filename}`,
          media_type: mediaType
        });
      });

      await Promise.all(mediaPromises);
    }

    // Fetch the post with user and media data
    const createdPost = await Post.findOne({
      where: { id: post.id },
      include: [
        { model: User, attributes: ['id', 'first_name', 'last_name'] },
        { model: PostMedia }
      ]
    });

    res.status(201).json(createdPost);
  } catch (error) {
    console.error('Error creating post:', error);
    res.status(500).json({ error: 'Failed to create post' });
  }
});

// Get all posts
router.get('/', authenticate, async (req, res) => {
  try {
    const posts = await Post.findAll({
      include: [
        { model: User, attributes: ['id', 'first_name', 'last_name'] },
        { model: PostMedia }
      ],
      order: [['created_at', 'DESC']]
    });

    res.json(posts);
  } catch (error) {
    console.error('Error fetching posts:', error);
    res.status(500).json({ error: 'Failed to fetch posts' });
  }
});

// Get a single post
router.get('/:id', authenticate, async (req, res) => {
  try {
    const post = await Post.findOne({
      where: { id: req.params.id },
      include: [
        { model: User, attributes: ['id', 'first_name', 'last_name'] },
        { model: PostMedia }
      ]
    });

    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }

    res.json(post);
  } catch (error) {
    console.error('Error fetching post:', error);
    res.status(500).json({ error: 'Failed to fetch post' });
  }
});

// Delete a post
router.delete('/:id', authenticate, async (req, res) => {
  try {
    const post = await Post.findOne({
      where: { id: req.params.id },
      include: [PostMedia]
    });

    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }

    // Check if the user owns the post
    if (post.user_id !== req.user.id) {
      return res.status(403).json({ error: 'Unauthorized' });
    }

    // Delete media files
    if (post.PostMedia && post.PostMedia.length > 0) {
      post.PostMedia.forEach(media => {
        const filePath = path.join(__dirname, '../public', media.url);
        if (fs.existsSync(filePath)) {
          fs.unlinkSync(filePath);
        }
      });
    }

    // Delete the post
    await post.destroy();

    res.status(204).end();
  } catch (error) {
    console.error('Error deleting post:', error);
    res.status(500).json({ error: 'Failed to delete post' });
  }
});

module.exports = router;