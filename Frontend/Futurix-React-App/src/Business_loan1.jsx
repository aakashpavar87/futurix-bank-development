import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const BusinessForm1 = () => {
  const { register, handleSubmit, errors } = useForm();
  const [formErrors, setFormErrors] = useState({});

  const onSubmit = (data) => {
    console.log(data);
  };
  const handle = (e) => {
    e.preventDefault();
    // Perform upload logic here, such as sending the file to a server
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
    <form onSubmit={handleSubmit(onSubmit)}>
    <h2>Business Loan Varification</h2>
      <div>
        <label htmlFor="bankStatements">Bank Statements:</label>
        <input type="file"  onChange={handle} />
      </div>
       <div>
        <label htmlFor="taxReturns">Tax Returns:</label>
        <input type="file" onChange={handle}  />
      </div>
      <div>
        <label htmlFor="financialStatements">Financial Statements:</label>
        <input type="file" onChange={handle} />
      </div>
      <div>
        <label htmlFor="collateral">Collateral Information:</label>
        <select id="collateral" name="collateral" {...register} aria-label="Collateral Information">
          <option value="">Select</option>
          <option value="Real Estate">Real Estate</option>
          <option value="Equipment">Equipment</option>
          
        </select>
      </div>
      <div>
        <label htmlFor="creditScore">Credit Score:</label>
        <input type="number" id="creditScore" name="creditScore" {...register} aria-label="Credit Score" />
      </div>
      <div>
        <label htmlFor="outstandingDebts">Outstanding Debts/Liabilities:</label>
        <input type="number" id="outstandingDebts" name="outstandingDebts" {...register} aria-label="Outstanding Debts/Liabilities" />
      </div>
      <div>
        <label htmlFor="existingLoans">Existing Loans:</label>
        <input type="number" id="existingLoans" name="existingLoans" {...register} aria-label="Existing Loans" />
      </div> 
      <button type="submit">Submit</button>
    </form>
  );
};

export default BusinessForm1;
