import React, { useState } from 'react';

function Kyc() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   
    if (selectedFile) {
      console.log('Selected file:', selectedFile);
      // You can use FormData to prepare the file for uploading via fetch or Axios
      const formData = new FormData();
      formData.append('file', selectedFile);
      // Example of using fetch to upload the file to a server
      fetch('http://example.com/upload', {
        method: 'POST',
        body: formData
      })
      .then(response => response.json())
      .then(data => {
        console.log('Upload successful:', data);
        // Handle the response from the server
      })
      .catch(error => {
        console.error('Error uploading file:', error);
        // Handle any errors
      });
    } else {
      console.log('No file selected');
    }
  };

  return (
    <div>
      <h2>File Upload (Kyc)</h2>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileChange} />
        <button type="submit">Upload</button>
      </form>
    </div>
  );
}

export default Kyc;