import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';

function Address(){

    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors }, } = useForm();

    const onSubmit = (data) => {
        // Perform validation and submission logic here
        console.log(data);
        
      };

      return(
        <div className="address-container">
        {/* street,city,state,country,zipcode */}
            <h2>Enter Address Details</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-group">
              <label htmlFor="Street">Street:</label>
              <input
              type="text"
              id="Street"
              name="Street"
              {...register("Street", { required: true })}
              />
              {errors.Street && <span className="error-message">Street name is required</span>}
              </div>

              <div className="form-group">
              <label htmlFor="City">City:</label>
              <input
              type="text"
              id="City"
              name="City"
              {...register("City", { required: true })}
              />
              {errors.City && <span className="error-message">Enter City name</span>}
              </div>  

              <div className="form-group">
              <label htmlFor="State">State:</label>
              <input
              type="text"
              id="State"
              name="State"
              {...register("State", { required: true })}
              />
              {errors.State && <span className="error-message">Enter State name</span>}
              </div>

              <div className="form-group">
              <label htmlFor="Country">Country:</label>
              <input
              type="text"
              id="Country"
              name="Country"
              {...register("Country", { required: true })}
              />
              {errors.Country && <span className="error-message">Enter Country name</span>}
              </div>

              <div className="form-group">
              <button className= "btn"  onClick={()=>navigate("/kyc")} type="submit">Next Page</button>
              <button className="previous" onClick={()=>navigate("/register")} type="submit">Previous</button>
              </div>
            </form>
        </div>
      )

    
}

export default Address;
