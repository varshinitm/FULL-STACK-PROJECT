import React, { useState } from 'react';
/*import axios from 'axios';  For API calls*/
import './styles.css';
import './EmailPasswordLogin';
import './Login';
const ExcelUpload = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handleUpload = () => {
    // Handle file upload logic here
    if (file) {
      // You can perform actions like sending the file to a server for processing
      console.log("Uploading file:", file);
    } else {
      console.log("No file selected.");
    }
  };

  return (
    <div>
      <h1>Welcome Admin</h1>
      <h2>Upload hall details and no of faculty per hall details excel</h2>
      <input
        type="file"
        accept=".xlsx, .xls"
        onChange={handleFileChange}
      />
      <button onClick={handleUpload}>Upload</button><br></br>
      <h2>Upload Session wise faculty details excel</h2>
      <input
        type="file"
        accept=".xlsx, .xls"
        onChange={handleFileChange}
      />
      <button onClick={handleUpload}>Upload</button>

    </div>
  );
}


export default ExcelUpload;


