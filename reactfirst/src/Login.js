import React from 'react';
import { Link } from 'react-router-dom';
import EmailPasswordLogin from './EmailPasswordLogin';
import './signup.css'; // Assuming signup.css is related to signup.js
import './AdminDashboard';
import './Signup.js';
function Login() {
  return (
    <div>
      <h1>ADMIN LOGIN</h1>
      <EmailPasswordLogin />
      <p>Don't you have an account? <Link to="/signup">Sign up</Link></p>
    </div>
  );
}

export default Login;
