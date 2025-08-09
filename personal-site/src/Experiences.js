import './Experiences.css'
import jm from './images/jm.png';
import suncast from './images/suncast.png';
import ecolytics from './images/ecolytics.png';
import duke from './images/duke.jpg';



function Experiences(){

    return(
        <div className="Experience" id="work">
            <h1 className="header">Work Experience</h1>
            <div className="experience-grid">
                <div className="exp-grid-item">
                    <img src={jm} alt="fillerimage" className="exp-grid-logo"></img>
                    <h2 className="exp-grid-title">Jewelers Mutual</h2>
                    <h3 className="exp-grid-role">Data Science Intern</h3>
                    <h4 className="exp-grid-time">May 2025 - Aug 2025</h4>
                </div>
                <div className ="exp-grid-item">
                    <img src={duke} alt="fillerimage" className="exp-grid-logo"></img>
                    <h2 className="exp-grid-title">Duke University</h2>
                    <h3 className="exp-grid-role">Research Assistant</h3>
                    <h4 className="exp-grid-time">Aug 2025 - Present</h4>
                </div>
                <div className ="exp-grid-item">
                    <img src={suncast} alt="fillerimage" className="exp-grid-logo"></img>
                    <h2 className="exp-grid-title">SunCast Media</h2>
                    <h3 className="exp-grid-role">Software Engineer</h3>
                    <h4 className="exp-grid-time">Jan 2025 - May 2025</h4>
                </div>
                <div className ="exp-grid-item">
                    <img src={ecolytics} alt="fillerimage" className="exp-grid-logo"></img>
                    <h2 className="exp-grid-title">Ecolytics</h2>
                    <h3 className="exp-grid-role">Product Data Analyst</h3>
                    <h4 className="exp-grid-time">Aug 2024 - Dec 2024</h4>
                </div>
            </div>

        </div>
    );
}

export default Experiences;