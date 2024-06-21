import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f0f2f5; /* Light background */
`;

export const Heading = styled.h1`
  font-family: 'Robot', sans-serif;
  font-size: 2rem;
  color: #333; /* Dark text */
  text-align: center;
  margin-bottom: 2rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem;
  border-radius: 10px;
  background-color: #fff; /* White form background */
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
`;

export const Input = styled.input`
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  &:focus {
    outline: none;
    border-color: #3f51b5; /* Blue border on focus */
  }
`;

export const Select = styled.select`
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  &:focus {
    outline: none;
    border-color: #3f51b5; /* Blue border on focus */
  }
`;

export const Button = styled.button`
  padding: 1rem 2rem;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: bold;
  color: #fff;
  background-color: #3f51b5; /* Blue button */
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  &:hover {
    background-color: #28377d; /* Darker blue on hover */
  }
`;

export const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 2rem;
`;

export const DashboardTitle = styled.h2`
  font-family: 'Open Sans', sans-serif;
  font-size: 1.5rem;
  color: #333; /* Dark text */
  text-align: center;
  margin-bottom: 2rem;
`;
