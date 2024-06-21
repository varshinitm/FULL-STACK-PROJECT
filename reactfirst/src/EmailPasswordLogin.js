// EmailPasswordLogin.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import './App.css';
import AdminDashboard from './AdminDashboard';
import './Signup.js';
function EmailPasswordLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate hook
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null); // User object with permissions

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate login (replace with your authentication logic)
    if (email === 'admin@bitsathy.ac.in' && password === 'admin123') {
      // Simulated user object with permissions
      const simulatedUser = {
        email: email,
        permissions: ['admin', 'AdminDashboard'] // Example permissions
      };

      setIsLoggedIn(true); // Update login state
      setUser(simulatedUser); // Set user object with permissions
      localStorage.setItem('isLoggedIn', true); // Store login state (replace with secure storage)
      navigate('/AdminDashboard'); // Redirect to admin page on successful login
    } else {
      alert('Invalid email or password!');
    }
  };

  // Function to check if the user has the necessary permissions
  const hasPermissions = (user, requiredPermissions) => {
    return user && requiredPermissions.every(permission => user.permissions.includes(permission));
  };

  // If already logged in and has permissions, redirect to AdminDashboard
  if (isLoggedIn && hasPermissions(user, ['admin', 'AdminDashboard'])) {
    return <AdminDashboard />; // Render AdminDashboard
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
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
        <button type="submit">Login</button>
        
      </form>
    </div>
  );
}

export default EmailPasswordLogin;
