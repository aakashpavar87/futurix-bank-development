import React,{useEffect} from 'react';
import { useForm } from 'react-hook-form';
import { createAddressapi ,getAddressapi} from '../api/helloWorldApiService';

function Address() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    useEffect(() => {
        getAddressapi(1).then(res => {console.log(res.data)})
        .catch(err => {console.log(err)
        })
      }, [])

    const onSubmit = (data) => {
        console.log(data);
        createAddressapi(data,2).then(res => console.log(res.data)).catch(err => console.log(err))
    };

    return (
        <div className="address-container">
            {/* street,city,state,country,zipcode */}
            <h2>Enter Address Details</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <label htmlFor="Street">Street:</label>
                    <input
                        type="text"
                        id="street"
                        name="street"
                        {...register("street", { required: true })}
                    />
                    {errors.street && <span className="error-message">Street name is required</span>}
                </div>

                <div className="form-group">
                    <label htmlFor="City">City:</label>
                    <input
                        type="text"
                        id="city"
                        name="city"
                        {...register("city", { required: true })}
                    />
                    {errors.city && <span className="error-message">Enter City name</span>}
                </div>

                <div className="form-group">
                    <label htmlFor="State">State:</label>
                    <input
                        type="text"
                        id="state"
                        name="state"
                        {...register("state", { required: true })}
                    />
                    {errors.state && <span className="error-message">Enter State name</span>}
                </div>

                <div className="form-group">
                    <label htmlFor="Country">Country:</label>
                    <input
                        type="text"
                        id="country"
                        name="country"
                        {...register("country", { required: true })}
                    />
                    {errors.country && <span className="error-message">Enter Country name</span>}
                </div>

                <div>
      <label htmlFor="zipCode">Enter Zip Code:</label>
      <input
        type="number"
        id="zipcode"
        name="zipcode"
        {...register("zipcode", { required: true })}
      />
      {/* You can add additional validation/error handling here if needed */}
    </div>

                <div className="form-group">
                    <button className="btn" type="submit">Next Page</button>
                    <button className="previous" type="button">Previous</button>
                </div>
            </form>
        </div>
    )
}

export default Address;
