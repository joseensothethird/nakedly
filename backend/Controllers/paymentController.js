const PaymentService = require('../Services/PaymentService');

const PaymentController = {
  // Add a bank card
  async addBankCard(req, res) {
    try {
      const userId = req.user.id; // Assuming user is authenticated
      const cardDetails = req.body;
      
      const paymentMethod = await PaymentService.addBankCard(userId, cardDetails);
      res.status(201).json(paymentMethod);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  // Add an e-wallet
  async addEWallet(req, res) {
    try {
      const userId = req.user.id;
      const ewalletDetails = req.body;
      
      const paymentMethod = await PaymentService.addEWallet(userId, ewalletDetails);
      res.status(201).json(paymentMethod);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  // Get all payment methods
  async getPaymentMethods(req, res) {
    try {
      const userId = req.user.id;
      const paymentMethods = await PaymentService.getPaymentMethods(userId);
      res.json(paymentMethods);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Set primary payment method
  async setPrimaryPaymentMethod(req, res) {
    try {
      const userId = req.user.id;
      const { methodId } = req.params;
      
      const paymentMethod = await PaymentService.setPrimaryPaymentMethod(userId, methodId);
      res.json(paymentMethod);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  // Delete payment method
  async deletePaymentMethod(req, res) {
    try {
      const userId = req.user.id;
      const { methodId } = req.params;
      
      const result = await PaymentService.deletePaymentMethod(userId, methodId);
      res.json(result);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  // Get transaction history
  async getTransactionHistory(req, res) {
    try {
      const userId = req.user.id;
      const { page = 1, limit = 10, filter = 'all' } = req.query;
      
      const history = await PaymentService.getTransactionHistory(
        userId, 
        parseInt(page), 
        parseInt(limit), 
        filter
      );
      
      res.json(history);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};

module.exports = PaymentController;