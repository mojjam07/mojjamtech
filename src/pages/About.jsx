import './About.css';

function About() {
  return (
    <div className="about">
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1>About Us</h1>
        </div>
      </section>
      
      {/* Story & Vision Section */}
      <section className="story-vision section">
        <div className="container">
          <div className="story-content">
            <div className="story-image">
              <div className="founder-photo">
                <img src="/mojjam.png" alt="Founder" />
              </div>
            </div>
            <div className="story-text">
              <h2>Our Story & Vision</h2>
              
              <div className="story-block">
                <h3>Why We Started</h3>
                <p>
                  MOJJAM TECHNOLOGIES was founded with a clear mission: to bridge the gap 
                  between education and employment in the tech industry. We recognized that 
                  many aspiring developers struggle to find the right guidance and opportunities 
                  to kickstart their careers.
                </p>
              </div>
              
              <div className="story-block">
                <h3>Problem We Solve</h3>
                <p>
                  Traditional education often fails to provide practical, job-ready skills. 
                  There exists a significant gap between what companies need and what graduates 
                  can deliver. We're here to close that gap through hands-on, industry-relevant training.
                </p>
              </div>
              
              <div className="story-block">
                <h3>Our Mission</h3>
                <p>
                  To empower individuals with the skills, knowledge, and mentorship needed 
                  to become successful software developers while creating a positive impact 
                  on the tech community and the broader society.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Core Values Section */}
      <section className="core-values section">
        <div className="container">
          <div className="section-title">
            <h2>Core Values</h2>
            <p>The principles that guide everything we do</p>
          </div>
          <div className="grid grid-3">
            <div className="card value-card">
              <div className="value-icon">🤝</div>
              <h3>Integrity</h3>
              <p>We believe in transparency, honesty, and doing what's right. Our commitment 
              to ethical practices guides every decision we make.</p>
            </div>
            <div className="card value-card">
              <div className="value-icon">🛠️</div>
              <h3>Practical Learning</h3>
              <p>We focus on real-world skills and hands-on experience. Theory is important, 
              but implementation is where true learning happens.</p>
            </div>
            <div className="card value-card">
              <div className="value-icon">📈</div>
              <h3>Impact</h3>
              <p>We're driven by the positive change we create in people's lives. Every 
              trainee's success is our success.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="about-cta section">
        <div className="container">
          <div className="cta-content">
            <h2>Join Us in Our Mission</h2>
            <p>Whether you're looking to learn, mentor, or partner with us, we'd love to hear from you.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;

