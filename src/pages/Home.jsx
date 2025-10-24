/*
  File: Home.jsx
  Student: Elshan Aliyev
  StudentID: 301507806
  Date: 2025-10-24

  Description: Landing page with welcome message and animation.
*/

import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

function Home() {
  return (
    <section className="home-section">
      <div className="home-animation">
        <h1 className="home-title animate-fade-in">Welcome to Elshan Aliyev's Portfolio</h1>
        <p className="home-mission animate-slide-up">
          Dynamic Manager & Web Enthusiast | Exploring technology, leadership, and innovation.<br />
          <span className="highlight">Mission:</span> Delivering excellence through smart solutions and strong partnerships.
        </p>
        <div className="home-btn-group">
          <Link to="/about" className="home-main-btn">About Me</Link>
          <Link to="/projects" className="home-main-btn secondary">See Projects</Link>
        </div>
      </div>
    </section>
  );
}

export default Home;