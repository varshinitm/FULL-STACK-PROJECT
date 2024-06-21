import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import collegeLogo from './collegeLogo.png';
import  './Login';
import './FacultyDashboard';
import './Signup.js';
const Button = styled.button`
    padding: 1rem 2rem;
    border: none;
    border-radius: 4px;
    font-size: 1.2rem;
    margin: 1rem;
    cursor: pointer;
    transition: background-color 0.2s ease-in-out;
    position:left;
    &:hover {
        background-color: #ddd;
    }
`;

const AdminButton = styled(Button)`
    position:center;
    background-color: #3498db;
    color: #fff;
`;

const FacultyButton = styled(Button)`
    position:center;
    background-color: #3498db;
    color: #fff;
`;

const Buttons = () => {
    return (
        <div>
             <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
          <img src={collegeLogo} alt="College Logo" style={{ width: '1200px', marginRight: '100px', height:'100px' }} />
           </div>
            <Link to="./Login">
                <AdminButton>Admin Login</AdminButton>
            </Link>
            <Link to="./FacultyLogin">
                <FacultyButton>Faculty Login</FacultyButton>
            </Link>
        </div>
    );
};

export default Buttons;