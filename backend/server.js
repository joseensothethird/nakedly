require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const http = require('http');
const socketio = require('socket.io');

const app = express();

// 📦 Database connection
const pool = require('./Database/db');

// 🔐 Middleware
app.use(cors({ 
  origin: 'http://localhost:5173', 
  credentials: true 
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Create HTTP server and Socket.io setup
const server = http.createServer(app);
const io = socketio(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
    credentials: true
  }
});

// Make io accessible to routes
app.set('socketio', io);

// Socket.io connection handling
io.on('connection', (socket) => {
  console.log('New client connected:', socket.id);

  // Handle authentication and join user's personal room
  socket.on('authenticate', (token) => {
    try {
      // Verify token and get user ID (you'll need your verifyToken implementation)
      const decoded = verifyToken(token); // Implement this or use your auth middleware
      const userId = decoded.id;
      
      // Join user's personal room
      socket.join(`user_${userId}`);
      console.log(`User ${userId} joined their room`);
      
      // Store user ID in socket for later use
      socket.userId = userId;
    } catch (error) {
      console.error('Authentication failed:', error);
      socket.disconnect();
    }
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected:', socket.id);
  });

  // Handle any other socket events you need
});

// 📌 Import routes
const authRoutes = require('./routes/AuthRoutes');
const usersRoute = require('./routes/usersRoute');
const conversationsRouter = require('./routes/messageRoutes');
const paymentRoutes = require('./routes/PaymentRoutes');
const profileRoutes = require('./routes/ProfileRuotes');
const uploadRoutes = require('./routes/Profile/UploadRoutes');

// 🔁 API Routes
app.use('/api/auth', authRoutes);
app.use('/api/users', usersRoute);
app.use('/api/conversations', conversationsRouter);
app.use('/api/payment', paymentRoutes);
app.use('/api/profile', profileRoutes);
app.use('/api/uploads', uploadRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ 
    error: 'Something went wrong!',
    message: err.message 
  });
});

// ✅ Health check
app.get('/', (req, res) => {
  res.json({ 
    status: 'API is running',
    timestamp: new Date().toISOString(),
    websocket: 'active'
  });
});

// 🚀 Start server
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
  console.log(`Socket.io server ready`);
});