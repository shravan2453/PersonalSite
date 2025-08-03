import React from 'react';
import './About.css';
import './fonts.css';
import shravLogo from './images/shravan.png';

function About() {
  return (
    <section id="about" className="aboutSection">
        <div className="textContent">
            <h2 className="aboutHeader">About</h2>
            <p className="aboutContent">Hey there. My name is Shravan Selvavel, a sophomore at Duke University studying computer science and statistics, and focused on applied Machine Learning, Data Science, and Predictive Modeling. I am experienced in developing data driven solutions across domains such as healthcare, behavioral science, and business operations. My personal passions are in integrating AI, ML, and analytics into sports and real world impact projects.</p>
        </div>
        <div className="imageDiv">
            <img className="imageContent" src={shravLogo} alt="Shravan-picture"/>
        </div>
    </section>
  );
}

export default About;