 
import './App.css';
import { Fragment } from 'react';

import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar.js';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Testimonials from './components/Testimonials';

function App() {
  return ( 
    <Fragment>
    
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Testimonials />
      <Contact />
    </main> 
  </Fragment>
  );
}

export default App;
