import React from 'react';
import './about.css'; // Ensure this file contains the necessary styling
import img1 from './images/altis_resort.jpg';
import sairam from './images/sairam.png';
import gitanjani from './images/gitanjani.png';
import priya from './images/Priya.jpg';
const About = () => {
  return (
    <div className="about-container">
      <h3><strong>About us</strong></h3>
      <div className="about-grid">
        
      <div className="about-mentor">
      
      <img
          src={img1} // Use the imported image
          alt="Mentor: Edward Schettino, DVM, PhD, CAWA"
          className="about-image"
        /> {/*
        <h3>Mentor : </h3> */}

      </div>
      <div className="about-mentor">
        <img
          src={img1} // Use the imported image
          alt="Mentor: Edward Schettino, DVM, PhD, CAWA"
          className="about-image"
        />{/*
        <h3>Mentor : </h3> */} </div>
      </div>
      <div className="about-grid">
        <div className="about-person">
        <img
          src={sairam} // Use the imported image
          alt="Mentor: Edward Schettino, DVM, PhD, CAWA"
          className="about-image"
        />
          <h4>K.Sai Ram Chowdary</h4>
          <h4>FullStack Developer</h4>
          <p><strong>Email:</strong>
          kaminenisairam33@gmail.com</p>
          <p>Phone: 7674802148</p>
        </div>
        
        <div className="about-person">
        <img
          src={priya} // Use the imported image
          alt="Mentor: Edward Schettino, DVM, PhD, CAWA"
          className="about-image"
        />
        <h4>Ch.Lakshmi Priya</h4>
          <h4>DataBase Administrator</h4>
          <p><strong>Email:</strong> 21r21a12e1@mlrinstitutions.ac.in</p>
          <p>Phone: 9392404216</p>
        </div>
        
        <div className="about-person">
        <img
          src={gitanjani} // Use the imported image
          alt="Mentor: Edward Schettino, DVM, PhD, CAWA"
          className="about-image"
        />
        <h4>M.Gitanjani</h4>
          <h4>Backend Developer</h4>
          <p><strong>Email:</strong>21r21a12h5@mlrinstitutions.ac.in</p>
          <p>Phone: 7396207217</p>
        </div>
      </div>
    </div>
  );
};

export default About;
