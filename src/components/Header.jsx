import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          {/* Logo */}
          <Link to="/" className="logo">
            <img src="/logo.png" alt="MOJJAM TECHNOLOGIES" className="logo-img" />
            <span className="logo-text">MOJJAM TECHNOLOGIES</span>
          </Link>
          
          {/* Navigation */}
          <nav className="nav">
            <ul className="nav-list">
              <li className="nav-item">
                <Link to="/" className="nav-link">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">About</Link>
              </li>
              <li className="nav-item">
                <Link to="/programs" className="nav-link">Programs</Link>
              </li>
              <li className="nav-item">
                <Link to="/sponsorship" className="nav-link">Sponsor</Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link">Contact</Link>
              </li>
              <li className="nav-item">
                <Link to="/admin" className="nav-link nav-link-admin">Admin</Link>
              </li>
            </ul>
          </nav>
          
          {/* Mobile Menu Button */}
          <button className="mobile-menu-btn" aria-label="Toggle menu">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;

