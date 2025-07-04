const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  user: process.env.DB_USER || 'postgres', // Fallback value
  host: process.env.DB_HOST || 'localhost',
  database: process.env.DB_NAME || 'nakedly',
  password: process.env.DB_PASSWORD || 'ensojose', // Empty string fallback
  port: parseInt(process.env.DB_PORT) || 5432, // Ensure number
  ssl: false // Disable SSL for local development
});
module.exports = pool;