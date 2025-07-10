const express = require('express');
const router = express.Router();
const pool = require('../Database/db'); // adjust this path if needed

// ✅ Add payment method
router.post('/method', async (req, res) => {
  try {
    const userId = req.user.id;
    const { method_type, account_info, is_default } = req.body;

    const result = await pool.query(`
      INSERT INTO payment_methods (user_id, method_type, account_info, is_default)
      VALUES ($1, $2, $3, $4)
      RETURNING *
    `, [userId, method_type, account_info, is_default || false]);

    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to add payment method' });
  }
});

// ✅ Get all payment methods for user
router.get('/method', async (req, res) => {
  try {
    const userId = req.user.id;

    const result = await pool.query(`
      SELECT * FROM payment_methods
      WHERE user_id = $1
      ORDER BY is_default DESC, created_at DESC
    `, [userId]);

    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch payment methods' });
  }
});

// ✅ Add a transaction (optional: simulate payouts or purchases)
router.post('/transaction', async (req, res) => {
  try {
    const userId = req.user.id;
    const { amount, status, method_id, description } = req.body;

    const result = await pool.query(`
      INSERT INTO transactions (user_id, amount, status, method_id, description)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING *
    `, [userId, amount, status, method_id, description]);

    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to add transaction' });
  }
});

// ✅ Get all transactions for user
router.get('/transaction', async (req, res) => {
  try {
    const userId = req.user.id;

    const result = await pool.query(`
      SELECT t.*, pm.method_type, pm.account_info
      FROM transactions t
      LEFT JOIN payment_methods pm ON t.method_id = pm.id
      WHERE t.user_id = $1
      ORDER BY t.created_at DESC
    `, [userId]);

    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch transactions' });
  }
});

module.exports = router;
