import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const BusinessForm = () => {
  const { register, handleSubmit, errors } = useForm();
  const [formErrors, setFormErrors] = useState({});

  const onSubmit = (data) => {
    console.log(data);
    
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      
     {/*
      <div>
        <label>Consent to Credit Check:</label>
        <div>
          <input type="checkbox" id="creditCheckOwner1" name="creditCheckOwner1" />
          <label htmlFor="creditCheckOwner1">Owner/Partner 1</label>
          
        </div>
      </div>
      
      
      <div>
        <label>Authorization for Disclosure of Information:</label>
        <div>
          <input type="checkbox" id="disclosureOwner1" name="disclosureOwner1"  />
          <label htmlFor="disclosureOwner1">Owner/Partner 1</label>
          
        </div>
      </div>
      
     
      <div>
        <input type="checkbox" id="termsAcceptance" name="termsAcceptance" {...register({ required: true })} />
        <label htmlFor="termsAcceptance">I accept the Terms and Conditions</label>
        {errors.termsAcceptance && <span>You must accept the terms and conditions.</span>}
      </div>
      
      
      <div>
        <label htmlFor="signature">Signature:</label>
        <input type="text" id="signature" name="signature" {...register({ required: true })} aria-label="Electronic Signature" />
         {errors.signature && <span>This field is required.</span>} 
      </div> */}
      
      <button type="submit">Submit</button>
    </form>
  );
};

export default BusinessForm;
