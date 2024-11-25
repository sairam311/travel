import React, { useState } from 'react';
import './booking.css';
import Navbar from './usernavbar';
import charminar from './images/places/charminar.jpg';
import birlamandir from './images/places/birlamandir.jpg';
import fort from './images/places/golkondafort.jpg';
import palace from './images/places/chowmahallapalace.png';
import parkhyd from './images/places/parkhyd.jpg';
import trident from './images/places/trident.jpg';
import oyo from './images/places/oyo.jpg';

const Booking=()=>{
    const[activeTab,setActiveTab]=useState("places");

    const rooms = [
        {
          id: 1,
          title: "The Park Hyderabad, Banjara Hills near Hussain Sagar Lake",
          price: "₹ 12,000/Night",
          features: ["24/7 Electricity", "WiFi"],
          img: parkhyd,
          badge: "Available",
        },
        {
          id: 2,
          title: "Trident, HITEC City, Hyderabad",
          price: "10,000/Night",
          features: ["Bed Room", "24/7 Electricity", "WiFi"],
          img: trident,
          badge: "Available",
        },
        {
          id: 3,
          title: "Super OYO Hotel O RBS Classic Stay Boduppal",
          price: "3,000/Night",
          features: ["Bed Room", "WiFi"],
          img: oyo,
          badge: "Available",
        },
        // Add more room objects as needed
      ];
   
      const places = [
        {
          id: 1,
          name: "Charminar",
          img: charminar, // Replace with the correct image path
        },
        {
          id: 2,
          name: "Birla Mandir",
          img: birlamandir, // Replace with the correct image path
        },
        {
          id: 3,
          name: "Golkonda Fort",
          img: fort, // Replace with the correct image path
        },
        {
          id: 4,
          name: "Chowmahalla Palace",
          img: palace, // Replace with the correct image path
        },
        // Add more places as needed
      ];

const renderActiveTab=()=>{
    switch(activeTab){
        case "places":
            return (
                <section className="places-to-visit">
                  <Navbar/>
                    <div className="banner">
                        <h1>Welcome to Hyderabad</h1>
                    </div>
                    <div className="places-section">
                        <h2>Places to Go</h2>
                        <div className="places-grid">
                            {places.map((place) => (
                            <div key={place.id} className="place-card">
                                <img src={place.img} alt={place.name} />
                                <h3>{place.name}</h3>
                            </div>
                            ))}
                        </div>
                    </div>
                </section>
            );
        case "hotel":
            return (
              <section><Navbar/>
                <div className="rooms">
                    <h1>Choose Your Accommodation</h1>
                      <div className="room-grid">
                        {rooms.map((room) => (
                        <div key={room.id} className="room-card">
                            <span className="badge">{room.badge}</span>
                            <img src={room.img} alt={room.title} />
                            <h3>{room.title}</h3>
                            <p className="price">Price: {room.price}</p>
                            <ul className="features">
                                {room.features.map((feature, index) => (
                                <li key={index}>{feature}</li>
                                ))}
                            </ul>
                            <button className="book-btn">Book Room</button>
                        </div>
                        ))}
                    </div>
                    <div className="pagination">
                        <span className="page active">1</span>
                        <span className="page">2</span>
                        <span className="page">3</span>
                        <span className="page">4</span>
                        <span className="next">Next &raquo;</span>
                    </div>
                </div>
              </section>
            );
        case "flight":
            return (
                <div ><Navbar/>
<h1>flight</h1>
                </div>
            );
        case "bus":
            return (
            <div><Navbar/>
<h1>bus</h1>
            </div>
        );
        default:
            return null;
}};
return (
    <div className="booking-container">
        
        <br></br><br></br>
        <div className="booking-nav">
        <button className={activeTab === "places" ? "active" : ""} onClick={() => setActiveTab("places")}>Attractions</button>
          <button className={activeTab === "hotel" ? "active" : ""} onClick={() => setActiveTab("hotel")}>Hotels </button>
          <button className={activeTab === "flight" ? "active" : ""} onClick={() => setActiveTab("flight")}>flight</button>
        {/*  <button onClick={() => setActiveTab("bookingHistory")}>Booking History  ({user.bookingHistoryCount}) </button>  */}  
          <button className={activeTab === "bus" ? "active" : ""} onClick={() => setActiveTab("bus")}>Bus </button>
        </div>
      {renderActiveTab()}
    </div>
    );
};
export default Booking;