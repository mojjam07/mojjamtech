import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Empowering the Next Generation of Developers</h1>
            <p className="hero-subtitle">
              We provide comprehensive training, mentorship, to help aspiring developers build successful careers in technology, and we also provide tech services that help companies build software solutions.
            </p>
            <div className="hero-buttons">
              <Link to="/sponsorship" className="btn btn-primary btn-lg">Become a Sponsor</Link>
              <Link to="/programs" className="btn btn-outline btn-lg">View Programs</Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* What We Do Section */}
      <section className="what-we-do section">
        <div className="container">
          <div className="section-title">
            <h2>What We Do</h2>
            <p>Our comprehensive approach to tech education and empowerment</p>
          </div>
          <div className="grid grid-3">
            <div className="card what-we-do-card">
              <div className="card-icon">🎓</div>
              <h3>Training</h3>
              <p>Hands-on training in frontend, backend, and full-stack development technologies.</p>
            </div>
            <div className="card what-we-do-card">
              <div className="card-icon">👥</div>
              <h3>Mentorship</h3>
              <p>One-on-one guidance from experienced industry professionals to help you grow.</p>
            </div>
            <div className="card what-we-do-card">
              <div className="card-icon">💼</div>
              <h3>Tech Services</h3>
              <p>Real-world projects services that build branded software solutions for companies and organizations.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Impact Snapshot Section */}
      <section className="impact-snapshot section">
        <div className="container">
          <div className="section-title">
            <h2>Impact Snapshot</h2>
            <p>Our achievements in numbers</p>
          </div>
          <div className="grid grid-3">
            <div className="stats-card">
              <div className="stats-number">120+</div>
              <div className="stats-label">Trainees</div>
            </div>
            <div className="stats-card">
              <div className="stats-number">6</div>
              <div className="stats-label">Programs</div>
            </div>
            <div className="stats-card">
              <div className="stats-number">4</div>
              <div className="stats-label">Sponsors</div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Partners/Sponsors Section */}
      <section className="partners section">
        <div className="container">
          <div className="section-title">
            <h2>Partners & Sponsors</h2>
            <p>Organizations that support our mission</p>
          </div>
          <div className="partners-grid">
            <div className="partner-logo">
              <img src="/logo_brand.png" alt="Partner 1" />
            </div>
            <div className="partner-logo">
              <img src="/logo1.png" alt="Partner 2" />
            </div>
            <div className="partner-logo">
              <img src="/logo.png" alt="Partner 3" />
            </div>
            <div className="partner-logo">
              <img src="/vite.svg" alt="Partner 4" />
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="cta-section section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Make an Impact?</h2>
            <p>Join us in empowering the next generation of developers. Whether you want to learn, mentor, or sponsor, there's a place for you here.</p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary btn-lg">Get in Touch</Link>
              <Link to="/sponsorship" className="btn btn-secondary btn-lg">Become a Sponsor</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;

