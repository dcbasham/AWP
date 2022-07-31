import '../public/styles.css';
import React from 'react';
import ColorPicker from './ColorPicker';
export default function App() {
  return (
    <div id="container">
      <h1>Pick a color in the ColorPicker! </h1>
      <ColorPicker />
    </div>
  );
}
