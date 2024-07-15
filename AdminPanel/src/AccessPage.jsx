import React from 'react'

const AccessPage = () => {
  return (
    <>
     <form action="/login" name="login_btn">
                <button class="login-button">Login</button>
            </form>
            <form action="/register" name="register_btn">
                <button class="signup-button">Signup</button>
            </form>
    
    </>
  )
}

export default AccessPage