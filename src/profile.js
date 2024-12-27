import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./profile.css";
import axios from 'axios';
import img1 from './images/altis_resort.jpg';
import maldives from './images/maldives.png';
import profile_pic from './images/user.jpg';

const user = {
  name: "Sai Ram Chowdary",
  DOB:"01-01-2000",
  email:'kaminenisairam33@gmail.com',
  mobile_number: 1234567890,
  location: "Hyderabad,Telangana,India.",
  points: 1024,
  avatar: profile_pic,
  bookingHistoryCount: 2,
  newBookingsCount: 1,
  cardno:"XXXX-XXXX-XXXX-XXXX",
  cvv:"XXX",
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
const bookingHistory = [
  
  // Add more favorite places as needed
];

const Profile = () => {
  const [activeTab, setActiveTab] = useState("favourites");
  const navigate = useNavigate(); 

  const handleLogout = () => {
    // Redirect to the TravelLandingPage ("/")
    navigate('/');
  };


  const [updatedUser, setUpdatedUser] = useState({ ...user });

  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setUpdatedUser(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSaveChanges = async () => {
    try {
      const response = await axios.put(`/api/updateProfile/${user._id}`, user); // Send PUT request to update profile
      if (response.data.message === 'Profile updated successfully!') {
        alert("Profile updated successfully!");
      }
    } catch (err) {
      console.error("Error updating profile:", err);
      alert("Error updating profile!");
    }
  };

  const handleReset = () => {
    setUpdatedUser({ ...user });  // Reset the form fields to original values
  };

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
        return <div className="content">Booking History {/* ({user.bookingHistoryCount}) content here */}</div>;
      case "newBookings":
        return <div className="content">New Bookings {/* ({user.newBookingsCount}) content here */}</div>;
      case "favourites":
        return (
          <div className="favourites-section">
            <h3>My Favourites {/*({favourites.length}) */}</h3>
            
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
        return (
        <div className="settings">
         {/*} Account Settings  content here */}
          <div className="profile-settings">
            <div className="sidebar">
              <div className="settings-profile-info">
                <img src={updatedUser.avatar} alt="Profile" className="settings-profile-avatar" />
                <h3>{updatedUser.name}</h3><br></br>
                {user.location}
              </div>
              <div className="uploaded-documents">
                <button className="upload-profile-button">update profile photo</button>
              </div>
            </div>
            <div className="profile-form">
              <h2>Personal Information</h2>
              <form>
              <div className="form-row">
                <label>First Name</label>
                <input
                  type="text"
                  name="name"
                  value={updatedUser.name}
                  onChange={handleProfileChange}
                  placeholder={user.name}
                />
                <label>Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={updatedUser.lastName || ''}
                  onChange={handleProfileChange}
                  placeholder="Enter your last name"
                />
              </div>
              <div className="form-row">
                <label>Location</label>
                <input
                  type="text"
                  name="location"
                  value={updatedUser.location}
                  onChange={handleProfileChange}
                  placeholder="Enter your location"
                />
                <label>Birthday</label>
                <input
                  type="text"
                  name="DOB"
                  value={updatedUser.DOB}
                  onChange={handleProfileChange}
                  placeholder={user.DOB}
                />
              </div>
              <div className="form-row">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={updatedUser.email}
                  onChange={handleProfileChange}
                  placeholder={user.email}
                />
                <label>Phone</label>
                <input
                  type="number"
                  name="mobile_number"
                  value={updatedUser.mobile_number}
                  onChange={handleProfileChange}
                  min="1000000000"
                  max="9999999999"
                  placeholder={user.mobile_number}
                />
              </div>
              <div className="form-row">
                <label>Country</label>
                <select name="country" onChange={handleProfileChange}>
                  <option value="India">India</option>
                  <option value="USA">USA</option>
                </select>
                <label>City</label>
                <select name="city" onChange={handleProfileChange}>
                  <option value="Hyderabad">Hyderabad</option>
                  <option value="Mumbai">Mumbai</option>
                  <option value="New Delhi">New Delhi</option>
                  <option value="Bangalore">Bangalore</option>
                </select>
                <label>Pin code</label>
                <input
                  type="number"
                  name="pinCode"
                  value={updatedUser.pinCode || ''}
                  onChange={handleProfileChange}
                  placeholder="Enter Pin code"
                />
              </div>

              <div className="settings-points">
                <label>Points: <span>{user.points} PTS</span></label>
              </div>

              <div className="form-actions">
                <button type="button" className="reset-button" onClick={handleReset}>Reset</button>
                <button type="button" className="save-button" onClick={handleSaveChanges}>Save Changes</button>
              </div>
            </form>
            </div>
            <div className="billing-form">
              <h2>Billing Information</h2>
              <form>
                <div className="billing-form-row">
                  <label>Name on Card</label>
                  <input type="text" placeholder={updatedUser.name} />
                </div>
                <div className="billing-form-row">
                  <label>Card Number</label>
                  <input type="number" min="1000000000000000" max="9999999999999999" placeholder={updatedUser.cardno} />
                  <br></br>
                  <label>CVV</label>
                  <input type="number" min="100" max="999" placeholder={updatedUser.cvv}/>
                </div>
                <div className="billing-form-row">
                  <label>Expiratin Date</label>
                  <input type="month" placeholder={"MM/YYYY"} />
                </div>
                <div className="billing-form-row">
                  <label>Billing Address</label>
                  <input type="text" placeholder={"Address"} />
                </div>
                <div className="billing-form-row">
                  <label>Country</label>
                  <input type="text" placeholder={"INDIA"} />
                </div>
                <div className="billing-form-actions">
                  <button type="submit" onClick={handleSaveChanges} className="save-button">Save Change</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        <br></br><br></br><br></br>
        <div className="profile-info">
          
          {/* Logout Button at the bottom-right */}
          <div className="logout-btn-container">
            <button className="logout-btn" onClick={handleLogout}>Logout</button>
          </div>

          <div className="avatar">
            <img src={user.avatar} alt="User Avatar" />
          </div>
          <div className="user-details">
            <h2>{user.name}</h2>
            <h3>{user.location}</h3>
            <div className="points">
              <span>{user.points}  PTS</span>
            </div>
          </div>
        </div>
      </div>
        <div className="profile-nav">
          <button className={activeTab === "timeline" ? "active" : ""} onClick={() => setActiveTab("timeline")}>Timeline ({timeline.length})</button>
          <button className={activeTab === "bookingHistory" ? "active" : ""} onClick={() => setActiveTab("bookingHistory")}>Booking History ({bookingHistory.length})</button>
        {/*  <button onClick={() => setActiveTab("bookingHistory")}>Booking History  ({user.bookingHistoryCount}) </button>  */}  
          <button className={activeTab === "newBookings" ? "active" : ""} onClick={() => setActiveTab("newBookings")}>New Bookings </button>
          <button className={activeTab === "favourites" ? "active" : ""} onClick={() => setActiveTab("favourites")}>My Favourites ({favourites.length})</button>
          <button className={activeTab === "accountSettings" ? "active" : ""} onClick={() => setActiveTab("accountSettings")}>Settings </button>
         {/* <button onClick={() => setActiveTab("accountSettings")}>Account Settings</button> */}
        </div>
      
      {renderActiveTab()}
    </div>
  );
};

export default Profile;
