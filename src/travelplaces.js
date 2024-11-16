import React, { useState } from 'react';
import './travelplaces.css';

// Importing images
import img1 from './images/altis_resort.jpg';
import img2 from './images/profile_background.jpg';
import img3 from './images/maldives.png';
import img4 from './images/contact.jpg';
import img5 from './images/img1.jpg';

const TravelPlaces = () => {
  // Places array with imported images
  const places = [
    { name: 'Switzerland', description: 'The combination of amazing weather, eye-captivating scenery of the Alps.', image: img1 },
    { name: 'Finland', description: 'Finland is full of lakes and forests.', image: img2 },
    { name: 'Iceland', description: 'A Nordic island country between the North Atlantic and Arctic Oceans, on the Mid-Atlantic Ridge between North America and Europe.', image: img3 },
    { name: 'Australia', description: "The beauty, variety and pristine quality of Australia's natural landscapes, from exotic coastal areas to lush rainforests and red deserts.", image: img1 },
    { name: 'Ireland', description: 'Ireland is known for its wide expanses of lush, green fields.', image: img4 },
    { name: 'New Zealand', description: 'New Zealand markets itself abroad as a "clean, green" adventure-playground.', image: img5 },
  ];

  const [currentIndex, setCurrentIndex] = useState(1); // Initially showing the second item (index 1)

  // Handle Next Button Click
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % places.length);
  };

  // Handle Previous Button Click
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + places.length) % places.length);
  };

  // Get the main image style
  const mainImageStyle = {
    backgroundImage: `url(${places[currentIndex].image})`,
  };

  // Get the next and the one after next images' styles for mini previews
  const nextIndex = (currentIndex + 1) % places.length;
  const nextNextIndex = (currentIndex + 2) % places.length;

  const miniImageStyle1 = {
    backgroundImage: `url(${places[nextIndex].image})`,
  };
  const miniImageStyle2 = {
    backgroundImage: `url(${places[nextNextIndex].image})`,
  };

  return (
    <div className="container">
      <div className="slide">
        {places.map((place, index) => {
          const isVisible = index === currentIndex;
          const itemClass = isVisible ? 'item visible' : 'item';
          return (
            <div key={index} className={itemClass} style={mainImageStyle}>
              {isVisible && (
                <div className="content">
                  <div className="name">{place.name}</div>
                  <div className="des">{place.description}</div>
                  <button>See more</button>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Mini Image for Upcoming Places */}
       <div className="mini-images">
        <div className="mini-image" style={miniImageStyle1}>
          <div className="place-name">{places[nextIndex].name}</div>
        </div>
        <div className="mini-image" style={miniImageStyle2}>
          <div className="place-name2">{places[nextNextIndex].name}</div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="button">
        <button className="prev" onClick={handlePrev}>
          <i className="fa-solid fa-arrow-left"></i>
        </button>
        <button className="next" onClick={handleNext}>
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
};

export default TravelPlaces;
