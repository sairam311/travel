import React from 'react';
//import './App.css';
import TravelLandingPage from './TravelLandingPage';
import Profile from './profile';
/*
import About from './about';
import Contact from './contact';
import Login from './login';  */


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TravelLandingPage/>
      {/*  <Login/>  */}
        <Profile/>
      {/*  <Contact/>
        <About/>  */}
      </header>
    </div>
  );
}

export default App;
