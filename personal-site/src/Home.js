import './Home.css';

function Home({ activeSection }) {
  return (
    <div id="home" className="Home">
      <header className="home-header">
        Shravan Selvavel
      </header>
      <div className="content">
        <p>Aspiring Data Scientist</p>
      </div>
      <div>
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
          <button className="resumeButton">View My Resume →</button>
        </a>
      </div>
    </div>
  );
}

export default Home;
