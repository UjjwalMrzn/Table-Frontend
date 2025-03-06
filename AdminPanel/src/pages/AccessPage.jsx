import React from 'react';
import '../styles/pages/Login.css';

const AccessPage = () => {
  return (
    <div className="login-background">
    <div className="sidebar-brand">
      <a href='/accesspage'> <img src="/snooker-logo.png" alt="Snooker Logo" className="logo-image2" />
      </a>
  
    <div className="forms-container">
      <form action="/login">
        <div className='btn_container1'>
          <button type='submit' className='access-login'>Login</button>
        </div>
      </form>

      <form action="/register">
        <div className='btn_container1'>
          <button type='submit' className='access-register'>Register</button>
        </div>
      </form>
    </div>

    {/* <div class="centered-container">
    <div class="text">
        The Best Place To Play Snooker And Pool
    </div>
    <div class="text2">
        The #1 source for online identity and trust.
    </div>
</div> */}


    </div>
    </div>
  );
}

export default AccessPage;
