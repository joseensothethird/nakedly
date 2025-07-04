import React, { useState } from 'react';
import { 
  PageWrapper, 
  AuthContainer, 
  Title, 
  Input, 
  SubmitButton, 
  FooterText
} from '../../Components/styles/pages/AUTH';

const AdminLoginPage = () => {
  const [formData, setFormData] = useState({ 
    email: '', 
    password: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      const response = await fetch('http://localhost:5000/api/auth/admin-login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password
        }),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Admin login failed');
      }

      // Check if user has admin role
      if (data.user.role !== 'admin') {
        throw new Error('Access denied. Admin privileges required.');
      }
      
      // Save admin token and data
      localStorage.setItem('adminToken', data.token);
      localStorage.setItem('adminData', JSON.stringify(data.user));
      
      // Redirect to admin dashboard
      window.location.href = '/admin/dashboard';
      
    } catch (error) {
      console.error('Admin login error:', error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <PageWrapper>
      <AuthContainer>
        <Title>Admin Portal Login</Title>

        {error && <div style={{ color: 'red', marginBottom: '1rem' }}>{error}</div>}

        <form onSubmit={handleSubmit}>
          <Input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Admin Email"
          />

          <Input
            type="password"
            name="password"
            required
            value={formData.password}
            onChange={handleInputChange}
            placeholder="Password"
          />

          <SubmitButton type="submit" disabled={loading}>
            {loading ? 'Authenticating...' : 'Access Dashboard'}
          </SubmitButton>
        </form>

        <FooterText>
          Restricted access. Contact <a href="mailto:support@company.com">system administrator</a> for assistance.
        </FooterText>
      </AuthContainer>
    </PageWrapper>
  );
};

export default AdminLoginPage;