import './Projects.css';
import navLogo from './images/navLogo.png';
import klados from './images/klados.jpg';
import technify from './images/technify.png';
import uncw from './images/uncw.png';

import python from './images/python.png';
import reactnative from './images/reactnative.png';
import tailwindcss from './images/tailwindcss.png';
import postgres from './images/postgres.png';
import langchain from './images/langchain.png';
import langgraph from './images/langgraph.png';
import expo from './images/expo.png';

import html from './images/html.png';
import css from './images/css.png';
import js from './images/js.png';

import scipy from './images/scipy.png';
import scikitlearn from './images/scikitlearn.png';
import pandas from './images/pandas.png';
import matplotlib from './images/plt.png';
import seaborn from './images/seaborn.png';
import numpy from './images/numpy.png';

import aws from './images/aws.png';
import tensorflow from './images/tensorflow.png';


function Projects(){
    return(
        <div className = "Projects" id="project">
            <h1 className="header">Featured Projects</h1>
            <ul className="grid">
                <div className ="grid-item">
                    <a href="https://github.com/shravan2453/ProjectForge" target="_blank" rel="noopener noreferrer" className="githublink">
                        <img src={klados} alt="fillerimage" className="grid-logo"></img>
                        <h2 className="grid-title">Klados AI</h2>
                        <p className="grid-description">A mobile app helping students generate customizable project ideas tailored to the user. Currently implementing memory retention and reasoning-based dialogue, aiming to expand into deployment of an end-to-end process entailing project ideation tools, AI-driven resources, and timeline generation.</p>
                        <div className="project-skills-used">
                            <img src={python} alt="fillerimage" className="grid-logo"></img>
                            <img src={reactnative} alt="fillerimage" className="grid-logo"></img>
                            <img src={tailwindcss} alt="fillerimage" className="grid-logo"></img>
                            <img src={postgres} alt="fillerimage" className="grid-logo"></img>
                            <img src={langchain} alt="fillerimage" className="grid-logo"></img>
                            <img src={langgraph} alt="fillerimage" className="grid-logo"></img>
                            <img src={expo} alt="fillerimage" className="grid-logo"></img>
                        </div>
                    </a>
                </div>
                <div className ="grid-item">
                    <a href="https://github.com/shravan2453/technifywebsite" target="_blank" rel="noopener noreferrer" className="githublink">
                        <img src={technify} alt="fillerimage" className="grid-logo"></img>
                        <h2 className="grid-title">Technify Internal Website</h2>
                        <p className="grid-description">A responsive web application using HTML, CSS, and JavaScript, featuring dynamic pages focused on building UI/UX components, improving user flow, and ensuring cross-device compatibility, enhancing accessibility</p>
                        <div className="project-skills-used">
                            <img src={html} alt="fillerimage" className="grid-logo"></img>
                            <img src={css} alt="fillerimage" className="grid-logo"></img>
                            <img src={js} alt="fillerimage" className="grid-logo"></img>
                        </div>
                    </a>
                </div>
                <div className ="grid-item">
                    <a href="https://github.com/shravan2453/SVSM-Afib-ML-Research" target="_blank" rel="noopener noreferrer" className="githublink">
                        <img src={uncw} alt="fillerimage" className="grid-logo"></img>
                        <h2 className="grid-title">Identifying Atrial Fibrillation With Stepping Windows</h2>
                        <p className="grid-description">Researched real time detection of Atrial Fibrillation (AFib) using ECG time-series data,engineering a novel stepping-window algorithm primarily utilizing XGBoost, CatBoost, and LightGBM via Scikit-learn—to classify arrhythmic episodes.</p>
                        <div className="project-skills-used">
                            <img src={python} alt="fillerimage" className="grid-logo"></img>
                            <img src={numpy} alt="fillerimage" className="grid-logo"></img>
                            <img src={pandas} alt="fillerimage" className="grid-logo"></img>
                            <img src={matplotlib} alt="fillerimage" className="grid-logo"></img>
                            <img src={seaborn} alt="fillerimage" className="grid-logo"></img>
                            <img src={scipy} alt="fillerimage" className="grid-logo"></img>
                            <img src={scikitlearn} alt="fillerimage" className="grid-logo"></img>
                        </div>
                    </a>
                </div>
                <div className ="grid-item">
                    <a href="https://github.com/shravan2453" target="_blank" rel="noopener noreferrer" className="githublink">
                        <img src={navLogo} alt="fillerimage" className="grid-logo"></img>
                        <h2 className="grid-title">A Machine Learning Approach to Predicting the NBA Finals</h2>
                        <p className="grid-description">More information coming soon.</p>
                        <div className="project-skills-used">
                            <img src={python} alt="fillerimage" className="grid-logo"></img>
                            <img src={scikitlearn} alt="fillerimage" className="grid-logo"></img>
                            <img src={tensorflow} alt="fillerimage" className="grid-logo"></img>
                            <img src={aws} alt="fillerimage" className="grid-logo"></img>
                        </div>
                    </a>
                </div>
            </ul>
        </div>
    );
}

export default Projects;