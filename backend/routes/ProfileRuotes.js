const express = require('express');
const router = express.Router();
const pool = require('../Database/db');
const authenticateToken = require('../middlewares/verifyToken');

// GET /api/profile — Get full user + profile data
router.get('/', authenticateToken, async (req, res) => {
  try {
    const userId = req.user.id;

    const { rows } = await pool.query(
      `
      SELECT 
        u.id,
        u.email,
        u.username,
        u.first_name,
        u.last_name,
        u.role,
        u.is_verified,
        u.created_at,
        u.is_premium,
        p.bio,
        p.location,
        p.age,
        p.height,
        p.measurements,
        p.instagram,
        p.twitter,
        p.tiktok,
        p.subscription_price,
        p.image,
        p.banner,
        p.specialties
      FROM users u
      LEFT JOIN profiles p ON u.id = p.user_id
      WHERE u.id = $1
      `,
      [userId]
    );

    if (rows.length === 0) {
      return res.status(404).json({ message: 'User profile not found' });
    }

    const user = rows[0];
    user.specialties = user.specialties || [];

    // Add empty stats for now
    user.postsCount = 0;
    user.followersCount = 0;
    user.followingCount = 0;

    res.json(user);
  } catch (err) {
    console.error('Error fetching profile:', err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
