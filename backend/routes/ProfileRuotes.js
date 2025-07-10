const express = require('express');
const router = express.Router();
const pool = require('../Database/db'); // fix path if needed
const authenticateToken = require('../Middlewares/verifyToken');

// GET profile
router.get('/', authenticateToken, async (req, res) => {
  const userId = req.user.id;

  try {
    const result = await pool.query('SELECT * FROM profiles WHERE user_id = $1', [userId]);
    if (result.rows.length === 0) return res.status(404).json({ error: 'Profile not found' });

    res.json(result.rows[0]);
  } catch (err) {
    console.error('Error fetching profile:', err);
    res.status(500).json({ error: 'Failed to fetch profile' });
  }
});

// PUT profile
router.put('/', authenticateToken, async (req, res) => {
  const userId = req.user.id;
  const {
    username, bio, location, age, height, measurements,
    instagram, twitter, tiktok, subscription_price,
    image, banner_image, specialties
  } = req.body;

  try {
    const result = await pool.query(
      `UPDATE profiles SET
        username = $1, bio = $2, location = $3, age = $4, height = $5,
        measurements = $6, instagram = $7, twitter = $8, tiktok = $9,
        subscription_price = $10, image = $11, banner = $12,
        specialties = $13, updated_at = CURRENT_TIMESTAMP
      WHERE user_id = $14 RETURNING *`,
      [
        username, bio, location, age, height, measurements,
        instagram, twitter, tiktok, subscription_price,
        image, banner_image, specialties, userId
      ]
    );

    res.json(result.rows[0]);
  } catch (err) {
    console.error('Error updating profile:', err);
    res.status(500).json({ error: 'Failed to update profile' });
  }
});

module.exports = router;
