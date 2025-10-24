/*
  File: Projects.jsx
  Student: Elshan Aliyev
  StudentID: 301507806
  Date: 2025-10-24

  Description: Projects page displaying highlighted work.
*/

import React from 'react';
import '../styles/Projects.css';

function Projects() {
  return (
    <section className="projects-section">
      <h2>Highlighted Projects</h2>
      <div className="projects-list">
        {/* Project 1 */}
        <div className="project-card">
          <img src="/images/project1-1.jpg" alt="GTASparkleClean.com Screenshot" />
          <div className="project-info">
            <h3>GTASparkleClean.com</h3>
            <p>
              <strong>Role:</strong> Full-Stack Developer & Founder<br/>
              <strong>Description:</strong> Designed and developed a modern, responsive cleaning services website from scratch, implementing instant quote forms, dynamic image galleries, and SEO optimization. Site stands out for its intuitive user experience and conversion-focused design, leading to a measurable increase in client inquiries.
            </p>
          </div>
        </div>
        {/* Project 2 */}
        <div className="project-card">
          <img src="/images/project2-1.jpg" alt="Butanut.com Screenshot" />
          <div className="project-info">
            <h3>Butanut.com</h3>
            <p>
              <strong>Role:</strong> Web Designer & Developer<br/>
              <strong>Description:</strong> Created a visually striking e-commerce site inspired by Sugarfina's branding, featuring custom animations and interactive product displays. Delivered a premium, boutique feel that set the store apart. While site is currently offline, it remains a standout in design and user engagement.
            </p>
          </div>
        </div>
        {/* Project 3 */}
        <div className="project-card">
          <img src="/images/project3-1.jpg" alt="Azersun Procurement Software Screenshot" />
          <div className="project-info">
            <h3>Procurement Software Setup for Azersun Holding</h3>
            <p>
              <strong>Role:</strong> Project Lead<br/>
              <strong>Description:</strong> Led the research, selection, and deployment of enterprise procurement software across multiple departments. Automated reporting, improved supplier management, and strengthened risk controls. Resulted in 35% team productivity boost and $6.5M annual savings.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;