/*
  File: Footer.jsx
  Student: Elshan Aliyev
  StudentID: 301507806
  Date: 2025-10-24

  Description: Footer component for portfolio site.
*/
console.log("Loaded Footer.jsx");
import React from 'react';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Elshan Aliyev. All Rights Reserved.</p>
    </footer>
  );
}

export default Footer;