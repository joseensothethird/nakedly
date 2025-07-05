const express = require('express');
const router = express.Router();
const pool = require('../Database/db');

// GET /api/users - Public access (no token)
router.get('/', async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const offset = (page - 1) * limit;

  try {
    const totalUsers = await pool.query('SELECT COUNT(*) FROM users');
    const total = parseInt(totalUsers.rows[0].count);

    const result = await pool.query(`
      SELECT 
        id, email, password_hash, first_name, last_name, role, 
        is_verified, created_at, updated_at
      FROM users
      ORDER BY id ASC
      LIMIT $1 OFFSET $2
    `, [limit, offset]);

    res.json({
      data: result.rows,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit)
      }
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: 'Failed to fetch users' });
  }
});

module.exports = router;
