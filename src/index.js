import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Sidebar from './Components/Sidebar';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Sidebar/>
    <App/>
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// const sidebarButton = document.getElementById('sidebar-button');
// const sidebar = document.getElementById('sidebar');
// const overlay = document.getElementById('overlay');
  
// sidebarButton.addEventListener('click', () => {
//   sidebar.classList.toggle('open');
//   overlay.classList.toggle('open');
// });

// overlay.addEventListener('click', () => {
//   sidebar.classList.remove('open');
//   overlay.classList.remove('open');
// });