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
                style={{ cursor: 'pointer' }}
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
                    ABOUT
                </button>
                <button className="navContent">PROJECTS</button>
                <button className="navContent">WORK EXPERIENCE</button>
                <button className="navContent">TECH STACK</button>
                <button className="navContent">CONTACT</button>
                <button className="navContent">CHAT WITH ME 💡</button>
            </div>
            <div className="navSearch">
                <input type="text" placeholder="Search..." />
            </div>
        </div>
    );
}

export default NavBar;