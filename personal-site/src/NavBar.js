import navLogo from './images/navLogo.png';
import './NavBar.css';
import './fonts.css';

function NavBar({ activeSection, setActiveSection }) {
    return (
        <div className="navBarContainer">
            <div
                className="navImageDiv"
                onClick={() => {
                    document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
                    setActiveSection('');
                }}
            >
                <img src={navLogo} alt="NavigationBarImage" className="navImage" />
            </div>
            <div className="navBar">
                <button
                    className={`navContent${activeSection === 'about' ? ' active' : ''}`}
                    onClick={() => {
                        document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
                        setActiveSection('about');
                    }}
                    >
                    About
                </button>
                <button
                    className={`navContent${activeSection === 'project' ? ' active' : ''}`}
                    onClick={() => {
                        document.getElementById('project').scrollIntoView({ behavior: 'smooth' });
                        setActiveSection('project');
                    }}
                    >
                    Projects
                </button>
                <button 
                    className={`navContent${activeSection === 'work' ? ' active' : ''}`}
                    onClick={() => {
                        document.getElementById('work').scrollIntoView({behavior:'smooth'});
                        setActiveSection('work');
                    }}
                    >
                    Experience
                </button>
                <button 
                    className={`navContent${activeSection === 'techstack' ? ' active' : ''}`}
                    onClick={() => {
                        document.getElementById('techstack').scrollIntoView({behavior:'smooth'});
                        setActiveSection('techstack');
                    }}
                    >
                    Tech Stack
                </button>
                <button 
                    className={`navContent${activeSection === 'contact' ? ' active' : ''}`}
                    onClick={() => {
                        document.getElementById('contact').scrollIntoView({behavior:'smooth'});
                        setActiveSection('contact');
                    }}
                    >
                    Contact
                </button>
                <button className="navContent">Chat 💡</button>
            </div>
            <div className="navSearch">
                <input type="text" placeholder="Search..." />
            </div>
        </div>
    );
}

export default NavBar;