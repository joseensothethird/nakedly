const pool = require('../Database/db');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    // 1. Check if user exists (by email only)
    const userQuery = await pool.query(
      'SELECT * FROM users WHERE email = $1',
      [email]
    );

    if (userQuery.rows.length === 0) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const user = userQuery.rows[0];

    // 2. Verify password
    const isMatch = await bcrypt.compare(password, user.password_hash);
    if (!isMatch) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // 3. Check if user is verified
    if (!user.is_verified) {
      return res.status(403).json({ error: 'Please verify your email first' });
    }

    // 4. Generate JWT token
    const token = jwt.sign(
      { id: user.id }, // removed role
      process.env.JWT_SECRET,
      { expiresIn: '1d' }
    );

    // 5. Return user data (excluding password)
    const { password_hash, ...userData } = user;
    res.json({ token, user: userData });

  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: 'Server error' });
  }
};

module.exports = { loginUser };
