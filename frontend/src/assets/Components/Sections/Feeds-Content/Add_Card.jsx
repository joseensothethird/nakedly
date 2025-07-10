import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {
  PaymentContainer,
  PaymentHeader,
  PaymentTitle,
  PaymentContent,
  PaymentSection,
  SectionTitle,
  SectionSubtitle,
  PaymentMethod,
  MethodCard,
  MethodDetails,
  MethodIcon,
  MethodInfo,
  MethodName,
  MethodAction,
  AddMethodButton,
  EarningsSummary,
  EarningsCard,
  EarningsHeader,
  EarningsAmount,
  EarningsLabel,
  EarningsBreakdown,
  BreakdownItem,
  BreakdownLabel,
  BreakdownValue,
  TransactionHistory,
  TransactionItem,
  TransactionIcon,
  TransactionDetails,
  TransactionName,
  TransactionDate,
  TransactionAmount,
  EmptyState,
  EmptyStateIcon,
  EmptyStateText,
  TransactionControls,
  CardSearchInput,
  FilterButton,
  ExportButton,
  TransactionHeader,
  PaginationControls,
  PageButton,
  TransactionTypeFilter
} from '../../styles/pages/feeds'; // Adjust the path as needed
// Styled Components


// PaymentCard Component
const PaymentCard = () => {
  const [connectedAccounts, setConnectedAccounts] = useState([]);
  const [transactions, setTransactions] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedType, setSelectedType] = useState('');
  const [accountInfo, setAccountInfo] = useState({});
  const token = localStorage.getItem('token');

  const [newTransaction, setNewTransaction] = useState({
    amount: '',
    status: 'completed',
    method_id: '',
    description: ''
  });

  // Fetch connected accounts
  useEffect(() => {
    fetch('http://localhost:5000/api/payment/method', {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    })
      .then(res => res.json())
      .then(data => setConnectedAccounts(data))
      .catch(err => console.error('Error fetching methods:', err));
  }, [token]);

  // Fetch transactions
  useEffect(() => {
    fetch('http://localhost:5000/api/payment/transaction', {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    })
      .then(res => res.json())
      .then(data => setTransactions(data))
      .catch(err => console.error('Error fetching transactions:', err));
  }, [token]);

  const handleSubmitConnection = async () => {
    if (!selectedType || Object.values(accountInfo).some(v => !v)) {
      alert('Please fill all fields.');
      return;
    }

    try {
      const res = await fetch('http://localhost:5000/api/payment/method', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
          method_type: selectedType,
          account_info: accountInfo,
          is_default: connectedAccounts.length === 0
        })
      });

      const data = await res.json();
      setConnectedAccounts(prev => [data, ...prev]);
      setShowModal(false);
      setSelectedType('');
      setAccountInfo({});
    } catch (err) {
      console.error('Failed to connect account:', err);
    }
  };

  const renderFormFields = () => {
    if (selectedType === 'paypal') {
      return (
        <FormGroup>
          <Label>PayPal Email</Label>
          <Input
            type="email"
            placeholder="example@paypal.com"
            value={accountInfo.email || ''}
            onChange={e => setAccountInfo({ email: e.target.value })}
          />
        </FormGroup>
      );
    } else if (selectedType === 'bank') {
      return (
        <>
          <FormGroup>
            <Label>Bank Name</Label>
            <Input
              type="text"
              placeholder="e.g. Chase, Bank of America"
              value={accountInfo.bank_name || ''}
              onChange={e => setAccountInfo({ ...accountInfo, bank_name: e.target.value })}
            />
          </FormGroup>
          <FormGroup>
            <Label>Account Number</Label>
            <Input
              type="text"
              placeholder="123456789"
              value={accountInfo.account_number || ''}
              onChange={e => setAccountInfo({ ...accountInfo, account_number: e.target.value })}
            />
          </FormGroup>
        </>
      );
    } else if (selectedType === 'ewallet') {
      return (
        <>
          <FormGroup>
            <Label>eWallet Provider</Label>
            <Input
              type="text"
              placeholder="e.g. GCash, Maya"
              value={accountInfo.ewallet || ''}
              onChange={e => setAccountInfo({ ...accountInfo, ewallet: e.target.value })}
            />
          </FormGroup>
          <FormGroup>
            <Label>Phone Number</Label>
            <Input
              type="text"
              placeholder="+1 234 567 8900"
              value={accountInfo.phone || ''}
              onChange={e => setAccountInfo({ ...accountInfo, phone: e.target.value })}
            />
          </FormGroup>
        </>
      );
    }

    return null;
  };

  const addTransaction = async () => {
    try {
      const res = await fetch('http://localhost:5000/api/payment/transaction', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
          ...newTransaction,
          amount: parseFloat(newTransaction.amount)
        })
      });

      const data = await res.json();
      setTransactions(prev => [data, ...prev]);
      setNewTransaction({ amount: '', status: 'completed', method_id: '', description: '' });
    } catch (err) {
      console.error('Failed to add transaction:', err);
    }
  };

  const getMethodIcon = (type) => {
    switch(type) {
      case 'paypal':
        return 'P';
      case 'bank':
        return 'B';
      case 'ewallet':
        return 'E';
      default:
        return '?';
    }
  };

  return (
    <PaymentContainer>
      <PaymentHeader>
        <PaymentTitle>Payment Methods</PaymentTitle>
      </PaymentHeader>

      <PaymentContent>
        <PaymentSection>
          <SectionTitle>Connected Accounts</SectionTitle>
          <SectionSubtitle>Manage your payment methods for withdrawals and deposits</SectionSubtitle>

          {connectedAccounts.length === 0 ? (
            <EmptyState>
              <EmptyStateText>No payment methods connected</EmptyStateText>
            </EmptyState>
          ) : (
            connectedAccounts.map(account => (
              <MethodCard key={account.id}>
                <MethodDetails>
                  <MethodIcon>{getMethodIcon(account.method_type)}</MethodIcon>
                  <MethodInfo>
                    <MethodName>
                      {account.method_type.toUpperCase()}
                      {account.is_default && <span style={{ color: 'green', fontSize: '12px', marginLeft: '8px' }}>(Default)</span>}
                    </MethodName>
                    <div style={{ fontSize: '12px', color: '#6B7280' }}>
                      {Object.entries(account.account_info).map(([key, value]) => (
                        <div key={key}>{key}: {value}</div>
                      ))}
                    </div>
                  </MethodInfo>
                </MethodDetails>
                <MethodAction>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </MethodAction>
              </MethodCard>
            ))
          )}

          <AddMethodButton onClick={() => setShowModal(true)}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
            Connect New Payment Method
          </AddMethodButton>
        </PaymentSection>

        <PaymentSection>
          <SectionTitle>Transaction History</SectionTitle>
          <SectionSubtitle>View your payment transactions</SectionSubtitle>

          {transactions.length === 0 ? (
            <EmptyState>
              <EmptyStateText>No transactions yet</EmptyStateText>
            </EmptyState>
          ) : (
            <>
              <TransactionTable>
                <thead>
                  <tr>
                    <th>Amount</th>
                    <th>Status</th>
                    <th>Description</th>
                    <th>Method</th>
                    <th>Date</th>
                  </tr>
                </thead>
                <tbody>
                  {transactions.map(tx => (
                    <tr key={tx.id}>
                      <td>${tx.amount}</td>
                      <td>
                        <span style={{
                          color: tx.status === 'completed' ? '#10B981' : 
                                 tx.status === 'pending' ? '#F59E0B' : '#EF4444',
                          fontWeight: 500
                        }}>
                          {tx.status}
                        </span>
                      </td>
                      <td>{tx.description}</td>
                      <td>{tx.method_type}</td>
                      <td>{new Date(tx.created_at).toLocaleString()}</td>
                    </tr>
                  ))}
                </tbody>
              </TransactionTable>
            </>
          )}
        </PaymentSection>

      </PaymentContent>

      {/* Modal */}
      {showModal && (
        <ModalOverlay>
          <ModalContent>
            <ModalHeader>Connect Payment Method</ModalHeader>
            
            {!selectedType ? (
              <div style={{ display: 'flex', gap: '12px', marginBottom: '24px' }}>
                <Button className="outline" onClick={() => setSelectedType('paypal')}>
                  PayPal
                </Button>
                <Button className="outline" onClick={() => setSelectedType('bank')}>
                  Bank Account
                </Button>
                <Button className="outline" onClick={() => setSelectedType('ewallet')}>
                  eWallet
                </Button>
              </div>
            ) : (
              <div>
                <p style={{ marginBottom: '16px', color: '#6B7280', fontSize: '14px' }}>
                  <strong style={{ color: '#1F2937' }}>{selectedType.toUpperCase()}</strong> connection details
                </p>
                {renderFormFields()}
              </div>
            )}

            <ModalFooter>
              {selectedType && (
                <Button className="secondary" onClick={() => setSelectedType('')}>
                  Back
                </Button>
              )}
              {selectedType ? (
                <Button className="primary" onClick={handleSubmitConnection}>
                  Connect Account
                </Button>
              ) : (
                <Button className="secondary" onClick={() => setShowModal(false)}>
                  Cancel
                </Button>
              )}
            </ModalFooter>
          </ModalContent>
        </ModalOverlay>
      )}
    </PaymentContainer>
  );
};

export default PaymentCard;