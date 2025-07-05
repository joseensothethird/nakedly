const express = require("express");
const bcrypt = require("bcryptjs");
const pool = require("../Database/db");

const router = express.Router();

// Register new user
router.post("/register", async (req, res) => {
  const { email, password, role } = req.body;

  if (!email || !password || !role) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const existingUser = await pool.query(
      "SELECT * FROM users WHERE email = $1",
      [email]
    );

    if (existingUser.rows.length > 0) {
      return res.status(409).json({ message: "Email already registered" });
    }

    const salt = await bcrypt.genSalt(10);
    const password_hash = await bcrypt.hash(password, salt);

    const newUser = await pool.query(
      `INSERT INTO users (email, password_hash, role) 
       VALUES ($1, $2, $3) RETURNING id, email, role, created_at`,
      [email, password_hash, role]
    );

    res
      .status(201)
      .json({ user: newUser.rows[0], message: "Registration successful" });
  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// ✅ Login route (this is what you're missing)
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "Email and password are required" });
  }

  try {
    const userQuery = await pool.query(
      "SELECT * FROM users WHERE email = $1",
      [email]
    );

    if (userQuery.rows.length === 0) {
      return res.status(401).json({ error: "Invalid email" });
    }

    const user = userQuery.rows[0];
    const isMatch = await bcrypt.compare(password, user.password_hash);

    if (!isMatch) {
      return res.status(401).json({ error: "Incorrect password" });
    }

    res.json({
      message: "Login successful",
      user: {
        id: user.id,
        email: user.email,
        role: user.role,
      },
      token: "dummy-token", // Replace with JWT later
    });
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ error: "Server error during login" });
  }
});

// log out
router.get('/auth/status', (req, res) => {
  res.json({ isAuthenticated: req.isAuthenticated() });
});

router.post('/auth/logout', (req, res) => {
  req.logout();
  res.status(200).json({ success: true });
});
module.exports = router;
