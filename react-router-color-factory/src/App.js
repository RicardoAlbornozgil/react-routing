// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ColorList from './components/ColorList';
import ColorDetails from './components/ColorDetails';
import NewColorForm from './components/NewColorForm';
import './styles/App.css';

function App() {
  const [colors, setColors] = useState([
    { name: "red", value: "#ff0000" },
    { name: "blue", value: "#0000ff" },
    { name: "green", value: "#008000" }
  ]);

  const addColor = (newColor) => {
    setColors([...colors, newColor]);
  };

  return (
    <Router>
      <div className="container">
        <Routes>
          <Route exact path="/colors" element={<ColorList colors={colors} />} />
          <Route path="/colors/new" element={<NewColorForm addColor={addColor} />} />
          <Route path="/colors/:color" element={<ColorDetails colors={colors} />} />
          <Route path="*" element={<Navigate to="/colors" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
