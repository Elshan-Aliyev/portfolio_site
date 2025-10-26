/*
  File: About.jsx
  Student: Elshan Aliyev
  StudentID: 301507806
  Date: 2025-10-24

  Description: About Me page, includes profile, summary, and resume link.
*/

import React from 'react';
import '../styles/About.css';
console.log("Loaded About.jsx");
function About() {
  return (
    <section className="about-section">
      <div className="about-profile">
        <img src="/images/my-photo.jpg" alt="Elshan Aliyev" className="about-photo"/>
        <div className="about-details">
          <h2>Elshan Aliyev</h2>
          <p>512-20 Gatineau Drive<br/>Thornhill, ON, L4J0L3<br/>+1 647 880 5870<br/>elshan.aliyev.ca@gmail.com</p>
          <a href="/ElshanAliyev_Resume.pdf" target="_blank" rel="noopener noreferrer" className="about-resume-link">
            View My Resume (PDF)
          </a>
        </div>
      </div>
      <div className="about-summary">
        <h3>Professional Summary</h3>
        <p>
          Dynamic and results-driven Manager with 15 years of experience managing operations, leading teams, and driving growth. Demonstrated success in achieving goals, improving customer satisfaction, and ensuring efficient day-to-day activities. Known for strong leadership, effective communication, and a commitment to delivering exceptional service.
        </p>

        <h3>Key Skills</h3>
        <ul>
          <li>Leadership & Team Management</li>
          <li>Sales & Profit Growth</li>
          <li>Customer Service Excellence</li>
          <li>Inventory & Merchandising</li>
          <li>Budgeting & Financial Management</li>
          <li>Employee Training & Development</li>
          <li>Problem-Solving & Conflict Resolution</li>
        </ul>
      </div>
    </section>
  );
}

export default About;