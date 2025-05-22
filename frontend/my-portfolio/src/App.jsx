import React from 'react';
import { useState } from 'react';
import Hero from './components/Hero';
import './index.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';

function App() {
  return (
    <>
      <Hero />
      <Navbar />
      <About />
      <Skills />
      <Projects />
    </>
  );
}

export default App;
