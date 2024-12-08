import React from 'react'
import "./Restologin.css";
// import { assets } from ".../src/Assests/close.png";

const Restologin = () => {
  return (
    <div className="login-popup">
      <form className="login-popup-container">
        <div className="login-popup-title">
          <h2>Restaurant Login</h2>
          {/* <img src={assets.close} alt="" /> */}
        </div>
        <div className="login-popup-inputs">
          <input type="text" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
        </div>
        <button>Login</button>
        <div className="login-popup-login-link">
        <p> New Restaurant <span>Register Here</span>
        </p>
        </div>
      </form>
    </div>
  )
}

export default Restologin;