import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importing routing components
import TravelLandingPage from './TravelLandingPage';
import Profile from './profile';
import About from './about';
import Contact from './contact';
import Login from './login';
import Home from './home';
import Booking from './booking';
import Signup from './signup';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>  {/* Wrap everything with Router */}
          <Routes>  {/* Define your routes */}
            {/* Route for landing page */}
            <Route path="/" element={<TravelLandingPage />} />
            <Route path="/login" element={<Login />} /> {/* Login page */}
            <Route path="/signup" element={<Signup />} /> {/* signup page */}
            <Route path="/home" element={<Home />} />   {/* Home page */}
            <Route path="/profile" element={<Profile />} />
            <Route path="/booking" element={<Booking/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/about" element={<About/>}/>
            {/* Add routes for other components (uncomment as needed) */}
            {/* <Route path="/about" element={<About />} /> */}
            {/* <Route path="/contact" element={<Contact />} /> */}
            {/* <Route path="/login" element={<Login />} /> */}
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
