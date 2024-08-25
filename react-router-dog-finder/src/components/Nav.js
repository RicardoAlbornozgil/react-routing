// Nav.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Nav.css'

function Nav({ dogs }) {
  return (
    <nav>
      <NavLink to="/dogs">Home</NavLink>
      {dogs.map(dog => (
        <NavLink key={dog} to={`/dogs/${dog.toLowerCase()}`}>
          {dog}
        </NavLink>
      ))}
    </nav>
  );
}

export default Nav;
