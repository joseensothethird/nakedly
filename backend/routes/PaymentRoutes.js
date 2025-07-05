const express = require('express');
const router = express.Router();
const PaymentController = require('../Controllers/paymentController');
const authMiddleware = require('../Middlewares/authMiddleware');

// Apply authentication middleware to all payment routes
router.use(authMiddleware);

// Payment methods
router.post('/methods/card', PaymentController.addBankCard);
router.post('/methods/ewallet', PaymentController.addEWallet);
router.get('/methods', PaymentController.getPaymentMethods);
router.put('/methods/:methodId/primary', PaymentController.setPrimaryPaymentMethod);
router.delete('/methods/:methodId', PaymentController.deletePaymentMethod);

// Transactions
router.get('/transactions', PaymentController.getTransactionHistory);

module.exports = router;