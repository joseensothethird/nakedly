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
});// GET /api/profile/:username — Get profile by username
router.get('/:username', async (req, res) => {
  try {
    const { username } = req.params;

    const cleanUsername = username.startsWith('@') ? username.slice(1) : username;

    const { rows } = await pool.query(`
      SELECT 
        p.*,
        u.email,
        u.role,
        u.is_verified as "isVerified",
        u.is_premium as "isPremium"
      FROM profiles p
      JOIN users u ON p.user_id = u.id
      WHERE p.username = $1 OR p.username = $2
    `, [cleanUsername, `@${cleanUsername}`]);

    if (rows.length === 0) {
      return res.status(404).json({ error: 'Profile not found' });
    }

    const profile = rows[0];

    const response = {
      firstName: profile.first_name || '',
      lastName: profile.last_name || '',
      username: profile.username,
      profile_image: profile.profile_image,
      banner: profile.banner,
      bio: profile.bio,
      posts_count: profile.posts_count || 0,
      subscribers_count: profile.subscribers_count || 0,
      joined_date: profile.joined_date,
      last_online: profile.last_online,
      age: profile.age,
      height: profile.height,
      measurements: profile.measurements,
      location: profile.location,
      subscription_price: profile.subscription_price,
      content: profile.content,
      specialties: profile.specialties || [],
      instagram: profile.instagram,
      twitter: profile.twitter,
      tiktok: profile.tiktok,
      user_id: profile.user_id,
      isPremium: profile.isPremium
    };

    res.json(response);
  } catch (error) {
    console.error('Error fetching profile:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// PUT /api/profile/:username — Update profile
router.put('/:username', async (req, res) => {
  try {
    const { username } = req.params;
    const {
      firstName,
      lastName,
      bio,
      location,
      age,
      height,
      measurements,
      instagram,
      twitter,
      tiktok,
      subscription_price
    } = req.body;

    const cleanUsername = username.startsWith('@') ? username.slice(1) : username;

    const { rows } = await pool.query(`
      UPDATE profiles
      SET
        first_name = $1,
        last_name = $2,
        bio = $3,
        location = $4,
        age = $5,
        height = $6,
        measurements = $7,
        instagram = $8,
        twitter = $9,
        tiktok = $10,
        subscription_price = $11
      WHERE username = $12
      RETURNING *
    `, [
      firstName,
      lastName,
      bio,
      location,
      age,
      height,
      measurements,
      instagram,
      twitter,
      tiktok,
      subscription_price,
      cleanUsername
    ]);

    if (rows.length === 0) {
      return res.status(404).json({ error: 'Profile not found or update failed' });
    }

    const updated = rows[0];

    res.json({
      firstName: updated.first_name,
      lastName: updated.last_name,
      username: updated.username,
      bio: updated.bio,
      location: updated.location,
      age: updated.age,
      height: updated.height,
      measurements: updated.measurements,
      instagram: updated.instagram,
      twitter: updated.twitter,
      tiktok: updated.tiktok,
      subscription_price: updated.subscription_price,
      profile_image: updated.profile_image,
      banner: updated.banner,
      user_id: updated.user_id
    });
  } catch (err) {
    console.error('Error updating profile:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;