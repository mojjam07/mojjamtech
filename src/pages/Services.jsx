import { Link } from 'react-router-dom';
import './Services.css';

function Services() {
  return (
    <div className="services">
      {/* Hero Section */}
      <section className="services-hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Professional Tech Services</h1>
            <p className="hero-subtitle">
              We deliver cutting-edge software solutions that drive business growth and innovation.
              From custom development to digital transformation, we turn your vision into reality.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="services-overview section">
        <div className="container">
          <div className="section-title">
            <h2>Our Services</h2>
            <p>Comprehensive technology solutions tailored to your business needs</p>
          </div>
          <div className="grid grid-3">
            <div className="card service-card glass-card">
              <div className="card-icon">💻</div>
              <h3>Custom Software Development</h3>
              <p>End-to-end development of web and mobile applications using modern technologies and best practices.</p>
              <ul className="service-features">
                <li>Full-stack web applications</li>
                <li>Mobile app development</li>
                <li>API development and integration</li>
                <li>Database design and optimization</li>
              </ul>
            </div>
            <div className="card service-card glass-card">
              <div className="card-icon">🚀</div>
              <h3>Digital Transformation</h3>
              <p>Modernize your business processes with innovative digital solutions and automation.</p>
              <ul className="service-features">
                <li>Legacy system modernization</li>
                <li>Process automation</li>
                <li>Cloud migration</li>
                <li>DevOps implementation</li>
              </ul>
            </div>
            <div className="card service-card glass-card">
              <div className="card-icon">📊</div>
              <h3>Data Analytics & AI</h3>
              <p>Leverage data-driven insights and AI capabilities to make informed business decisions.</p>
              <ul className="service-features">
                <li>Business intelligence dashboards</li>
                <li>Machine learning solutions</li>
                <li>Data visualization</li>
                <li>Predictive analytics</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process section">
        <div className="container">
          <div className="section-title">
            <h2>Our Process</h2>
            <p>How we deliver exceptional results for your business</p>
          </div>
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">1</div>
              <h3>Discovery & Planning</h3>
              <p>We understand your business needs, goals, and challenges through comprehensive analysis and strategic planning.</p>
            </div>
            <div className="process-step">
              <div className="step-number">2</div>
              <h3>Design & Development</h3>
              <p>Our expert team creates innovative solutions using cutting-edge technologies and industry best practices.</p>
            </div>
            <div className="process-step">
              <div className="step-number">3</div>
              <h3>Testing & Deployment</h3>
              <p>Rigorous testing ensures quality and reliability before seamless deployment to production environments.</p>
            </div>
            <div className="process-step">
              <div className="step-number">4</div>
              <h3>Support & Maintenance</h3>
              <p>Ongoing support and maintenance to ensure your solutions continue to perform optimally and evolve with your needs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="services-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Transform Your Business?</h2>
            <p>Let's discuss how our tech services can help you achieve your goals and drive innovation.</p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary btn-lg">Get Started</Link>
              <Link to="/programs" className="btn btn-outline btn-lg">View Our Programs</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;
