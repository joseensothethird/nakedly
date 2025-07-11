const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const pool = require('../Database/db');

const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET;

// — POST /api/auth/register
router.post('/register', async (req, res) => {
  const { email, password, role } = req.body;
  if (!email || !password || !role)
    return res.status(400).json({ message: 'All fields are required' });

  try {
    const { rows } = await pool.query(
      'SELECT 1 FROM users WHERE email = $1',
      [email]
    );
    if (rows.length)
      return res.status(409).json({ message: 'Email already registered' });

    const salt = await bcrypt.genSalt(10);
    const password_hash = await bcrypt.hash(password, salt);

    const newUser = await pool.query(
      `INSERT INTO users (email, password_hash, role)
       VALUES ($1, $2, $3)
       RETURNING id, email, role, created_at`,
      [email, password_hash, role]
    );

    res.status(201).json({
      user: newUser.rows[0],
      message: 'Registration successful',
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error during registration' });
  }
});

// — POST /api/auth/login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password)
    return res.status(400).json({ message: 'Email and password are required' });

  try {
    const { rows } = await pool.query(
      'SELECT * FROM users WHERE email = $1',
      [email]
    );
    if (!rows.length)
      return res.status(401).json({ message: 'Invalid email or password' });

    const user = rows[0];
    const matched = await bcrypt.compare(password, user.password_hash);
    if (!matched)
      return res.status(401).json({ message: 'Invalid email or password' });

    const payload = { id: user.id, email: user.email };
   const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, {
  expiresIn: '1d'
});


    res.json({
      message: 'Login successful',
      user: { id: user.id, email: user.email, role: user.role },
      token,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error during login' });
  }
});

module.exports = router;