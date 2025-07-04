// routes/users.js
const express = require('express');
const router = express.Router();
const pool = require('../Database/db');
const authMiddleware = require('../Middlewares/authMiddleware');

// Get all users (protected route - admin only)
router.get('/', authMiddleware.verifyToken, authMiddleware.checkRole(['admin']), async (req, res) => {
  try {
    // Pagination parameters
    const { page = 1, limit = 10 } = req.query;
    const offset = (page - 1) * limit;

    // Get users with pagination
    const usersQuery = await pool.query(
      `SELECT id, email, first_name, last_name, role, created_at, updated_at 
       FROM users 
       ORDER BY created_at DESC
       LIMIT $1 OFFSET $2`,
      [limit, offset]
    );

    // Get total count for pagination metadata
    const countQuery = await pool.query('SELECT COUNT(*) FROM users');
    const total = parseInt(countQuery.rows[0].count);

    res.json({
      success: true,
      data: usersQuery.rows,
      pagination: {
        total,
        page: parseInt(page),
        limit: parseInt(limit),
        totalPages: Math.ceil(total / limit)
      }
    });

  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ 
      success: false,
      error: 'Internal server error' 
    });
  }
});

// Get single user by ID
router.get('/:id', authMiddleware.verifyToken, async (req, res) => {
  try {
    const { id } = req.params;

    // Users can view their own profile, admins can view any
    if (req.userId !== parseInt(id) && req.userRole !== 'admin') {
      return res.status(403).json({ 
        success: false,
        error: 'Unauthorized' 
      });
    }

    const userQuery = await pool.query(
      `SELECT id, email, first_name, last_name, role, created_at, updated_at 
       FROM users 
       WHERE id = $1`,
      [id]
    );

    if (userQuery.rows.length === 0) {
      return res.status(404).json({ 
        success: false,
        error: 'User not found' 
      });
    }

    res.json({
      success: true,
      data: userQuery.rows[0]
    });

  } catch (error) {
    console.error('Error fetching user:', error);
    res.status(500).json({ 
      success: false,
      error: 'Internal server error' 
    });
  }
});

// Update user (users can update their own profile, admins can update any)
router.put('/:id', authMiddleware.verifyToken, async (req, res) => {
  try {
    const { id } = req.params;
    const { first_name, last_name } = req.body;

    // Check authorization
    if (req.userId !== parseInt(id) && req.userRole !== 'admin') {
      return res.status(403).json({ 
        success: false,
        error: 'Unauthorized' 
      });
    }

    const updateQuery = await pool.query(
      `UPDATE users 
       SET first_name = $1, last_name = $2, updated_at = NOW()
       WHERE id = $3
       RETURNING id, email, first_name, last_name, role, created_at, updated_at`,
      [first_name, last_name, id]
    );

    if (updateQuery.rows.length === 0) {
      return res.status(404).json({ 
        success: false,
        error: 'User not found' 
      });
    }

    res.json({
      success: true,
      data: updateQuery.rows[0]
    });

  } catch (error) {
    console.error('Error updating user:', error);
    res.status(500).json({ 
      success: false,
      error: 'Internal server error' 
    });
  }
});

// Delete user (admin only)
router.delete('/:id', authMiddleware.verifyToken, authMiddleware.checkRole(['admin']), async (req, res) => {
  try {
    const { id } = req.params;

    // Prevent admin from deleting themselves
    if (req.userId === parseInt(id)) {
      return res.status(403).json({ 
        success: false,
        error: 'Cannot delete your own account' 
      });
    }

    const deleteQuery = await pool.query(
      'DELETE FROM users WHERE id = $1 RETURNING id',
      [id]
    );

    if (deleteQuery.rows.length === 0) {
      return res.status(404).json({ 
        success: false,
        error: 'User not found' 
      });
    }

    res.json({
      success: true,
      message: 'User deleted successfully'
    });

  } catch (error) {
    console.error('Error deleting user:', error);
    res.status(500).json({ 
      success: false,
      error: 'Internal server error' 
    });
  }
});

module.exports = router;