// Login.jsx

import React from 'react';
import './Login.css';
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";  

const Register = () => {
  return (
    <div className='wrapper'>
      <div className='container'>
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
            <input type='password' placeholder='Password' required />
            <FaLock className='icon' />
          </div>

          <div className='remember-forget'>
            <label><input type='checkbox' required />I agree to the terms & conditions
            </label>
          </div>

         

          <div className='btn_container'>
            <button type='submit'>Register</button>
          </div>

          <div className='register-link'>
            <p>Already have an account? <a href='/login'>Login</a></p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
