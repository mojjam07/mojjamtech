import './Sponsorship.css';

function Sponsorship() {
  return (
    <div className="sponsorship">
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1>Sponsor a Program</h1>
          <p>Partner with us to empower the next generation of developers</p>
        </div>
      </section>
      
      {/* Why Sponsor Section */}
      <section className="why-sponsor section">
        <div className="container">
          <div className="section-title">
            <h2>Why Sponsor Us?</h2>
            <p>Make a meaningful impact on the future of tech</p>
          </div>
          <div className="grid grid-3">
            <div className="card reason-card">
              <div className="reason-icon">🌟</div>
              <h3>Youth Empowerment</h3>
              <p>Help create opportunities for young people to build successful careers in technology and transform their lives.</p>
            </div>
            <div className="card reason-card">
              <div className="reason-icon">📊</div>
              <h3>Measurable Impact</h3>
              <p>Track the real-world outcomes of your investment with detailed reports on trainee progress and success.</p>
            </div>
            <div className="card reason-card">
              <div className="reason-icon">🔍</div>
              <h3>Transparency</h3>
              <p>We maintain complete transparency in how funds are used and the impact they create.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Sponsorship Options Section */}
      <section className="sponsorship-options section">
        <div className="container">
          <div className="section-title">
            <h2>Sponsorship Options</h2>
            <p>Choose how you'd like to support our mission</p>
          </div>
          <div className="grid grid-3">
            <div className="card option-card">
              <div className="option-header">
                <h3>Training Support</h3>
                <p className="option-description">Fund the training costs for a cohort of trainees</p>
              </div>
              <div className="card-body">
                <ul className="option-features">
                  <li>Cover training materials</li>
                  <li>Support instructor costs</li>
                  <li>Provide learning resources</li>
                  <li>Recognition on our website</li>
                </ul>
                <button className="btn btn-primary btn-block">Choose This Option</button>
              </div>
            </div>
            
            <div className="card option-card featured">
              <div className="option-badge">Most Popular</div>
              <div className="option-header">
                <h3>Equipment & Tools</h3>
                <p className="option-description">Provide laptops and development tools</p>
              </div>
              <div className="card-body">
                <ul className="option-features">
                  <li>Laptops for trainees</li>
                  <li>Software licenses</li>
                  <li>Development tools</li>
                  <li>Brand visibility on equipment</li>
                </ul>
                <button className="btn btn-secondary btn-block">Choose This Option</button>
              </div>
            </div>
            
            <div className="card option-card">
              <div className="option-header">
                <h3>Student Scholarships</h3>
                <p className="option-description">Fund full scholarships for deserving students</p>
              </div>
              <div className="card-body">
                <ul className="option-features">
                  <li>Full tuition coverage</li>
                  <li>Mentorship program</li>
                  <li>Career placement support</li>
                  <li>Premium brand placement</li>
                </ul>
                <button className="btn btn-primary btn-block">Choose This Option</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* What Sponsors Get Section */}
      <section className="sponsor-benefits section">
        <div className="container">
          <div className="section-title">
            <h2>What Sponsors Get</h2>
            <p>Benefits of partnering with MOJJAM TECHNOLOGIES</p>
          </div>
          <div className="grid grid-3">
            <div className="benefit-item">
              <div className="benefit-icon">📢</div>
              <h3>Brand Visibility</h3>
              <p>Logo placement on our website, marketing materials, and at events. Your brand reaches our entire network.</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">📑</div>
              <h3>Reports & Metrics</h3>
              <p>Receive detailed impact reports showing trainee progress, completion rates, and career outcomes.</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">🤝</div>
              <h3>CSR Impact</h3>
              <p>Demonstrate your commitment to social responsibility and community development through meaningful action.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="sponsorship-cta section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Make a Difference?</h2>
            <p>Let's discuss how we can create a custom sponsorship package that aligns with your goals.</p>
            <button className="btn btn-primary btn-lg">Request Sponsorship Proposal</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Sponsorship;

