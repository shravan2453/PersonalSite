import './Footer.css';
import './fonts.css';

function Footer() {
    return(
        <div className="footer">
            <a href="mailto:shravan.selvavel@duke.edu" target="_blank" rel="noopener noreferrer">
                <button className="footerContent">email</button>
            </a>
            <a href="https://github.com/shravan2453" target="_blank" rel="noopener noreferrer">
                <button className="footerContent">github</button>
            </a>
            <a href="https://linkedin.com/in/shravan-selvavel" target="_blank" rel="noopener noreferrer">
                <button className="footerContent">linkedIn</button>
            </a>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                <button className="footerContent">resume</button>
            </a>
        </div>
    );
}

export default Footer;