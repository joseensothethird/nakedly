// Load environment variables FIRST
require('dotenv').config({ path: require('path').resolve(__dirname, '.env') });

// Debug: Check loaded environment variables
console.log('Loaded Environment:', {
  DB_USER: process.env.DB_USER,
  DB_HOST: process.env.DB_HOST,
  DB_DATABASE: process.env.DB_DATABASE,
  DB_PORT: process.env.DB_PORT,
  SERVER_PORT: process.env.PORT
});

const { Pool } = require('pg');
const express = require('express');

const app = express();

// Fixed Database Configuration
const pool = new Pool({
  user: String(process.env.DB_USER),  // Explicit string conversion
  host: String(process.env.DB_HOST),
  database: String(process.env.DB_DATABASE),
  password: String(process.env.DB_PASSWORD), // Critical fix for SASL error
  port: Number(process.env.DB_PORT) || 5432, // Ensure numeric port
});

// Test Connection
(async () => {
  let client;
  try {
    client = await pool.connect();
    console.log('✅ Database connected successfully!');
    
    // Verify connection
    const res = await client.query('SELECT NOW()');
    console.log('🕒 Database time:', res.rows[0].now);
  } catch (err) {
    console.error('❌ Connection failed:', {
      error: err.message,
      config: {
        user: process.env.DB_USER,
        host: process.env.DB_HOST,
        database: process.env.DB_DATABASE,
        port: process.env.DB_PORT
      }
    });
    process.exit(1);
  } finally {
    if (client) client.release();
  }
})();

// Start Server (on PORT, not DB_PORT)
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});