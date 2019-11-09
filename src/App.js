import React from 'react';
import './CSS/Container.css';
import Home from './UI/Home.js';
import Skills from './UI/Skills.js';
import Work from './UI/Work.js';
import About from './UI/About.js';
import Contact from './UI/Contact.js';
import Sidebar from './UI/Sidebar.js';


function App() {
  return (
    <div className="containerStyle">
          <Sidebar />
          <Home />
          <Skills />
          <Work />
          <About />
          <Contact />
    </div>
  );
}

export default App;