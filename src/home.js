import React, { useState } from 'react';
import './home.css';
import Contact from './contact';
import About from './about';
import Profile from './profile';
import { useNavigate } from "react-router-dom";

const Home = () => {
    const [activeSection, setActiveSection] = useState("home-login");
    const [isMenu, setIsMenu] = useState(false);
    const navigate = useNavigate(); 

  const handlefindtrip = () => {
    // Redirect to the TravelLandingPage ("/")
    navigate('/booking');
  };

    const renderSection = () => {
    switch (activeSection) {
      case "home-login":
        return (
          <div className="home-hero-section">
            <h1>Explore the world with a smile</h1>
            <h3>Welcome to SLG Travels! Unleash your wanderlust and discover unforgettable destinations with ease!</h3>
            <div className="home-search-box">
              <input type="text" placeholder="City or Destination" />
              <input type="date" placeholder="Date of stay" />
              <input type="date" placeholder="Date of stay" />
              <input type="number" placeholder="Person" />
              <button onClick={handlefindtrip}>FindTrip...</button>
              </div>
          </div>
        );
      case "profile":
        return (<div className="content-section"><Profile /></div>);
      case "contact":
        return <div className="content-section"><Contact /></div>;
      case "about":
        return <div className="content-section"><About/></div>;
      default:
        return null;
    }
  };
  return (
    <div className="home-login">
       {/* <img 
         src={logo} 
         alt="Logo" 
         style={{ width: '350px', height: '400px' }} // Adjust size as needed
       />  */}
      <header className="home-navbar">
        <div className="home-logo">SLG Travels </div>
        <nav>
          <div className="home-hamburger" onClick={() => setIsMenu(!isMenu)}>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <ul className={isMenu ? 'active' : ''}>
            <li><button onClick={() => { setActiveSection("home-login"); setIsMenu(false); }}>Home</button></li>
            <li><button onClick={() => { setActiveSection("profile"); setIsMenu(false); }}>My Profile</button></li>
            <li><button onClick={() => { setActiveSection("contact"); setIsMenu(false); }}>Contact</button></li>
            <li><button onClick={() => { setActiveSection("about"); setIsMenu(false); }}>About Us</button></li>
          </ul>
        </nav>
      </header>
      {renderSection()}
    </div>
  );
};

export default Home;