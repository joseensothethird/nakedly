// routes/usersRoute.js
const express = require('express');
const pool = require('../Database/db');
const router = express.Router();

// GET /api/users — list all users (protected)
router.get('/', async (req, res) => {
  try {
    const { rows } = await pool.query(
      `SELECT id, email, first_name, last_name, role, is_verified, created_at
       FROM users ORDER BY created_at DESC`
    );
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error fetching users' });
  }
});

// routes/usersRoute.js - Updated search endpoint
router.get('/search', async (req, res) => {
  try {
    const { username } = req.query; // Changed from 'query' to 'username'
    
    if (!username || username.length < 2) {
      return res.status(400).json({ 
        error: 'Search query must be at least 2 characters' 
      });
    }

    console.log(`Searching for username containing: ${username}`);
    
    const searchQuery = `%${username}%`;
    const { rows } = await pool.query(
      `SELECT id, username, is_premium as "isPremium" 
       FROM users 
       WHERE username IS NOT NULL AND username ILIKE $1
       LIMIT 10`,
      [searchQuery]
    );

    console.log('Found users:', rows);
    res.json(rows);
  } catch (error) {
    console.error('Search error:', error);
    res.status(500).json({ 
      error: 'Internal server error',
      details: error.message 
    });
  }
});

module.exports = router;