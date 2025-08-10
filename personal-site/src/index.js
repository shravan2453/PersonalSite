import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import NavBar from './NavBar';
import Home from './Home';
import About from './About';
import Footer from './Footer';
import Projects from './Projects';
import './index.css';
import Experiences from './Experiences';
import TechStack from './TechStack';


const root = ReactDOM.createRoot(document.getElementById('root'));
function MainLayout() {
  const [activeSection, setActiveSection] = useState('');

  return (
    <div className="mainLayout">
      <NavBar activeSection={activeSection} setActiveSection={setActiveSection} />
      <Home />
      <About />
      <Projects />
      <Experiences />
      <TechStack />
      <Footer />
    </div>
  );
}

root.render(
  <React.StrictMode>
    <MainLayout />
  </React.StrictMode>
);