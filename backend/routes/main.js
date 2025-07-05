const express = require('express');
const router = express.Router();
const pool = require('../Database/db'); // Adjust path as needed

// Welcome route
router.get('/', async (req, res) => {
  try {
    // Test database connection silently
    await pool.query('SELECT NOW()');
    res.send('Welcome to Nakedly');
  } catch (err) {
    console.error('Database error:', err);
    res.status(500).send('Welcome to Nakedly (Database connection failed)');
  }
});

// Health check route
router.get('/health', async (req, res) => {
  try {
    const dbResult = await pool.query('SELECT NOW()');
    res.json({
      status: 'API is working',
      database: {
        connected: true,
        time: dbResult.rows[0].now
      }
    });
  } catch (err) {
    res.status(500).json({
      status: 'API is working',
      database: {
        connected: false,
        error: err.message
      }
    });
  }
});

module.exports = router;