import React from 'react';
import { useForm } from 'react-hook-form';
//import { useNavigate } from 'react-router';

const BusinessForm = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        // You can perform further actions with the form data here
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor="legalName">Legal Name of Business:</label>
                <input type="text" id="legalName" {...register('legalName')} />
            </div>
            <div>
                <label htmlFor="streetAddress">Street Address:</label>
                <input type="text" id="streetAddress" {...register('streetAddress')} />
            </div>
            <div>
                <label htmlFor="city">City:</label>
                <input type="text" id="city" {...register('city')} />
            </div>
            <div>
                <label htmlFor="state">State:</label>
                <input type="text" id="state" {...register('state')} />
            </div>
            <div>
                <label htmlFor="zipCode">Zip Code:</label>
                <input type="text" id="zipCode" {...register('zipCode')} />
            </div>
            <div>
                <label htmlFor="businessType">Business Type:</label>
                <select id="businessType" {...register('businessType')}>
                    <option value="Sole Proprietorship">Sole Proprietorship</option>
                    <option value="Partnership">Partnership</option>
                    <option value="Corporation">Corporation</option>
                </select>
            </div>
            <div>
                <label htmlFor="businessIndustry">Business Industry:</label>
                <select id="businessIndustry" {...register('businessIndustry')}>
                    <option value="Industry 1">Industry 1</option>
                    <option value="Industry 2">Industry 2</option>
                    <option value="Industry 3">Industry 3</option>
                    {/* Add more industries as needed */}
                </select>
            </div>
            <div className="form-group">
          <label htmlFor="yearsinbusiness">yearsinbusiness:</label>
          <input
            type="number"
            id="yearsinbusiness"
            placeholder="yearsinbusiness"
            {...register("yearsinbusiness", { required: true, min: 1 })}
          />
          {/* {errors.loanTerm && <span>This field is required</span>} */}
        </div>
            
             <div>
                <label>Business Tax ID (EIN):</label>
                <input type="text" name="taxID" {...register("taxId",{ required: true })} />
                {/* {errors.taxID && <span>This field is required.</span>} */}
            </div> 
            <div>
                <label>Annual Revenue:</label>
                <input type="number" name="annualRevenue" {...register("annualRevenue",{ required: true, min: 0 })} />
                {/* {errors.annualRevenue && <span>This field is required and should be a positive number.</span>} */}
            </div>
            <div>
                <label>Annual Profit/Loss:</label>
                <input type="number" name="annualProfitLoss" {...register("annualProfitLoss",{ required: true })} />
                {/* {errors.annualProfitLoss && <span>This field is required.</span>} */}
            </div>

            <div>
                <label>Purpose of Loan:</label>
                <select name="loanPurpose" {...register("loanPurpose",{ required: true })}>
                    <option value="">Select</option>
                    <option value="Working Capital">Working Capital</option>
                    <option value="Equipment Purchase">Equipment Purchase</option>
                    <option value="Expansion">Expansion</option>
             </select>
                {/* {errors.loanPurpose && <span>This field is required.</span>} */}
            </div>
            

            <button type="submit">Submit</button>
        </form>
    );
};

export default BusinessForm;
