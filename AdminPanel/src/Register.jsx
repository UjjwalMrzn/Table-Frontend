import React, { useState } from 'react';
import './Login.css';
import { FaUser, FaLock, FaEnvelope, FaEye, FaEyeSlash } from "react-icons/fa";  

const Register = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  return (
    <div className='wrapper1'>
      <div className='container1'>
        <form action=''>
          <h2>Register</h2>
          <div className='input-box'>
            <input type='text' placeholder='Username' required />
            <FaUser className='icon' />
          </div>

          <div className='input-box'>
            <input type='email' placeholder='Email' required />
            <FaEnvelope className='icon' />
          </div>

          <div className='input-box'>
            <input type={passwordVisible ? 'text' : 'password'} placeholder='Password' required />
            <FaLock className='icon' />
            {passwordVisible ? (
              <FaEyeSlash className='toggle-password' onClick={togglePasswordVisibility} />
            ) : (
              <FaEye className='toggle-password' onClick={togglePasswordVisibility} />
            )}
          </div>

          <div className='input-box'>
            <input type={confirmPasswordVisible ? 'text' : 'password'} placeholder='Confirm Password' required />
            <FaLock className='icon' />
            {confirmPasswordVisible ? (
              <FaEyeSlash className='toggle-password' onClick={toggleConfirmPasswordVisibility} />
            ) : (
              <FaEye className='toggle-password' onClick={toggleConfirmPasswordVisibility} />
            )}
          </div>
  
          <div className='remember-forget'>
            <label><input type='checkbox' required />
            <span style={{ marginLeft: '8px' }}>I agree to the terms & conditions</span></label>
          </div>

          <div className='btn_container'>
            <button type='submit'>Register</button>
          </div>

          <div className='register-link'>
            <p>Already have an account ? <a href='/login'>Login</a></p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
