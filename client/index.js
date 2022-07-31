import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import IconMenu from './IconMenu';

import DescriptionMenu from './Container';
const container = document.getElementById('app');
const root = ReactDOM.createRoot(container);

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<DescriptionMenu />} />
    </Routes>
  </BrowserRouter>
);

/* Old Version:
import ReactDOM from 'react-dom'

ReactDOM.render(<div> Hello </div> , document.getElementById('app'))
*/
