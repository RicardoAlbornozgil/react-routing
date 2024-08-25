// DogDetails.js
import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import '../styles/DogDetails.css'
import '../styles/DogList.css'


function DogDetails({ dogs }) {
  const { name } = useParams();
  const dog = dogs.find(dog => dog.name.toLowerCase() === name.toLowerCase());

  if (!dog) return <Navigate to="/dogs" replace />;

  return (
    <div className="dog-details">
      <div className="dog-card">
        <h1>{dog.name}</h1>
        <img src={dog.src} alt={dog.name} />
        <h2>Age: {dog.age}</h2>
        <ul >
          {dog.facts.map((fact, i) => (
            <li key={i}>{fact}</li>
          ))}
        </ul> 
      </div>
    </div>
  );
}

export default DogDetails;
