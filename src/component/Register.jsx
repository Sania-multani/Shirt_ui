import React, { useState } from "react";
import { FiMail, FiLock } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { NavLink } from "react-router-dom";


export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Email:", email, "Password:", password);
  };

  return (
    <div className="login-container ">
      {/* Overlay */}
      <div className="overlay "></div>

      {/* Card */}
      <div className="register-card mt-5 mb-5">
        <h2 className="login-title">Welcome Back!</h2>

        {/* Form */}
        <form onSubmit={handleLogin} className="login-form">
          {/* Email */}

            <div className="input-group">
            <label>Name</label>
            <div className="input-wrapper">
              {/* <FiMail className="icon" /> */}
              <input
                type="name"
                placeholder="Enter your Name"
                // value={email}
                // onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="input-group">
            <label>Your Email</label>
            <div className="input-wrapper">
              {/* <FiMail className="icon" /> */}
              <input
                type="email"
                placeholder="Enter your email"
                // value={email}
                // onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>



 <div className="input-group">
            <label>Password</label>
            <div className="input-wrapper">
              {/* <FiMail className="icon" /> */}
              <input
                type="password"
                placeholder="Enter your password"
                // value={email}
                // onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>


           <div className="input-group">
            <label> Confirm Password</label>
            <div className="input-wrapper">
              {/* <FiMail className="icon" /> */}
              <input
                type="password"
                placeholder="Enter your confirm password"
                // value={email}
                // onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>

          {/* Password */}
      
          {/* Submit Button */}
          <button type="submit" className="login-btn">
            Sign Up
          </button>
        </form>

        {/* Divider */}
        <div className="divider">
          <span>or</span>
        </div>

        {/* Social Logins */}
        <div className="social-login">
          <button className="google-btn">
            <FcGoogle size={20} /> Google
          </button>
          <button className="facebook-btn">
            <FaFacebook size={20} /> Facebook
          </button>
        </div>

        {/* Sign Up */}
        <p className="signup-text">
          New to our store? <NavLink to="/login">Sign In</NavLink>
        </p>
      </div>
    </div>
  );
}
