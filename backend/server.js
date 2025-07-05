const express = require('express');
const cors = require('cors');
const pool = require('./Database/db');
const authRoutes = require('./routes/AuthRoutes');
const conversationsRouter = require('./routes/messageRoutes');
const paymentRoutes = require('./routes/PaymentRoutes');
const app = express();

// ✅ Minimal working CORS config
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));

app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/conversations', conversationsRouter); // Changed from router.use to app.use
app.use('/api/payments', paymentRoutes);

app.get('/', (req, res) => {
  res.send('API is running');
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Server error' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});