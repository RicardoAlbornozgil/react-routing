// src/components/ColorList.js
import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/ColorList.css';

function getRandomPosition(max) {
  return Math.floor(Math.random() * max);
}

function ColorList({ colors }) {
  useEffect(() => {
    const container = document.querySelector('.color-list');
    const containerHeight = container.clientHeight;
    const containerWidth = container.clientWidth;

    document.querySelectorAll('.color-list li').forEach(li => {
      const randomTop = getRandomPosition(containerHeight - li.clientHeight);
      const randomLeft = getRandomPosition(containerWidth - li.clientWidth);
      li.style.top = `${randomTop}px`;
      li.style.left = `${randomLeft}px`;
    });
  }, [colors]);

  return (
    <div>
        <div className="banner">
            <h1>Available Colors</h1>
      <NavLink to="/colors/new" className="new-color-button">Add a New Color</NavLink>
        </div>
      
      <div className="color-list">
        <ul>
            {colors.map(color => (
            <li key={color.name}>
                <NavLink to={`/colors/${color.name}`} className="color-link">{color.name}</NavLink>
            </li>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default ColorList;
