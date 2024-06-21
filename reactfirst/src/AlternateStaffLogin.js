import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';
import './AlternateStaffDashboard';
import AlternateStaffDashboard from './AlternateStaffDashboard';
function AlternateStaffLogin() {
  const [email, setEmail] = useState('');
  const [altEmail, setAltEmail] = useState('');
  const [altPassword, setAltPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  const handleAltStaffLogin = (e) => {
    e.preventDefault();
    // Simulated login (replace with your authentication logic)
    if (email === 'faculty@bitsathy.ac.in' && altEmail === 'altfaculty@bitsathy.ac.in' && altPassword === 'altfaculty123') {
      const simulatedUser = {
        email: email,
        permissions: ['alternate-staff', './AlternateStaffDashboard'] 
      };
      setIsLoggedIn(true);
      setUser(simulatedUser);
      localStorage.setItem('isLoggedIn', true);
      navigate('/AlternateStaffDashboard');
    } else {
      setError('Invalid login credentials! Please try again.');
    }
  };
  const hasPermissions = (user, requiredPermissions) => {
    return user && requiredPermissions.every(permission => user.permissions.includes(permission));
  };
  if (isLoggedIn && hasPermissions(user, ['alternate-staff', 'AlternateStaffDashboard'])) {
    return < AlternateStaffDashboard />; 
  }

  return (
    <div>
      <form onSubmit={handleAltStaffLogin}>
        <h1>ALTERNATE STAFF LOGIN</h1>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="email"
          placeholder="Alternate Email"
          value={altEmail}
          onChange={(e) => setAltEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Alternate Email Password"
          value={altPassword}
          onChange={(e) => setAltPassword(e.target.value)}
        /> 
        <button type="submit">Login</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}

export default AlternateStaffLogin;
