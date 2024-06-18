// Login.jsx

import React from 'react';
import './Login.css';
import { FaUser, FaLock } from "react-icons/fa";  

const Register = () => {
  return (
    <div className='wrapper'>
      <div className='container'>
        <form action=''>
          <h2>Login</h2>
          <div className='input-box'>
            <input type='text' placeholder='Username' required />
            <FaUser className='icon' />
          </div>

          <div className='input-box'>
            <input type='password' placeholder='Password' required />
            <FaLock className='icon' />
          </div>

          <div className='remember-forget'>
            <label><input type='checkbox' required />Remember me
            </label>
            <a href=''>Forget Password?</a>
          </div>

         

          <div className='btn_container'>
            <button type='submit'>Login</button>
          </div>

          <div className='register-link'>
            <p>Don't have an account? <a href=''>Register</a></p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
