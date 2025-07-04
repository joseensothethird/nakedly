import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

// Styled components
const UsersContainer = styled.div`
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const TableHeader = styled.thead``;

const TableRow = styled.tr`
  &:hover {
    background-color: #f5f5f5;
  }
`;

const TableHeaderCell = styled.th`
  padding: 12px 15px;
  text-align: left;
  border-bottom: 1px solid #ddd;
  background-color: #f8f9fa;
  font-weight: 600;
`;

const TableCell = styled.td`
  padding: 12px 15px;
  text-align: left;
  border-bottom: 1px solid #ddd;
`;

const RoleCell = styled.td`
  padding: 12px 15px;
  text-align: left;
  border-bottom: 1px solid #ddd;
  text-transform: capitalize;
  font-weight: 500;
  color: ${props => props.role === 'admin' ? '#dc3545' : '#28a745'};
`;

const PaginationControls = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  gap: 20px;
`;

const PaginationButton = styled.button`
  padding: 8px 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`;

const PageInfo = styled.span`
  font-size: 14px;
  color: #666;
`;

const LoadingMessage = styled.div`
  text-align: center;
  padding: 20px;
  font-size: 18px;
`;

const ErrorMessage = styled.div`
  color: #dc3545;
  padding: 20px;
  background-color: #f8d7da;
  border-radius: 4px;
  margin: 20px;
`;

const NoUsersMessage = styled.td`
  text-align: center;
  color: #666;
  padding: 20px;
`;

const TableResponsive = styled.div`
  overflow-x: auto;
`;

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 10,
    total: 0,
    totalPages: 1
  });

  const fetchUsers = async (page = 1) => {
    try {
      setLoading(true);
      setError('');
      const token = localStorage.getItem('token');
      
      if (!token) {
        throw new Error('Authentication required. Please login.');
      }

      const response = await fetch(`http://localhost:5000/api/users?page=${page}&limit=${pagination.limit}`, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to fetch users');
      }

      setUsers(data.data);
      setPagination(data.pagination);
    } catch (err) {
      setError(err.message);
      console.error('Error fetching users:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= pagination.totalPages) {
      fetchUsers(newPage);
    }
  };

  if (loading) return <LoadingMessage>Loading users...</LoadingMessage>;
  if (error) return <ErrorMessage>Error: {error}</ErrorMessage>;

  return (
    <UsersContainer>
      <h2>User Management</h2>
      
      <TableResponsive>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHeaderCell>ID</TableHeaderCell>
              <TableHeaderCell>Email</TableHeaderCell>
              <TableHeaderCell>First Name</TableHeaderCell>
              <TableHeaderCell>Last Name</TableHeaderCell>
              <TableHeaderCell>Role</TableHeaderCell>
              <TableHeaderCell>Joined Date</TableHeaderCell>
              <TableHeaderCell>Last Updated</TableHeaderCell>
            </TableRow>
          </TableHeader>
          <tbody>
            {users.length > 0 ? (
              users.map(user => (
                <TableRow key={user.id}>
                  <TableCell>{user.id}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.first_name || '-'}</TableCell>
                  <TableCell>{user.last_name || '-'}</TableCell>
                  <RoleCell role={user.role}>{user.role}</RoleCell>
                  <TableCell>{new Date(user.created_at).toLocaleString()}</TableCell>
                  <TableCell>{new Date(user.updated_at).toLocaleString()}</TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <NoUsersMessage colSpan="7">No users found</NoUsersMessage>
              </TableRow>
            )}
          </tbody>
        </Table>
      </TableResponsive>
      
      {pagination.totalPages > 1 && (
        <PaginationControls>
          <PaginationButton 
            onClick={() => handlePageChange(pagination.page - 1)} 
            disabled={pagination.page === 1}
          >
            &laquo; Previous
          </PaginationButton>
          
          <PageInfo>
            Page {pagination.page} of {pagination.totalPages} | 
            Total Users: {pagination.total}
          </PageInfo>
          
          <PaginationButton 
            onClick={() => handlePageChange(pagination.page + 1)} 
            disabled={pagination.page >= pagination.totalPages}
          >
            Next &raquo;
          </PaginationButton>
        </PaginationControls>
      )}
    </UsersContainer>
  );
};

export default UsersList;