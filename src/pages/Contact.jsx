/*
  File: Contact.jsx
  Student: Elshan Aliyev
  StudentID: 301507806
  Date: 2025-10-24

  Description: Contact page with info panel and form.
*/
console.log("Loaded Contact.jsx");
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Contact.css';

function Contact() {
  const navigate = useNavigate();
  const [form, setForm] = useState({firstName:'', lastName:'', phone:'', email:'', message:''});

  const handleChange = e => setForm({...form, [e.target.name]: e.target.value});

  const handleSubmit = e => {
    e.preventDefault();
    alert('Thank you for your message, ' + form.firstName + '!');
    navigate('/');
  };

  return (
    <section className="contact-section">
      <div className="contact-panel">
        <h2>Contact Information</h2>
        <p><strong>Elshan Aliyev</strong></p>
        <p>Phone: <a href="tel:+16478805870">+1 647 880 5870</a></p>
        <p>Email: <a href="mailto:elshan.aliyev.ca@gmail.com">elshan.aliyev.ca@gmail.com</a></p>
      </div>
      <form className="contact-form" onSubmit={handleSubmit}>
        <h2>Send a Message</h2>
        <div className="form-row">
          <input type="text" name="firstName" placeholder="First Name" value={form.firstName} onChange={handleChange} required />
          <input type="text" name="lastName" placeholder="Last Name" value={form.lastName} onChange={handleChange} required />
        </div>
        <div className="form-row">
          <input type="tel" name="phone" placeholder="Contact Number" value={form.phone} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email Address" value={form.email} onChange={handleChange} required />
        </div>
        <textarea name="message" placeholder="Your message..." value={form.message} onChange={handleChange} required rows={4}></textarea>
        <button type="submit">Send</button>
      </form>
    </section>
  );
}

export default Contact;