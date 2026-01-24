import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* About Section */}
          <div className="footer-section">
            <div className="footer-logo">
              <img src="/logo1.png" alt="MOJJAM TECHNOLOGIES" />
            </div>
            <p className="footer-description">
              Empowering the next generation of developers through comprehensive training, mentorship, and tech services.
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="footer-section">
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/programs">Programs</Link></li>
              <li><Link to="/sponsorship">Sponsorship</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          
          {/* Programs */}
          <div className="footer-section">
            <h4 className="footer-title">Programs</h4>
            <ul className="footer-links">
              <li><Link to="/programs">Frontend Development</Link></li>
              <li><Link to="/programs">Backend Development</Link></li>
              <li><Link to="/programs">Fullstack Development</Link></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div className="footer-section">
            <h4 className="footer-title">Contact Us</h4>
            <ul className="footer-contact">
              <li>
                <span className="contact-icon">📍</span>
                <span>Location Address</span>
              </li>
              <li>
                <span className="contact-icon">📧</span>
                <a href="mailto:info@mojjamtechnologies.com">info@mojjamtechnologies.com</a>
              </li>
              <li>
                <span className="contact-icon">📱</span>
                <a href="tel:+1234567890">+1 (234) 567-890</a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>&copy; {currentYear} MOJJAM TECHNOLOGIES. All rights reserved.</p>
          <div className="social-links">
            <a href="#" aria-label="Facebook">Facebook</a>
            <a href="#" aria-label="Twitter">Twitter</a>
            <a href="#" aria-label="LinkedIn">LinkedIn</a>
            <a href="#" aria-label="Instagram">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

