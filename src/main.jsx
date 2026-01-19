import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Sidebar from './Components/Sidebar';
import Drop from "./Components/drop"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Drop />
    <Sidebar />
    <App />
  </React.StrictMode>
);