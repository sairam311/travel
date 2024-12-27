import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import axios from 'axios';
import './login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error,setError]=useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add login logic here
    if(!email || !password){
      setError('Both email and password are required');
      return;
    }
    axios
      .post('http://localhost:4000/login',{email,password})
      .then((response)=>{
        if(response.data.message=='Login Successful'){
          navigate('/home');
        }
        else{
          setError(response.data.message);
        }
      })
      .catch((error)=>{
        setError('Error logging in, please try again.');
        console.error('Login error:',error);
      });
    console.log('Email:', email);
    console.log('Password:', password);
    navigate('/home');
  };

  return (
    <div className="login-container">
    <div className="login-container1">
      <h2 className="login-heading">Welcome</h2>
      <p className="login-subtext">Please enter your details</p>
      <form onSubmit={handleSubmit} className="login-form">
        <label className="login-label">Email address
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="login-input"
            required
          />
        </label>
        <label className="login-label">Password
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="login-input"
            required
          />
        </label>
        <div className="login-links">
          <a href="/forgot-password" className="login-link">Forgot password</a>
        </div>
        <button type="submit" className="login-signin-button">Sign in</button>
        <button type="button" className="login-google-button">
          <img
            src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
            alt="Google logo"
            className="google-logo"
          />
          Sign in with Google
        </button>
      </form>
      <p className="login-footer-text">
        Don’t have an account? <a href="/signup" className="login-link">Sign up</a>
      </p>
    </div>
    </div>
  );
};

export default Login;
