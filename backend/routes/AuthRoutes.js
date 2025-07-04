const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const authMiddleware = require('../Middlewares/authMiddleware');

// Login route
router.post('/login', authController.login);

// Protected test route
router.get('/test', 
  authMiddleware.verifyToken,
  authMiddleware.checkRole(['user', 'admin']),
  (req, res) => {
    res.json({ 
      message: 'Authenticated successfully',
      user: req.user
    });
  }
);

module.exports = router;