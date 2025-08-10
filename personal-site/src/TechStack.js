import './TechStack.css';
import python from './images/python.png';
import java from './images/java.png';
import sql from './images/sql.png';
import html from './images/html.png';
import js from './images/js.png';
import css from './images/css.png';
import r from './images/r.png';

import expo from './images/expo.png';
import fastapi from './images/fastapi.png';
import langchain from './images/langchain.png';
import langgraph from './images/langgraph.png';
import react from './images/react.png';
import reactnative from './images/reactnative.png';
import tailwindcss from './images/tailwindcss.png';

import aws from './images/aws.png';
import azure from './images/azure.png';
import databricks from './images/databricks.png';
import git from './images/git.png';
import github from './images/github.png';
import powerbi from './images/powerbi.png';
import tableau from './images/tableau.png';

import numpy from './images/numpy.png';
import pandas from './images/pandas.png';
import plt from './images/plt.png';
import pytorch from './images/pytorch.png';
import scikitlearn from './images/scikitlearn.png';
import scipy from './images/scipy.png';
import seaborn from './images/seaborn.png';
import tensorflow from './images/tensorflow.png';


function TechStack(){
    return(
        <div className="TechStack" id="techstack">
            <h1 className="techtitle">Tech Stack</h1>
            <div className="techStackGrid">
                <div className="techStackGridSection">
                    <h1 className="techStackGridTitle">Programming Languages</h1>
                    <div className="techStackSkills">
                        <div className="skill">
                            <h1>Python</h1>
                            <img src={python} alt="pythonimage"></img>
                        </div>
                        <div className="skill">
                            <h1>Java</h1>
                            <img src={java} alt="pythonimage"></img>
                        </div>
                        <div className="skill">
                            <h1>SQL</h1>
                            <img src={sql} alt="pythonimage"></img>
                        </div>
                        <div className="skill">
                            <h1>JavaScript</h1>
                            <img src={js} alt="pythonimage"></img>
                        </div>
                         <div className="skill">
                            <h1>HTML</h1>
                            <img src={html} alt="pythonimage"></img>
                        </div>
                         <div className="skill">
                            <h1>CSS</h1>
                            <img src={css} alt="pythonimage"></img>
                        </div>
                         <div className="skill">
                            <h1>R</h1>
                            <img src={r} alt="pythonimage"></img>
                        </div>
                    </div>
                </div>
                <div className="techStackGridSection">
                    <h1 className="techStackGridTitle">Frameworks</h1>
                    <div className="techStackSkills">
                        <div className="skill">
                            <h1>React</h1>
                            <img src={react} alt="pythonimage"></img>
                        </div>
                        <div className="skill">
                            <h1>React Native</h1>
                            <img src={reactnative} alt="pythonimage"></img>
                        </div>
                        <div className="skill">
                            <h1>LangChain</h1>
                            <img src={langchain} alt="pythonimage"></img>
                        </div>
                        <div className="skill">
                            <h1>LangGraph</h1>
                            <img src={langgraph} alt="pythonimage"></img>
                        </div>
                         <div className="skill">
                            <h1>FastAPI</h1>
                            <img src={fastapi} alt="pythonimage"></img>
                        </div>
                         <div className="skill">
                            <h1>Tailwind CSS</h1>
                            <img src={tailwindcss} alt="pythonimage"></img>
                        </div>
                         <div className="skill">
                            <h1>Expo</h1>
                            <img src={expo} alt="pythonimage"></img>
                        </div>
                    </div>
                </div>

                <div className="techStackGridSection">
                    <h1 className="techStackGridTitle">Developer Tools</h1>
                    <div className="techStackSkills">
                        <div className="skill">
                            <h1>Git</h1>
                            <img src={git} alt="pythonimage"></img>
                        </div>
                        <div className="skill">
                            <h1>GitHub</h1>
                            <img src={github} alt="pythonimage"></img>
                        </div>
                        <div className="skill">
                            <h1>Databricks</h1>
                            <img src={databricks} alt="pythonimage"></img>
                        </div>
                        <div className="skill">
                            <h1>AWS</h1>
                            <img src={aws} alt="pythonimage"></img>
                        </div>
                         <div className="skill">
                            <h1>Azure</h1>
                            <img src={azure} alt="pythonimage"></img>
                        </div>
                         <div className="skill">
                            <h1>Tableau</h1>
                            <img src={tableau} alt="pythonimage"></img>
                        </div>
                         <div className="skill">
                            <h1>PowerBI</h1>
                            <img src={powerbi} alt="pythonimage"></img>
                        </div>
                    </div>
                </div>

                <div className="techStackGridSection">
                    <h1 className="techStackGridTitle">Libraries</h1>
                    <div className="techStackSkills">
                        <div className="skill">
                            <h1>NumPy</h1>
                            <img src={numpy} alt="pythonimage"></img>
                        </div>
                        <div className="skill">
                            <h1>Pandas</h1>
                            <img src={pandas} alt="pythonimage"></img>
                        </div>
                        <div className="skill">
                            <h1>MatplotLib</h1>
                            <img src={plt} alt="pythonimage"></img>
                        </div>
                        <div className="skill">
                            <h1>Seaborn</h1>
                            <img src={seaborn} alt="pythonimage"></img>
                        </div>
                        <div className="skill">
                            <h1>SciPy</h1>
                            <img src={scipy} alt="pythonimage"></img>
                        </div>
                        <div className="skill">
                            <h1>SciKit Learn</h1>
                            <img src={scikitlearn} alt="pythonimage"></img>
                        </div>
                        <div className="skill">
                            <h1>TensorFlow</h1>
                            <img src={tensorflow} alt="pythonimage"></img>
                        </div>
                        <div className="skill">
                            <h1>PyTorch</h1>
                            <img src={pytorch} alt="pythonimage"></img>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default TechStack;