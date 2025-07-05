const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  user: process.env.DB_USER || 'postgres',
  host: process.env.DB_HOST || 'localhost',
  database: process.env.DB_NAME || 'nakedly',
  password: process.env.DB_PASSWORD || 'ensojose',
  port: parseInt(process.env.DB_PORT) || 5432,
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false
});

// Test DB connection
pool.query('SELECT NOW()')
  .then((res) => {
    console.log('✅ PostgreSQL connected successfully at:', res.rows[0].now);
  })
  .catch((err) => {
    console.error('❌ Database connection failed!');
    console.error('Details:', err.message || err);
    process.exit(1); // Optional: shut down app if DB fails
  });

module.exports = pool;