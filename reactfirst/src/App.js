

import React from 'react';
import { BrowserRouter as Router, Route,  Routes } from 'react-router-dom';
import Layout from './Layout';
import Buttons from './Buttons';
import Login from './Login';
import FacultyLogin from './FacultyLogin';
import './App.css';
import SignUp from './Signup';
import './signup.css';
import FacultyDashboard from './FacultyDashboard';
import './FacultyDashboard.css';
import AdminDashboard from './AdminDashboard';
import AlternateStaffLogin from './AlternateStaffLogin';
import AlternateStaffDashboard from './AlternateStaffDashboard';
const App = () => {
  return (
    <Router>
      <Layout>
        <Buttons />
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/FacultyLogin" element={<FacultyLogin />} />
          <Route path="/FacultyDashboard" element={<FacultyDashboard />} />
          <Route path="/AdminDashboard" element={<AdminDashboard />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/AlternateStaffLogin" element={<AlternateStaffLogin />} />
          <Route path="/AlternateStaffDashboard" element={<AlternateStaffDashboard />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
