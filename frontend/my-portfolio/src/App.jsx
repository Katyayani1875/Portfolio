import React from 'react';
import { useState } from 'react';
import Hero from './components/Hero';
import './index.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';

function App() {
  return (
    <>
      <Hero />
      <Navbar />
      <About />
      <Skills />
      <Projects />
      <Education/>
    </>
  );
}

export default App;
