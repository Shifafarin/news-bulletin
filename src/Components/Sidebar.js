import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import './Sidebar.css';
import { Link } from 'react-router-dom';
export default () => {
  return (
    
    <Menu>
      <Link className="menu-item" to="/">
        Home
      </Link>

      <Link className="menu-item" to="/Business">
        Business 
      </Link>

      <Link className="menu-item" to="/Entertainment">
      Entertainment
      </Link>

      <Link className="menu-item" to="/Politics">
      Politics
      </Link>

      <Link className="menu-item" to="/Sports">
      Sports
      </Link>

      <Link className="menu-item" to="/Technology">
      Technology
      </Link>
    </Menu>
      
  );
};