import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Business from './Components/Business';
import Entertainment from './Components/Entertainment';
import Politics from './Components/Politics';
import Sports from './Components/Sports';
import Technology from './Components/Technology';
import {
  BrowserRouter as Router,
  Routes,
  Route,
 } from "react-router-dom"; 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
    <Routes>
    <Route path="/" element={<App />} />
      <Route path="Business" element={<Business />} />
      <Route path="Entertainment" element={<Entertainment />} />
     <Route path="Politics" element={<Politics />} />
      <Route path="Sports" element={<Sports />} />
      <Route path="Technology" element={<Technology />} />
    </Routes>
   </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
