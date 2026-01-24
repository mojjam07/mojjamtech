import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          {/* Logo */}
          <Link to="/" className="logo" onClick={closeMenu}>
            <img src="/logo.png" alt="MOJJAM TECHNOLOGIES" className="logo-img" />
            <span className="logo-text">MOJJAM TECHNOLOGIES</span>
          </Link>
          
          {/* Mobile Menu Button */}
          <button 
            className={`mobile-menu-btn ${isMenuOpen ? 'active' : ''}`} 
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          
          {/* Navigation */}
          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
            <ul className="nav-list">
              <li className="nav-item">
                <Link to="/" className="nav-link" onClick={closeMenu}>Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link" onClick={closeMenu}>About</Link>
              </li>
              <li className="nav-item">
                <Link to="/programs" className="nav-link" onClick={closeMenu}>Programs</Link>
              </li>
              <li className="nav-item">
                <Link to="/sponsorship" className="nav-link" onClick={closeMenu}>Sponsor</Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link" onClick={closeMenu}>Contact</Link>
              </li>
              <li className="nav-item">
                <Link to="/admin" className="nav-link nav-link-admin" onClick={closeMenu}>Admin</Link>
              </li>
            </ul>
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

