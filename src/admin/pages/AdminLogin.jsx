import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../AdminLogin.css';

function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple mock login for MVP
    if (email && password) {
      // In a real app, this would validate credentials with the backend
      console.log('Login attempt:', { email, password });
      navigate('/admin/dashboard');
    }
  };
  
  return (
    <div className="admin-login">
      <div className="login-container">
        <div className="login-card">
          <div className="login-header">
            <img src="/logo2.png" alt="MOJJAM TECHNOLOGIES" className="login-logo" />
            <h1>Admin Login</h1>
            <p>Enter your credentials to access the dashboard</p>
          </div>
          
          <form className="login-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@example.com"
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
              />
            </div>
            
            <button type="submit" className="btn btn-primary btn-lg btn-block">
              Login
            </button>
          </form>
          
          <div className="login-footer">
            <Link to="/" className="back-link">← Back to Website</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminLogin;

