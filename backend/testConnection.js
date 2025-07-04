require('dotenv').config();
const { Pool } = require('pg');

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

(async () => {
  try {
    const client = await pool.connect();
    console.log('✅ Successfully connected to database');
    const res = await client.query('SELECT NOW()');
    console.log('Current time:', res.rows[0].now);
    client.release();
  } catch (err) {
    console.error('❌ Connection error:', err);
  } finally {
    await pool.end();
  }
})();