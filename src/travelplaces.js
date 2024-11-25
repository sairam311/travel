import React, { useState } from 'react';
import './travelplaces.css';
// Importing images
import img1 from './images/places/birlamandir.jpg';
import img2 from './images/places/mumbai.jpg';
import img3 from './images/places/goa.jpg';
import img4 from './images/places/chennai.jpg';
import img5 from './images/places/delhi.jpg';
import img6 from './images/places/kolkata.avif';

const TravelPlaces = () => {
  // Places array with imported images
  const places = [
    { name: 'Hyderabd', description: 'Hyderabad, the "City of Pearls," is a vibrant blend of history, culture, and modernity. From iconic landmarks like Charminar and Golconda Fort to the world-famous Hyderabadi Biryani, the city offers a rich cultural experience.', image: img1 },
    { name: 'Mumbai', description: 'Speckled with Victorian buildings, lofty skyscrapers, the glamour of Bollywood, pulsating nightlife and romantic beaches, the mega-city of Mumbai is a mecca for dreamers looking to make it big.', image: img2 },
    { name: 'Goa', description: 'Popularly known as India’s party capital, Goa seduces travellers from all around the globe with its boho beaches, ancient churches, majestic forts and unbeatable nightlife!', image: img3 },
    { name: 'Chennai', description: "With large stretches of white sand, diverse ethnicities and ancient monuments enhancing its natural, cultural, artistic and culinary vibe, the modern city of Chennai (formerly Madras) lies along the coast of Bay of Bengal.", image: img4 },
    { name: 'New Delhi', description: 'With its flavourful street food, flea markets, monuments from different eras, throbbing nightlife, sprawling parks, posh colonies, old quarters, exclusive clubs and places of worship– the colouful metropolis of Delhi is a glorious blend of diverse cultures, languages and faiths.', image: img5 },
    { name: 'Kolkata', description: 'With its quaint yellow taxis, vintage trams, massive bridges, age-old jazz bars, colonial structures, heritage homes, iconic eateries, Durga Puja festivities, picturesque ghats and boat rides over Ganga -- Kolkata is the city of picture perfect snapshots.', image: img6 },
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
