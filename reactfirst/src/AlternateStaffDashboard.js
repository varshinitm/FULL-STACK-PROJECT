import React from 'react';
import './AlternateStaffDashboard.css';

function AlternateStaffDashboard() {
  const data = [
    
    {
      facultyName: 'sathya',
      facultyId: 'EE13',
      altFacultyName: 'priya',
      altFacultyId: 'EE32',
      examHall: 'EW201',
      time: '8.05 AM'
    },
    {
      facultyName: 'Devi',
      facultyId: 'IT43',
      altFacultyName: 'Keerthi',
      altFacultyId: 'IT53',
      examHall: 'EW105',
      time: '8.06 AM'
    }
    
  ];

  return (
    <div className="dashboard">
      <h1>ALTERNATE STAFF DASHBOARD</h1>
      <table>
        <thead>
          <tr>
            <th>Faculty Name</th>
            <th>Faculty ID</th>
            <th>Alternate Faculty Name</th>
            <th>Alternate Faculty ID</th>
            <th>Exam Hall</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {data.map((entry, index) => (
            <tr key={index}>
              <td>{entry.facultyName}</td>
              <td>{entry.facultyId}</td>
              <td>{entry.altFacultyName}</td>
              <td>{entry.altFacultyId}</td>
              <td>{entry.examHall}</td>
              <td>{entry.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AlternateStaffDashboard;
