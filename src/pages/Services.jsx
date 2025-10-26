/*
  File: Services.jsx
  Student: Elshan Aliyev
  StudentID: 301507806
  Date: 2025-10-24

  Description: Services page listing offered services.
*/

import React from 'react';
import '../styles/Services.css';

const services = [
  {
    img: '/images/service-webdev.png',
    title: 'Web Development',
    desc: 'Building modern and responsive business websites using proven frameworks and standards.',
  },
  {
    img: '/images/service-consulting.png',
    title: 'Business & Tech Consulting',
    desc: 'Bridging the gap between business needs and digital solutions for measurable results.',
  },
  {
    img: '/images/service-procurement.png',
    title: 'Procurement Solutions',
    desc: 'Advising on software selection, supplier management, and cost optimization.',
  },
  {
    img: '/images/service-management.png',
    title: 'Operations & Team Management',
    desc: 'Leveraging 15 years of leadership experience to drive growth and efficiency.',
  },
];

function Services() {
  return (
    <section className="services-section">
      <h2>Services Offered</h2>
      <div className="services-list">
        {services.map((srv, idx) => (
          <div className="service-card" key={idx}>
            <div className="img-frame">
              <img src={srv.img} alt={srv.title} />
              </div>
              <h3>{srv.title}</h3>
              <p>{srv.desc}</p>
            
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;