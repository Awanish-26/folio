import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Sidebar from './Components/Sidebar';
import Drop from "./Components/drop"
import ThemeToggle from './Components/ThemeToggle';
import { ThemeProvider } from './context/ThemeContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <Drop />
      <Sidebar />
      <App />
      <ThemeToggle />
    </ThemeProvider>
  </React.StrictMode>
);