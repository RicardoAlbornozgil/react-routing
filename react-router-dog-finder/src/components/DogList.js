// DogList.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/DogList.css'


function DogList({ dogs }) {
  return (
    <div className="dog-list-page">
      <h1>Meet Our Dogs</h1>
      <div className="dog-list">
        {dogs.map(dog => (
          <div className="dog-card" key={dog.name}>
            <h2>{dog.name}</h2>
            <img src={dog.src} alt={dog.name} />
            <Link to={`/dogs/${dog.name.toLowerCase()}`}>View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DogList;
