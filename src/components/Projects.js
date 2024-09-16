import React from 'react';
import './Projects.css';

function Projects() {
  return (
    <div className="projects">
      <h2>Projects</h2>
      <div className="timeline">
        <div className="timeline-item">
          <div className="timeline-marker"></div>
          <div className="timeline-content">
            <h3>Project 1</h3>
            <h4>Smart Notice Board for College</h4>
            <span className="timeline-date">November 2023 - December 2023</span>
            <ul>
              <li>HTML/CSS, Firebase, VS Code</li>
              <li>Developed an online web application for the college to know about timetable updates and ongoing events in the college</li>
              <li>Learned how to use front-end with backend databases and APIs</li>
            </ul>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-marker"></div>
          <div className="timeline-content">
            <h3>Project 2</h3>
            <h4>QA Crafter</h4>
            <span className="timeline-date">April 2024 - May 2024</span>
            <ul>
              <li>Developed QA Crafter, a project focused on generating questions and answers from given PDF and text formats</li>
              <li>Machine Learning, Natural Language Processing (NLP), Python, React, PDF Parsing</li>
              <li>The front-end of the application was built using React to ensure a seamless and user-friendly interface</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
