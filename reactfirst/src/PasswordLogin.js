
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './FacultyDashboard';
import './FacultyDashboard.css';

function PasswordLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  
  const handlePasswordLogin = (e) => {
    e.preventDefault();
    // Simulated login (replace with your authentication logic)
    if (email === 'faculty@bitsathy.ac.in' && password === 'faculty123') {
      const simulatedUser = {
        email: email,
        permissions: ['faculty', './FacultyDashboard'] 
      };
      localStorage.setItem('isLoggedIn', true);
      localStorage.setItem('user', JSON.stringify(simulatedUser));
      navigate('/FacultyDashboard'); 
    } else {
      setError('Invalid email or password! Please try again or use the alternate staff login.');
    }
  };

  return (
    <div>
      <form onSubmit={handlePasswordLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
      {error && (
        <div>
          <p style={{ color: 'red' }}>{error}</p>
          <div>
            <h1>ALTERNATE FACULTY</h1>
            <p>If you are an alternate faculty, please click <Link to="/AlternateStaffLogin">here</Link> to login.</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default PasswordLogin;


/*
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FacultyDashboard from './FacultyDashboard';
import './FacultyDashboard.css';
import { Link } from 'react-router-dom';
function PasswordLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  const handlePasswordLogin = (e) => {
    e.preventDefault();
    // Simulated login (replace with your authentication logic)
    if (email === 'faculty@bitsathy.ac.in' && password === 'faculty123') {
      const simulatedUser = {
        email: email,
        permissions: ['faculty', './FacultyDashboard'] 
      };
      setIsLoggedIn(true);
      setUser(simulatedUser);
      localStorage.setItem('isLoggedIn', true);
      navigate('./FacultyDashboard');
    } else {
      alert('Invalid email or password!');
    }
  };
  const hasPermissions = (user, requiredPermissions) => {
    return user && requiredPermissions.every(permission => user.permissions.includes(permission));
  };

  if (isLoggedIn && hasPermissions(user, ['faculty', './FacultyDashboard'])) {
    return <FacultyDashboard />;
  }

  return (
    <div>
      <form onSubmit={handlePasswordLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Link to="/FacultyDashboard">
        <button type="submit">Login</button>
        </Link>
      </form>
    </div>
  );
}

export default PasswordLogin;
*/