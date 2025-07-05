const db = require('../Database/db')

const PaymentModel = {
  // Add a new payment method
  async addPaymentMethod(userId, methodDetails) {
    const { type, name, details, isPrimary } = methodDetails;
    
    // If setting as primary, first unset any existing primary methods
    if (isPrimary) {
      await db.query(
        'UPDATE payment_methods SET is_primary = false WHERE user_id = $1 AND is_primary = true',
        [userId]
      );
    }

    const result = await db.query(
      `INSERT INTO payment_methods 
       (user_id, type, name, details, is_primary) 
       VALUES ($1, $2, $3, $4, $5) 
       RETURNING *`,
      [userId, type, name, details, isPrimary || false]
    );
    
    return result.rows[0];
  },

  // Get all payment methods for a user
  async getPaymentMethods(userId) {
    const result = await db.query(
      'SELECT * FROM payment_methods WHERE user_id = $1 ORDER BY is_primary DESC, created_at DESC',
      [userId]
    );
    return result.rows;
  },

  // Set a payment method as primary
  async setPrimaryPaymentMethod(userId, methodId) {
    await db.query('BEGIN');
    
    // First unset any existing primary methods
    await db.query(
      'UPDATE payment_methods SET is_primary = false WHERE user_id = $1 AND is_primary = true',
      [userId]
    );
    
    // Then set the new primary method
    const result = await db.query(
      'UPDATE payment_methods SET is_primary = true WHERE id = $1 AND user_id = $2 RETURNING *',
      [methodId, userId]
    );
    
    await db.query('COMMIT');
    return result.rows[0];
  },

  // Delete a payment method
  async deletePaymentMethod(userId, methodId) {
    const result = await db.query(
      'DELETE FROM payment_methods WHERE id = $1 AND user_id = $2 RETURNING *',
      [methodId, userId]
    );
    return result.rows[0];
  },

  // Get transaction history
  async getTransactions(userId, page = 1, limit = 10, filter = 'all') {
    const offset = (page - 1) * limit;
    
    let query = 'SELECT * FROM transactions WHERE user_id = $1';
    const params = [userId];
    
    if (filter !== 'all') {
      query += ' AND type = $2';
      params.push(filter);
    }
    
    query += ' ORDER BY created_at DESC LIMIT $' + (params.length + 1) + ' OFFSET $' + (params.length + 2);
    params.push(limit, offset);
    
    const result = await db.query(query, params);
    return result.rows;
  },

  // Get total transaction count for pagination
  async getTransactionCount(userId, filter = 'all') {
    let query = 'SELECT COUNT(*) FROM transactions WHERE user_id = $1';
    const params = [userId];
    
    if (filter !== 'all') {
      query += ' AND type = $2';
      params.push(filter);
    }
    
    const result = await db.query(query, params);
    return parseInt(result.rows[0].count, 10);
  }
};

module.exports = PaymentModel;