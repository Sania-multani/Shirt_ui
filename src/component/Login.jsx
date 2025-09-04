import React, { useState } from "react";
import { FiMail, FiLock } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { NavLink } from "react-router-dom";


export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Email:", email, "Password:", password);
  };

  return (
    <div className="login-container">
      {/* Overlay */}
      <div className="overlay"></div>

      {/* Card */}
      <div className="login-card">
        <h2 className="login-title">Welcome Back!</h2>

        {/* Form */}
        <form onSubmit={handleLogin} className="login-form">
          {/* Email */}
          <div className="input-group">
            <label>Your Email</label>
            <div className="input-wrapper">
              <FiMail className="icon" />
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>

          {/* Password */}
          <div className="input-group">
            <label> Your Password</label><br></br>
            <div className="input-wrapper">
              <FiLock className="icon" />
              <input
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <a href="#" className="forgot-link">
              Forgot your password?
            </a>
          </div>

          {/* Submit Button */}
          <NavLink to="/profile">
          <button type="submit" className="login-btn">
            Sign in
          </button>
          </NavLink>
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
          New to our store? <NavLink to="/register">Sign Up</NavLink>
        </p>
      </div>
    </div>
  );
}
