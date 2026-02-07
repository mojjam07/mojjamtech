import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const prevLocationRef = useRef(location.pathname);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Scroll handler for header transformation
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    const currentPath = location.pathname;
    if (prevLocationRef.current !== currentPath && isMenuOpen) {
      const timer = setTimeout(() => {
        setIsMenuOpen(false);
      }, 0);
      return () => clearTimeout(timer);
    }
    prevLocationRef.current = currentPath;
  }, [location.pathname, isMenuOpen]);

  return (
    <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
      <div className="header-glow"></div>
      <div className="container">
        <div className="header-content">
          {/* Logo */}
          <Link to="/" className="logo" onClick={closeMenu}>
            <div className="logo-container">
              <img src="/logo1.png" alt="MOJJAM TECHNOLOGIES" className="logo-img" />
              {/* <span className="logo-text">MOJJAM</span> */}
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="nav-desktop">
            <ul className="nav-list">
              <li className="nav-item">
                <Link 
                  to="/" 
                  className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
                >
                  Home
                  {location.pathname === '/' && <span className="nav-indicator"></span>}
                </Link>
              </li>
              <li className="nav-item">
                <Link 
                  to="/about" 
                  className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}
                >
                  About
                  {location.pathname === '/about' && <span className="nav-indicator"></span>}
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/programs"
                  className={`nav-link ${location.pathname === '/programs' ? 'active' : ''}`}
                >
                  Programs
                  {location.pathname === '/programs' && <span className="nav-indicator"></span>}
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/services"
                  className={`nav-link ${location.pathname === '/services' ? 'active' : ''}`}
                >
                  Services
                  {location.pathname === '/services' && <span className="nav-indicator"></span>}
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/sponsorship"
                  className={`nav-link ${location.pathname === '/sponsorship' ? 'active' : ''}`}
                >
                  Sponsor
                  {location.pathname === '/sponsorship' && <span className="nav-indicator"></span>}
                </Link>
              </li>
              <li className="nav-item">
                <Link 
                  to="/contact" 
                  className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}
                >
                  Contact
                  {location.pathname === '/contact' && <span className="nav-indicator"></span>}
                </Link>
              </li>
            </ul>
          </nav>
          
          {/* CTA Button & Admin */}
          <div className="header-actions">
            <Link to="/programs" className="btn btn-header-cta">
              Apply Now
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14"/>
                <path d="m12 5 7 7-7 7"/>
              </svg>
            </Link>
            <Link to="/admin" className="nav-link-admin-wrapper">
              <span className="nav-link nav-link-admin">Admin</span>
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className={`mobile-menu-btn ${isMenuOpen ? 'active' : ''}`} 
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="menu-icon">
              <circle cx="4" cy="4" r="2.5" />
              <circle cx="12" cy="4" r="2.5" />
              <circle cx="20" cy="4" r="2.5" />
              <circle cx="4" cy="12" r="2.5" />
              <circle cx="12" cy="12" r="2.5" />
              <circle cx="20" cy="12" r="2.5" />
              <circle cx="4" cy="20" r="2.5" />
              <circle cx="12" cy="20" r="2.5" />
              <circle cx="20" cy="20" r="2.5" />
            </svg>
          </button>
          
          {/* Mobile Navigation */}
          <nav className={`nav-mobile ${isMenuOpen ? 'nav-open' : ''}`}>
            <div className="nav-mobile-content">
              <div className="nav-mobile-logo">
                {/* <img src="/logo1.png" alt="MOJJAM TECHNOLOGIES" /> */}
                <span>MOJJAM TECHNOLOGIES</span> 
              </div>
              <ul className="nav-mobile-list">
                <li className="nav-mobile-item">
                  <Link 
                    to="/" 
                    className={`nav-mobile-link ${location.pathname === '/' ? 'active' : ''}`}
                  >
                    <span className="nav-mobile-icon">🏠</span>
                    Home
                    {location.pathname === '/' && <span className="nav-mobile-indicator"></span>}
                  </Link>
                </li>
                <li className="nav-mobile-item">
                  <Link 
                    to="/about" 
                    className={`nav-mobile-link ${location.pathname === '/about' ? 'active' : ''}`}
                  >
                    <span className="nav-mobile-icon">ℹ️</span>
                    About
                    {location.pathname === '/about' && <span className="nav-mobile-indicator"></span>}
                  </Link>
                </li>
                <li className="nav-mobile-item">
                  <Link
                    to="/programs"
                    className={`nav-mobile-link ${location.pathname === '/programs' ? 'active' : ''}`}
                  >
                    <span className="nav-mobile-icon">📚</span>
                    Programs
                    {location.pathname === '/programs' && <span className="nav-mobile-indicator"></span>}
                  </Link>
                </li>
                <li className="nav-mobile-item">
                  <Link
                    to="/services"
                    className={`nav-mobile-link ${location.pathname === '/services' ? 'active' : ''}`}
                  >
                    <span className="nav-mobile-icon">🛠️</span>
                    Services
                    {location.pathname === '/services' && <span className="nav-mobile-indicator"></span>}
                  </Link>
                </li>
                <li className="nav-mobile-item">
                  <Link
                    to="/sponsorship"
                    className={`nav-mobile-link ${location.pathname === '/sponsorship' ? 'active' : ''}`}
                  >
                    <span className="nav-mobile-icon">🤝</span>
                    Sponsor
                    {location.pathname === '/sponsorship' && <span className="nav-mobile-indicator"></span>}
                  </Link>
                </li>
                <li className="nav-mobile-item">
                  <Link 
                    to="/contact" 
                    className={`nav-mobile-link ${location.pathname === '/contact' ? 'active' : ''}`}
                  >
                    <span className="nav-mobile-icon">✉️</span>
                    Contact
                    {location.pathname === '/contact' && <span className="nav-mobile-indicator"></span>}
                  </Link>
                </li>
                <li className="nav-mobile-item nav-mobile-cta">
                  <Link to="/programs" className="btn btn-mobile-cta">
                    Apply Now
                  </Link>
                </li>
                <li className="nav-mobile-item">
                  <Link 
                    to="/admin" 
                    className={`nav-mobile-link nav-mobile-admin ${location.pathname === '/admin' ? 'active' : ''}`}
                  >
                    <span className="nav-mobile-icon">⚙️</span>
                    Admin
                  </Link>
                </li>
              </ul>
              <div className="nav-mobile-footer">
                <p>Empowering the next generation of developers</p>
              </div>
            </div>
          </nav>
          
          {/* Mobile Overlay */}
          <div 
            className={`mobile-overlay ${isMenuOpen ? 'active' : ''}`} 
            onClick={closeMenu}
          ></div>
        </div>
      </div>
    </header>
  );
}

export default Header;

