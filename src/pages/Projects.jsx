/*
  File: Projects.jsx
  Student: Elshan Aliyev
  StudentID: 301507806
  Date: 2025-10-24

  Description: Projects page displaying highlighted work.
*/

import React, { useState, useEffect } from 'react';
import '../styles/Projects.css';

function Projects() {
  // keep the original project data but include three images per project
  const projects = [
    {
      id: 'p1',
      title: 'GTASparkleClean.com',
      images: [
        '/images/projects/project1-1.jpg',
        '/images/projects/project1-2.jpg',
        '/images/projects/project1-3.jpg'
      ],
      role: 'Full-Stack Developer & Founder',
      description:
        'Designed and developed a modern, responsive cleaning services website from scratch, implementing instant quote forms, dynamic image galleries, and SEO optimization. Site stands out for its intuitive user experience and conversion-focused design, leading to a measurable increase in client inquiries.'
    },
    {
      id: 'p2',
      title: 'Butanut.com',
      images: [
        '/images/projects/project2-1.jpg',
        '/images/projects/project2-2.jpg',
        '/images/projects/project2-3.jpg'
      ],
      role: 'Web Designer & Developer',
      description:
        "Created a visually striking e-commerce site inspired by Sugarfina's branding, featuring custom animations and interactive product displays. Delivered a premium, boutique feel that set the store apart. While site is currently offline, it remains a standout in design and user engagement."
    },
    {
      id: 'p3',
      title: 'Procurement Software Setup for Azersun Holding',
      images: [
        '/images/projects/project3-1.jpg',
        '/images/projects/project3-2.jpg',
        '/images/projects/project3-3.jpg'
      ],
      role: 'Project Lead',
      description:
        'Led the research, selection, and deployment of enterprise procurement software across multiple departments. Automated reporting, improved supplier management, and strengthened risk controls. Resulted in 35% team productivity boost and $6.5M annual savings.'
    }
  ];

  return (
    <section className="projects-section">
      <h2>Highlighted Projects</h2>
      <div className="projects-list">
        {projects.map((proj) => (
          <ProjectCard key={proj.id} project={proj} />
        ))}
      </div>
    </section>
  );
}

/* Minimal slider subcomponent that preserves the original card structure */
function ProjectCard({ project }) {
  const { title, role, description, images = [] } = project;
  const [index, setIndex] = useState(0);

  useEffect(() => {
    // reset index if images change
    setIndex(0);
  }, [images]);

  if (!images || images.length === 0) {
    return (
      <div className="project-card">
        <div className="image-frame placeholder" />
        <div className="project-info">
          <h3>{title}</h3>
          <p>
            <strong>Role:</strong> {role}
          </p>
          <p>{description}</p>
        </div>
      </div>
    );
  }

  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);
  const next = () => setIndex((i) => (i + 1) % images.length);
  const goTo = (i) => setIndex(i);

  return (
    <div className="project-card">
      <div className="project-slider" aria-roledescription="carousel" aria-label={title}>
        <button className="slider-btn prev" onClick={prev} aria-label={`Previous image for ${title}`}>
          ‹
        </button>

        <div className="image-frame">
          {images.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`${title} screenshot ${i + 1}`}
              className={`project-image ${i === index ? 'active' : ''}`}
              loading="lazy"
            />
          ))}
        </div>

        <button className="slider-btn next" onClick={next} aria-label={`Next image for ${title}`}>
          ›
        </button>
      </div>

      <div className="slider-dots" role="tablist" aria-label={`${title} images`}>
        {images.map((_, i) => (
          <button
            key={i}
            className={`dot ${i === index ? 'active' : ''}`}
            onClick={() => goTo(i)}
            aria-label={`Go to image ${i + 1}`}
            aria-pressed={i === index}
          />
        ))}
      </div>

      <div className="project-info">
        <h3>{title}</h3>
        <p>
          <strong>Role:</strong> {role}
        </p>
        <p className="project-description">{description}</p>
      </div>
    </div>
  );
}

export default Projects;