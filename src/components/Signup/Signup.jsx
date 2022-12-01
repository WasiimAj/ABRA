import React from 'react'
import './signup.css';
import abraLogo from "../../Images/ABRA-logo-light (1).png";

const Signup = () => {
    return (
        <>
            <img className='abra-logo' src={abraLogo} alt="abra-logo" />
            <h1 className='signup-titile'>SIGNUP</h1>

            <form className='signup-form'>
                <input className='form-inputs' type="text" name='name' placeholder='Name' />                
                <input className='form-inputs' type="text" name='number' placeholder='Phone Number' />
                <input className='form-inputs' type="text" name='email' placeholder='Email (optional)' />
                <input className='form-inputs' type="text" name='password' placeholder='Password' />
                <input className='form-inputs' type="text" name='confirm_password' placeholder='Confirm Password' />

                <div className='terms'>
                    <input  type="checkbox" name='terms_conditions' />
                    <span className=''>I have read and undrstand <a href="#1">Terms and Conditions</a></span>
                </div> 
                
                <input className='form-inputs' type="submit" name='' value='SIGNUP' />
            </form>
        </>
    )
    }

export default Signup;