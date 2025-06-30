// server.js
require('dotenv').config(); // Load environment variables
const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

// Middleware
app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Parse incoming JSON requests

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to the Nakedly application!');
});

// API Routes
const apiRoutes = require('./routes/api');
app.use('/api', apiRoutes);

// User Routes

const userRoutes = require('./routes/users');
app.use('/api/users', userRoutes);

// Serve static files (if applicable)
app.use(express.static(path.join(__dirname, 'public')));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
