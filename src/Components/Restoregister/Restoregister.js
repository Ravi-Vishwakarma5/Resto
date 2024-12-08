import React from "react";
import "./Restoregister.css";
// import { assets } from "../Assests/close.png";
const Restoregister = () => {
  return (
    <div className="register-popup" >
      <form className="register-popup-container">
        <div className="register-popup-title">
          <h2>Get started with Food-Z Restaurant</h2>
          {/* <img src={assets.close} alt="" /> */}
        </div>
        <div className="register-popup-inputs">
          <input type="text" placeholder="Restaurant Name" required />
          <input type="text" placeholder="Restaurant Address" required />
          <input type="text" placeholder="Your Name" required />
          <input type="text" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <input type="password" placeholder="Confirm Password" required />
        </div>
        <button>Register</button>
        <div className="register-popup-condition">
          <input type="checkbox" required/>
          <p>Agree to Terms & Conditions</p>
        </div>
        <div className="register-popup-login-link">
        <p>
          If You Are Already Registered
          <span>Login Here</span>
        </p>
        </div>
      </form>
    </div>
  );
};

export default Restoregister;
