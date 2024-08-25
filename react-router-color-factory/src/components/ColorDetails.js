// src/components/ColorDetails.js
import React from 'react';
import { useParams, Navigate, NavLink } from 'react-router-dom';
import '../styles/ColorDetails.css';

function ColorDetails({ colors }) {
  const { color } = useParams();
  const selectedColor = colors.find(c => c.name === color.toLowerCase());

  if (!selectedColor) return <Navigate to="/colors" replace />;

  return (
    <div className="color-details" style={{ backgroundColor: selectedColor.value }}>
      <h1>This is {selectedColor.name}</h1>
      <NavLink to="/colors">Go Back</NavLink>
    </div>
  );
}

export default ColorDetails;
