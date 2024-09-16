import React from 'react';
import './Header.css';

const Header = () => (
  <header className="App-header">
    <nav>
      <ul>
        <li><a href="#about">About</a></li><br />
        <li><a href="#education">Education</a></li><br />
        <li><a href="#projects">Projects</a></li><br />
        <li><a href="#skills">Skills</a></li> 
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
    <div className="Main">
      <img src="Profile.jpg" alt="profile" className="profile-img" />
      <h1>VEERAMALLU VINEELA</h1>
      <h3 color='white'>Fresher</h3>
      <a href="/resume.pdf" download="Veeramallu_Vineela_Resume.pdf">
        <button className="download-resume">Download Resume</button>
      </a>
    </div>
  </header>
);

export default Header;
