import '../public/styles.css';
import React from 'react';
import ColorPicker from './ColorPicker';
import Container from './Container';
import { Link } from 'react-router-dom';
export default function App() {
  return (
    <div id="container">
      <h1>Pick a color in the ColorPicker! </h1>
      <ColorPicker />
      <Link to={'/about'} component={<Container />}></Link>
    </div>
  );
}
