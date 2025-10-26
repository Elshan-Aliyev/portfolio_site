/*
  File: Navbar.jsx
  Student: Elshan Aliyev
  StudentID: 301507806
  Date: 2025-10-24

  Description: Main navigation bar for portfolio site, includes logo and links to all pages.
*/

import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../styles/Navbar.css';
console.log("Loaded Navbar.jsx");
function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        <img src="/images/logo.png" alt="Elshan Logo" />
        <span>Elshan Aliyev</span>
      </Link>
      <ul className="navbar-links">
        <li><NavLink exact="true" to="/" activeclassname="active">Home</NavLink></li>
        <li><NavLink to="/about" activeclassname="active">About Me</NavLink></li>
        <li><NavLink to="/projects" activeclassname="active">Projects</NavLink></li>
        <li><NavLink to="/services" activeclassname="active">Services</NavLink></li>
        <li><NavLink to="/contact" activeclassname="active">Contact</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navbar;