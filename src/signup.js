import React, { useState } from 'react';
import './login.css';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");

  const navigate = useNavigate(); // Use the useNavigate hook for redirection

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    let formErrors = {};

    if (!formData.name) {
      formErrors.name = "Name is required";
    }

    if (!formData.email) {
      formErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = "Email is invalid";
    }

    if (!formData.password) {
      formErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      formErrors.password = "Password must be at least 6 characters";
    }

    if (!formData.confirmPassword) {
      formErrors.confirmPassword = "Please confirm your password";
    } else if (formData.confirmPassword !== formData.password) {
      formErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Send data to the backend for registration
      axios
        .post("http://localhost:4000/register", formData)
        .then((response) => {
          setMessage("User registered successfully!");
          console.log(response.data);
          
          // Redirect to login page upon successful registration
          navigate('/login'); // Ensure '/login' is the correct route for your Login page
        })
        .catch((error) => {
          setMessage("Error: " + error.response.data);
        });
    }
  };

  return (
    <div className="login-container">
      <div className="login-container1">
        <h2 className="login-heading">Welcome</h2>
        <h2 className="login-heading">Create an Account</h2>
        <p className="login-subtext">Please enter your details</p>
        <form onSubmit={handleSubmit} className="login-form">
          <label className="login-label">User Name
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="login-input"
            />
            {errors.name && <div className="error">{errors.name}</div>}
          </label>

          <label className="login-label">Email address
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="login-input"
            />
            {errors.email && <div className="error">{errors.email}</div>}
          </label>

          <label className="login-label">Password
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="login-input"
            />
            {errors.password && <div className="error">{errors.password}</div>}
          </label>

          <label className="login-label">Confirm Password
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="login-input"
            />
            {errors.confirmPassword && <div className="error">{errors.confirmPassword}</div>}
          </label>

          <button type="submit" className="login-signin-button">Sign Up</button>
        </form>

        {message && <div className="message">{message}</div>}
      </div>
      <header className="navbar">
        <div className="logo">SLG Travels </div>
      </header>
    </div>
  );
};

export default SignUp;
