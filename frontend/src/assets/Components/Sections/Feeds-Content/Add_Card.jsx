// components/payments/PaymentCard.js
import React from 'react';
import {
  CreditCard,
  DollarSign,
  Plus,
  ChevronRight,
  CheckCircle,
  ArrowDownCircle,
  ArrowUpCircle,
  Home,
  Calendar,
  Clock
} from 'react-feather';
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
  EmptyStateText
} from '../../styles/pages/feeds';

const PaymentCard = ({ paymentMethods = [], earnings = null, transactions = [] }) => {
  return (
    <PaymentContainer>
      <PaymentHeader>
        <PaymentTitle>Payments & Earnings</PaymentTitle>
      </PaymentHeader>

      <PaymentContent>
        {/* Payment Methods Section - Only shows if methods exist or in empty state */}
        <PaymentSection>
          <SectionTitle>Payment Methods</SectionTitle>
          <SectionSubtitle>How you receive payments</SectionSubtitle>

          {paymentMethods.length > 0 ? (
            paymentMethods.map((method, index) => (
              <PaymentMethod key={index}>
                <MethodCard>
                  <MethodDetails>
                    <MethodIcon>
                      {method.type === 'card' ? <CreditCard size={20} /> : <Home size={20} />}
                    </MethodIcon>
                    <MethodInfo>
                      <MethodName>
                        {method.name} •••• {method.last4}
                        {method.primary && <CheckCircle size={16} />}
                      </MethodName>
                    </MethodInfo>
                  </MethodDetails>
                  <MethodAction>
                    <ChevronRight size={20} />
                  </MethodAction>
                </MethodCard>
              </PaymentMethod>
            ))
          ) : (
            <EmptyState>
              <EmptyStateIcon>
                <CreditCard size={40} />
              </EmptyStateIcon>
              <EmptyStateText>No payment methods added</EmptyStateText>
            </EmptyState>
          )}

          <AddMethodButton>
            <Plus size={20} />
            <span>Add payment method</span>
          </AddMethodButton>
        </PaymentSection>

        {/* Earnings Section - Only shows if earnings data exists */}
        {earnings && (
          <PaymentSection>
            <SectionTitle>Your Earnings</SectionTitle>
            <SectionSubtitle>All time balance and payouts</SectionSubtitle>

            <EarningsSummary>
              <EarningsCard>
                <EarningsHeader>
                  <DollarSign size={20} />
                  <span>Total Earnings</span>
                </EarningsHeader>
                <EarningsAmount>${earnings.total.toFixed(2)}</EarningsAmount>
                <EarningsLabel>All time</EarningsLabel>
              </EarningsCard>

              <EarningsCard>
                <EarningsHeader>
                  <DollarSign size={20} />
                  <span>Available Now</span>
                </EarningsHeader>
                <EarningsAmount>${earnings.available.toFixed(2)}</EarningsAmount>
                <EarningsLabel>Ready to withdraw</EarningsLabel>
              </EarningsCard>
            </EarningsSummary>

            <EarningsBreakdown>
              <BreakdownItem>
                <BreakdownLabel>Pending clearance</BreakdownLabel>
                <BreakdownValue>${earnings.pending.toFixed(2)}</BreakdownValue>
              </BreakdownItem>
              <BreakdownItem>
                <BreakdownLabel>This month</BreakdownLabel>
                <BreakdownValue>${earnings.thisMonth.toFixed(2)}</BreakdownValue>
              </BreakdownItem>
              <BreakdownItem>
                <BreakdownLabel>Last month</BreakdownLabel>
                <BreakdownValue>${earnings.lastMonth.toFixed(2)}</BreakdownValue>
              </BreakdownItem>
            </EarningsBreakdown>
          </PaymentSection>
        )}

        {/* Transactions Section - Only shows if transactions exist */}
        {transactions.length > 0 && (
          <PaymentSection>
            <SectionTitle>Transaction History</SectionTitle>
            <SectionSubtitle>Recent deposits and withdrawals</SectionSubtitle>

            <TransactionHistory>
              {transactions.map((transaction, index) => (
                <TransactionItem key={index}>
                  <TransactionIcon>
                    {transaction.type === 'deposit' ? (
                      <ArrowDownCircle size={20} color="#10B981" />
                    ) : (
                      <ArrowUpCircle size={20} color="#EF4444" />
                    )}
                  </TransactionIcon>
                  <TransactionDetails>
                    <TransactionName>{transaction.name}</TransactionName>
                    <TransactionDate>
                      {transaction.date.includes('week') || transaction.date.includes('day') ? (
                        <Clock size={12} style={{ marginRight: 4 }} />
                      ) : (
                        <Calendar size={12} style={{ marginRight: 4 }} />
                      )}
                      {transaction.date}
                    </TransactionDate>
                  </TransactionDetails>
                  <TransactionAmount positive={transaction.type === 'deposit'}>
                    {transaction.amount > 0 ? '+' : ''}
                    {transaction.amount.toFixed(2)}
                  </TransactionAmount>
                </TransactionItem>
              ))}
            </TransactionHistory>
          </PaymentSection>
        )}
      </PaymentContent>
    </PaymentContainer>
  );
};

export default PaymentCard;