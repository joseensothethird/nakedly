const express = require('express');
const router = express.Router();

// Direct response at /api
router.get('/', (req, res) => {
  res.send('Welcome to the Nakedly API root!');
});

// Explicit /api/hello endpoint
router.get('/hello', (req, res) => {
  res.send('Hello from /api/hello!');
});

module.exports = router;
