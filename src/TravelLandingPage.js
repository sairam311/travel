import React, { useState } from 'react';
import './App.css';
import Login from './login';
import Contact from './contact';
import About from './about';
/* import logo from './images/logo.gif'; */

const TravelLandingPage = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const renderSection = () => {
    switch (activeSection) {
      case "home":
        return (
          <div className="hero-section">
            <h1>Explore the world with a smile</h1>
            <h3>Welcome to SLG Travels! Unleash your wanderlust and discover unforgettable destinations with ease!</h3>
            <div className="search-box">
              <input type="text" placeholder="City or Destination" />
              <input type="date" placeholder="Date of stay" />
              <input type="date" placeholder="Date of stay" />
              <input type="number" placeholder="Person" />
              <button>FindTrip</button>
            </div>
          </div>
        );
      case "login":
        return (<div className="content-section"><Login /></div>);
      case "contact":
        return <div className="content-section"><Contact /></div>;
      case "about":
        return <div className="content-section"><About/></div>;
      default:
        return null;
    }
  };

  return (
    <div className="landing-page">
       {/* <img 
         src={logo} 
         alt="Logo" 
         style={{ width: '350px', height: '400px' }} // Adjust size as needed
       />  */}
      <header className="navbar">
        <div className="logo">SLG Travels </div>
        <nav>
          <div className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <ul className={isMenuOpen ? 'active' : ''}>
            <li><button onClick={() => { setActiveSection("home"); setIsMenuOpen(false); }}>Home</button></li>
            <li><button onClick={() => { setActiveSection("login"); setIsMenuOpen(false); }}>Login / Sign up</button></li>
            <li><button onClick={() => { setActiveSection("contact"); setIsMenuOpen(false); }}>Contact</button></li>
            <li><button onClick={() => { setActiveSection("about"); setIsMenuOpen(false); }}>About Us</button></li>
          </ul>
        </nav>
      </header>
      {renderSection()}
    </div>
  );
};

export default TravelLandingPage;
