// src/components/Contacts.js
import React from 'react';
import './Contacts.css';

const Contacts = () => {
  return (
    <section id="contacts" className="Contacts">
      <h2>Contact Me</h2>
      <p>If you have any questions or would like to get in touch, please reach out through one of the following methods:</p>
      <ul className="contact-list">
        <li>Email: <a href="mailto:vineelaveeramallu1311@gmail.com">vineelaveeramallu1311@gmail.com</a></li>
        <li>Phone: <a href="tel:6303399094">6303399094</a></li>
        <li>LinkedIn: <a href="https://www.linkedin.com/in/veeramallu-vineela/" target="_blank" rel="noopener noreferrer">My LinkedIn Profile</a></li>
        {/* Add more contact methods if needed */}
      </ul>
    </section>
  );
};

export default Contacts;
