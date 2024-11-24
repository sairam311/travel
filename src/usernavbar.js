// Navbar.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './home.css'; // Assuming the styles for the navbar are in this file

const Navbar = () => {
  const [isMenu, setIsMenu] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="home-navbar">
      <div className="home-logo">SLG Travels</div>
      <nav>
        <div className="home-hamburger" onClick={() => setIsMenu(!isMenu)}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <ul className={isMenu ? 'active' : ''}>
          <li><button onClick={() => navigate('/home')}>Home</button></li>
          <li><button onClick={() => navigate('/profile')}>My Profile</button></li>
          <li><button onClick={() => navigate('/contact')}>Contact</button></li>
          <li><button onClick={() => navigate('/about')}>About Us</button></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
