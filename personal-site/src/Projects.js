import './Projects.css';
import navLogo from './images/navLogo.png';
import github from './images/github.png';

function Projects(){
    return(
        <div className = "Projects" id="project">
            <h1 className="header">Featured Projects</h1>
            <ul className="grid">
                <div className ="grid-item">
                    <img src={navLogo} alt="fillerimage" className="grid-logo"></img>
                    <h2 className="grid-title">Klados AI</h2>
                    <p className="grid-description">A mobile app using Gemini API/LangChain, React Native and Nativewind CSS frontend, and
                    Python and PostgreSQL backend, helping students generate customizable project ideas tailored to the user. Currently implementing LangGraph for memory retention and reasoning-based dialogue, aiming to expand into deployment of an end-to-end process entailing project ideation tools, AI-driven resources, and timeline generation.</p>
                    <a href="https://github.com/shravan2453/ProjectForge" target="_blank" rel="noopener noreferrer"><img src={github} alt="github-logo" className="grid-github"></img></a>
                </div>
                <div className ="grid-item">
                    <img src={navLogo} alt="fillerimage" className="grid-logo"></img>
                    <h2 className="grid-title">Technify Internal Website</h2>
                    <p className="grid-description">A responsive web application using HTML, CSS, and JavaScript, featuring dynamic pages focused on building UI/UX components, improving user flow, and ensuring cross-device compatibility, enhancing accessibility</p>
                    <a href="https://github.com/shravan2453/technifywebsite" target="_blank" rel="noopener noreferrer"><img src={github} alt="github-logo" className="grid-github"></img></a>
                </div>
                <div className ="grid-item">
                    <img src={navLogo} alt="fillerimage" className="grid-logo"></img>
                    <h2 className="grid-title">Identifying Atrial Fibrillation With Stepping Windows</h2>
                    <p className="grid-description">Researched real time detection of Atrial Fibrillation (AFib) using ECG time-series data,engineering a novel stepping-window algorithm primarily utilizing XGBoost, CatBoost, and LightGBM via Scikit-learn—to classify arrhythmic episodes.</p>
                    <a href="https://github.com/shravan2453/SVSM-Afib-ML-Research" target="_blank" rel="noopener noreferrer"><img src={github} alt="github-logo" className="grid-github"></img></a>
                </div>
                <div className ="grid-item">
                    <img src={navLogo} alt="fillerimage" className="grid-logo"></img>
                    <h2 className="grid-title">A Machine Learning Approach to Predicting the NBA Finals</h2>
                    <p className="grid-description"></p>
                    <a href="https://github.com/shravan2453" target="_blank" rel="noopener noreferrer"><img src={github} alt="github-logo" className="grid-github"></img></a>
                </div>
            </ul>
        </div>
    );
}

export default Projects;