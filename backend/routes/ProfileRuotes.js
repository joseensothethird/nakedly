const express = require('express');
const router = express.Router();
const pool = require('../Database/db');

// GET profile by user ID
router.get('/:userId', async (req, res) => {
  try {
    const { userId } = req.params;
    const result = await pool.query(
      'SELECT * FROM profiles WHERE user_id = $1',
      [userId]
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Profile not found' });
    }
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// PUT update profile by user ID
router.put('/:userId', async (req, res) => {
  const {
    username, age, height, measurements, location,
    bio, content, specialties, instagram, twitter,
    tiktok, subscription_price, posts_count,
    subscribers_count, last_online, joined_date, image
  } = req.body;

  try {
    const { userId } = req.params;
    const result = await pool.query(`
      UPDATE profiles SET
        username = $1,
        age = $2,
        height = $3,
        measurements = $4,
        location = $5,
        bio = $6,
        content = $7,
        specialties = $8,
        instagram = $9,
        twitter = $10,
        tiktok = $11,
        subscription_price = $12,
        posts_count = $13,
        subscribers_count = $14,
        last_online = $15,
        joined_date = $16,
        image = $17,
        updated_at = CURRENT_TIMESTAMP
      WHERE user_id = $18
      RETURNING *;
    `, [
      username, age, height, measurements, location,
      bio, content, specialties, instagram, twitter,
      tiktok, subscription_price, posts_count,
      subscribers_count, last_online, joined_date, image, userId
    ]);

    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Update failed' });
  }
});

module.exports = router;
