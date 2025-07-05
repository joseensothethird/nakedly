const PaymentModel = require('../models/paymentModel');

class PaymentService {
  // Add bank card
  async addBankCard(userId, cardDetails) {
    const { cardNumber, expiryDate, cvv, cardholderName } = cardDetails;
    
    // Validate card (basic validation)
    if (!cardNumber || !expiryDate || !cvv || !cardholderName) {
      throw new Error('Missing required card details');
    }
    
    // Store only last 4 digits for security
    const last4 = cardNumber.slice(-4);
    const methodDetails = {
      type: 'card',
      name: `${cardholderName}'s Card`,
      details: {
        last4,
        expiryDate,
        cardType: this.detectCardType(cardNumber)
      },
      isPrimary: false
    };
    
    return PaymentModel.addPaymentMethod(userId, methodDetails);
  }

  // Add e-wallet
  async addEWallet(userId, ewalletDetails) {
    const { provider, accountNumber, accountName } = ewalletDetails;
    
    if (!provider || !accountNumber || !accountName) {
      throw new Error('Missing required e-wallet details');
    }
    
    // Validate Philippine e-wallet providers
    const validProviders = ['GCash', 'PayMaya', 'Coins.ph', 'GrabPay'];
    if (!validProviders.includes(provider)) {
      throw new Error('Invalid e-wallet provider');
    }
    
    const methodDetails = {
      type: 'ewallet',
      name: `${provider} (${accountName})`,
      details: {
        provider,
        accountNumber,
        accountName
      },
      isPrimary: false
    };
    
    return PaymentModel.addPaymentMethod(userId, methodDetails);
  }

  // Detect card type based on number
  detectCardType(cardNumber) {
    const visaRegex = /^4[0-9]{12}(?:[0-9]{3})?$/;
    const mastercardRegex = /^5[1-5][0-9]{14}$/;
    const amexRegex = /^3[47][0-9]{13}$/;
    
    if (visaRegex.test(cardNumber)) return 'Visa';
    if (mastercardRegex.test(cardNumber)) return 'Mastercard';
    if (amexRegex.test(cardNumber)) return 'American Express';
    return 'Unknown';
  }

  // Get all payment methods
  async getPaymentMethods(userId) {
    return PaymentModel.getPaymentMethods(userId);
  }

  // Set primary payment method
  async setPrimaryPaymentMethod(userId, methodId) {
    return PaymentModel.setPrimaryPaymentMethod(userId, methodId);
  }

  // Delete payment method
  async deletePaymentMethod(userId, methodId) {
    return PaymentModel.deletePaymentMethod(userId, methodId);
  }

  // Get transaction history
  async getTransactionHistory(userId, page = 1, limit = 10, filter = 'all') {
    const [transactions, total] = await Promise.all([
      PaymentModel.getTransactions(userId, page, limit, filter),
      PaymentModel.getTransactionCount(userId, filter)
    ]);
    
    return {
      transactions,
      total,
      page,
      pages: Math.ceil(total / limit),
      limit
    };
  }
}

module.exports = new PaymentService();