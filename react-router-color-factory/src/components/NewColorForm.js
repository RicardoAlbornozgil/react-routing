// src/components/NewColorForm.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/NewColorForm.css';

function NewColorForm({ addColor }) {
  const [colorName, setColorName] = useState('');
  const [colorValue, setColorValue] = useState('#000000'); // Default color is black
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    addColor({ name: colorName.toLowerCase(), value: colorValue });
    navigate('/colors');
  };

  return (
    <div className="new-color-form">
      <h1>Add a New Color</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="color-name">Color Name: </label>
          <input
            id="color-name"
            type="text"
            value={colorName}
            onChange={(e) => setColorName(e.target.value)}
            placeholder="Enter color name"
            required
          />
        </div>
        <div>
          <label htmlFor="color-value">Color Value: </label>
          <input
            id="color-value"
            type="color"
            value={colorValue}
            onChange={(e) => setColorValue(e.target.value)}
            required
            style={{ backgroundColor: colorValue }}
          />
        </div>
        <button type="submit">Add Color</button>
      </form>
    </div>
  );
}

export default NewColorForm;
