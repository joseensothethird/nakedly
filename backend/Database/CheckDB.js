require('dotenv').config();
const bcrypt = require('bcryptjs');
const { Pool } = require('pg');

// Database configuration - use your existing config or this basic one
const pool = new Pool({
  user: process.env.DB_USER || 'postgres',
  host: process.env.DB_HOST || 'localhost',
  database: process.env.DB_NAME || 'your_database',
  password: process.env.DB_PASSWORD || 'your_password',
  port: process.env.DB_PORT || 5432,
});

async function checkAndFixDatabase() {
  let client;
  try {
    client = await pool.connect();
    console.log('✅ Successfully connected to database');

    // Check current users
    const usersResult = await client.query('SELECT id, email, password_hash, role FROM users');
    console.log('\n📊 Current users in database:');
    console.table(usersResult.rows);

    // Check password hashing status
    console.log('\n🔒 Password Hashing Status:');
    for (const user of usersResult.rows) {
      const isHashed = user.password_hash.startsWith('$2a$') || 
                      user.password_hash.startsWith('$2b$');
      
      console.log(`\n👤 User: ${user.email}`);
      console.log(`🔑 Password hash: ${isHashed ? '✅ Properly hashed' : '❌ PLAINTEXT'}`);
      console.log(`   ${user.password_hash}`);

      // Uncomment to automatically fix plaintext passwords
      // if (!isHashed) {
      //   console.log('⚠️  Found plaintext password - hashing...');
      //   const hashedPassword = await bcrypt.hash(user.password_hash, 10);
      //   await client.query(
      //     'UPDATE users SET password_hash = $1 WHERE id = $2', 
      //     [hashedPassword, user.id]
      //   );
      //   console.log('✅ Password has been hashed and updated');
      // }
    }

    // Test password comparison
    if (usersResult.rows.length > 0) {
      console.log('\n🧪 Testing password comparison:');
      const testUser = usersResult.rows[0];
      const testPasswords = [
        'password', '123456', 'admin', 'user', 
        'Chynna', 'Babyonatis#19', // From your example
        testUser.password_hash // Also test the raw value
      ];

      for (const testPassword of testPasswords) {
        const isMatch = await bcrypt.compare(testPassword, testUser.password_hash);
        console.log(`🔎 Testing "${testPassword}": ${isMatch ? '✅ MATCH' : '❌ NO MATCH'}`);
      }
    }

  } catch (error) {
    console.error('❌ Database check error:', error);
  } finally {
    if (client) client.release();
    await pool.end();
    console.log('\n🔌 Database connection closed');
  }
}

// Run the check
checkAndFixDatabase();