import React from 'react';
import './Skills.css';

function Skills() {
  const skills = [
    { name: "Python", level: "Advanced" },
    { name: "Java", level: "Intermediate" },
    { name: "HTML/CSS", level: "Advanced" },
    { name: "SQL", level: "Advanced" },
    { name: "Node.js", level: "Intermediate" },
    { name: "JavaScript", level: "Intermediate" },
  ];

  return (
    <div className="skills" id="skills">
      <h2>Skills</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            <h3>{skill.name}</h3>
            <div className="skill-stars">
              {getStars(skill.level)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function getStars(level) {
  const starCounts = {
    Beginner: 1,
    Intermediate: 3,
    Advanced: 4,
  };
  const count = starCounts[level] || 0;

  return [...Array(5)].map((_, index) => (
    <span key={index} className={`star ${index < count ? 'filled' : ''}`}>★</span>
  ));
}

export default Skills;
