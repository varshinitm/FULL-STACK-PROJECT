import React from 'react';
import './FacultyDashboard.css';
const FacultyDashboard = () => {
  const facultyData = [
    { name: 'John', id: 'CS13', examHall: 'EW101', time: '8:00 AM' },
    { name: 'devi', id: 'IT23', examHall: 'WW102', time: '8:05 AM' },
    { name: 'Alice', id: 'IS33', examHall: 'EW103', time: '8:10 AM' },
    { name: 'priya', id: 'EE13', examHall: 'WW101', time: '8:03 AM' },
    { name: 'Moni', id: 'EC23', examHall: 'EW102', time: '8:06 AM' },
    { name: 'Arun', id: 'EI33', examHall: 'WW103', time: '8:15 AM' },
    
  ];

  return (
    <div>
      <h1>WELCOME TO FACULTY DASHBOARD</h1>
      <table>
        <thead>
          <tr>
            <th>Faculty Name</th>
            <th>Faculty ID</th>
            <th>Exam Hall</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {facultyData.map((faculty, index) => (
            <tr key={index}>
              <td>{faculty.name}</td>
              <td>{faculty.id}</td>
              <td>{faculty.examHall}</td>
              <td>{faculty.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FacultyDashboard;