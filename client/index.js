import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
const container = document.getElementById('app');
const root = ReactDOM.createRoot(container);

root.render(<App />);

/* Old Version:
import ReactDOM from 'react-dom'

ReactDOM.render(<div> Hello </div> , document.getElementById('app'))
*/
