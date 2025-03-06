import React, { useState } from 'react';
import '../styles/pages/Login.css';
import { FaUser, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";  

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="login-background">
      <a href='/accesspage'> <img src="/snooker-logo.png" alt="Snooker Logo" className="logo-image1" />
      </a>
      <div className='wrapper'>
        <div className='container1'>
          <form>
            <h2>Login</h2>
            <div className='input-box'>
              <input type='text' placeholder='Username' required />
              <FaUser className='icon' />
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

            <div className='remember-forget'>
              <label><input type='checkbox' />
              <span style={{ marginLeft: '8px' }}>Remember me</span></label>
            </div>

            <div className='btn_container'>
              <button type='submit'>Login</button>
            </div>

            <div className='register-link'>
              <p>Don't have an account? <a href='/register'>Register</a></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
