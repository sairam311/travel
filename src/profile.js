import React, { useState } from "react";
import "./profile.css";
import img1 from './images/login.jpg';
import maldives from './images/maldives.png';

const user = {
  name: "Modi",
  location: "Hyderabad,Telangana,India.",
  points: 1024,
  avatar: img1,
  bookingHistoryCount: 2,
  newBookingsCount: 1,
};

const timeline = [
  {
    name: "Furaveri Maldives",
    rating: "4.9",
    location: "Raa Atoll, Maldives",
    image: maldives,
  },
  {
    name: "Altis Resort Hotel & Spa",
    rating: "5.0",
    location: "Balek, Turkey",
    image: img1,
  },
  // Add more favorite places as needed
];

const favourites = [
  {
    name: "Furaveri Maldives",
    rating: "4.9",
    location: "Raa Atoll, Maldives",
    image: maldives,
  },
  {
    name: "Altis Resort Hotel & Spa",
    rating: "5.0",
    location: "Balek, Turkey",
    image: img1,
  },
  // Add more favorite places as needed
];

const Profile = () => {
  const [activeTab, setActiveTab] = useState("favourites");

  const renderActiveTab = () => {
    switch (activeTab) {
      case "timeline":
        return( <div className="timleline-section">{/*Timeline content here*/}
<br></br><br></br><br></br>
            <div className="timeline-list">
              {favourites.map((place, index) => (
                <div className="timeline-card" key={index}>
                  <img src={place.image} alt={place.name} />
                  <div className="timeline-info">
                    <h4>{place.name}</h4>
                    <p>⭐ {place.rating} | 📍 {place.location}</p>
                  </div>
                </div>
              ))}
            </div></div>);
      case "bookingHistory":
        return <div className="content">Booking History ({user.bookingHistoryCount}) content here</div>;
      case "newBookings":
        return <div className="content">New Bookings ({user.newBookingsCount}) content here</div>;
      case "favourites":
        return (
          <div className="favourites-section">
            <h3>My Favourites ({favourites.length})</h3>
            
            <div className="favourites-list">
              {favourites.map((place, index) => (
                <div className="favourite-card" key={index}>
                  <img src={place.image} alt={place.name} />
                  <div className="favourite-info">
                    <h4>{place.name}</h4>
                    <p>⭐ {place.rating} | 📍 {place.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case "accountSettings":
        return <div className="content">Account Settings content here</div>;
      default:
        return null;
    }
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        <div className="profile-info">
          <div className="avatar">
            <img src={user.avatar} alt="User Avatar" />
          </div>
          <div className="user-details">
            <h2>{user.name}</h2>
            <p>{user.location}</p>
            <div className="points">
              <span>{user.points}  PTS</span>
            </div>
          </div>
        </div>
      </div>
        <div className="profile-nav">
          <button className={activeTab === "timeline" ? "active" : ""} onClick={() => setActiveTab("timeline")}>Timeline ({timeline.length})</button>
          <button onClick={() => setActiveTab("bookingHistory")}>Booking History {/* ({user.bookingHistoryCount}) */}</button>
          <button onClick={() => setActiveTab("newBookings")}>New Bookings {/* ({user.newBookingsCount}) */}</button>
          <button className={activeTab === "favourites" ? "active" : ""} onClick={() => setActiveTab("favourites")}>My Favourites ({favourites.length})</button>
          <button onClick={() => setActiveTab("accountSettings")}>Account Settings</button>
        </div>
      
      {renderActiveTab()}
    </div>
  );
};

export default Profile;
