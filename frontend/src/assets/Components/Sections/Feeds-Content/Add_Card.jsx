import React, { useState } from 'react';
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
  Clock,
  Filter,
  Search,
  Download
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
  EmptyStateText,
  TransactionControls,
  CardSearchInput,
  FilterButton,
  ExportButton,
  TransactionHeader,
  PaginationControls,
  PageButton,
  TransactionTypeFilter
} from '../../styles/pages/feeds';

const PaymentCard = ({ 
  paymentMethods = [], 
  earnings = null, 
  transactions = [],
  allTransactions = [] 
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState('all');
  const transactionsPerPage = 10;

  // Filter transactions based on search term and filter type
  const filteredTransactions = allTransactions.filter(transaction => {
    const matchesSearch = transaction.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         transaction.amount.toString().includes(searchTerm);
    const matchesFilter = filter === 'all' || transaction.type === filter;
    return matchesSearch && matchesFilter;
  });

  // Pagination logic
  const indexOfLastTransaction = currentPage * transactionsPerPage;
  const indexOfFirstTransaction = indexOfLastTransaction - transactionsPerPage;
  const currentTransactions = filteredTransactions.slice(indexOfFirstTransaction, indexOfLastTransaction);
  const totalPages = Math.ceil(filteredTransactions.length / transactionsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleExport = () => {
    // Implement export functionality (CSV, PDF, etc.)
    console.log('Exporting transactions...');
  };

  return (
    <PaymentContainer>
      <PaymentHeader>
        <PaymentTitle>Payments & Earnings</PaymentTitle>
      </PaymentHeader>

      <PaymentContent>
        {/* Payment Methods Section */}
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

        {/* Earnings Section */}
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

        {/* Comprehensive Transactions Section */}
        <PaymentSection>
          <TransactionHeader>
            <div>
              <SectionTitle>Transaction History</SectionTitle>
              <SectionSubtitle>All deposits and withdrawals</SectionSubtitle>
            </div>
            <TransactionControls>
              <CardSearchInput>
                <Search size={16} />
                <input 
                  type="text" 
                  placeholder="Search transactions..." 
                  value={searchTerm}
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                    setCurrentPage(1);
                  }}
                />
              </CardSearchInput>
              <TransactionTypeFilter>
                <select 
                  value={filter} 
                  onChange={(e) => {
                    setFilter(e.target.value);
                    setCurrentPage(1);
                  }}
                >
                  <option value="all">All Transactions</option>
                  <option value="deposit">Deposits</option>
                  <option value="withdrawal">Withdrawals</option>
                </select>
              </TransactionTypeFilter>
              <ExportButton onClick={handleExport}>
                <Download size={16} />
                <span>Export</span>
              </ExportButton>
            </TransactionControls>
          </TransactionHeader>

          {currentTransactions.length > 0 ? (
            <>
              <TransactionHistory>
                {currentTransactions.map((transaction, index) => (
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
                      {transaction.type === 'deposit' ? '+' : '-'}
                      ${Math.abs(transaction.amount).toFixed(2)}
                    </TransactionAmount>
                  </TransactionItem>
                ))}
              </TransactionHistory>

              {totalPages > 1 && (
                <PaginationControls>
                  <PageButton 
                    disabled={currentPage === 1}
                    onClick={() => handlePageChange(currentPage - 1)}
                  >
                    Previous
                  </PageButton>
                  
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                    <PageButton
                      key={page}
                      active={page === currentPage}
                      onClick={() => handlePageChange(page)}
                    >
                      {page}
                    </PageButton>
                  ))}
                  
                  <PageButton 
                    disabled={currentPage === totalPages}
                    onClick={() => handlePageChange(currentPage + 1)}
                  >
                    Next
                  </PageButton>
                </PaginationControls>
              )}
            </>
          ) : (
            <EmptyState>
              <EmptyStateIcon>
                <CreditCard size={40} />
              </EmptyStateIcon>
              <EmptyStateText>
                {filter === 'all' 
                  ? 'No transactions found' 
                  : `No ${filter} transactions found`}
              </EmptyStateText>
            </EmptyState>
          )}
        </PaymentSection>
      </PaymentContent>
    </PaymentContainer>
  );
};

export default PaymentCard;