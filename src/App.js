import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Education from './components/Education';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contacts from './components/Contacts';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div id="about">
        <About />
      </div>
      <div id="education">
        <Education />
      </div>
      <br></br>
      <div id="projects">
        <Projects />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="contact">
        <Contacts />
      </div>
      <Footer />
    </div>
  );
}

export default App;
