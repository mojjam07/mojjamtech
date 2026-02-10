import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import './Sidebar.css';

function Sidebar({ isOpen, setIsOpen }) {
  const location = useLocation();
  const { logout } = useAuth();
  
  const isActive = (path) => {
    return location.pathname === path || location.pathname.startsWith(path + '/');
  };

  const handleLogout = () => {
    logout();
  };

  const closeSidebar = () => {
    setIsOpen(false);
  };
  
  const navItems = [
    { path: '/admin/dashboard', label: 'Dashboard', icon: '📊' },
    { path: '/admin/trainees', label: 'Trainees', icon: '👨‍🎓' },
    { path: '/admin/programs', label: 'Programs', icon: '📚' },
    { path: '/admin/about', label: 'About', icon: 'ℹ️' },
    { path: '/admin/services', label: 'Services', icon: '🛠️' },
    { path: '/admin/sponsorship', label: 'Sponsorship', icon: '🤝' },
    { path: '/admin/contact', label: 'Contact', icon: '📧' },
    { path: '/admin/gallery', label: 'Gallery', icon: '🖼️' }
  ];
  
  return (
    <>
      {/* Mobile Overlay */}
      <div 
        className={`sidebar-overlay ${isOpen ? 'visible' : ''}`} 
        onClick={closeSidebar}
      />
      
      <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <img src="/logo.png" alt="MOJJAM TECHNOLOGIES" className="sidebar-logo" />
          <span className="sidebar-title">Admin Panel</span>
          <button className="sidebar-close" onClick={closeSidebar}>
            ✕
          </button>
        </div>
        
        <nav className="sidebar-nav">
          <ul className="nav-menu">
            {navItems.map((item) => (
              <li key={item.path} className="nav-item">
                <Link 
                  to={item.path} 
                  className={`nav-link ${isActive(item.path) ? 'active' : ''}`}
                  onClick={closeSidebar}
                >
                  <span className="nav-icon">{item.icon}</span>
                  <span className="nav-text">{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        
        <div className="sidebar-footer">
          <Link to="/" className="nav-link" onClick={closeSidebar}>
            <span className="nav-icon">🏠</span>
            <span className="nav-text">View Website</span>
          </Link>
          <button 
            className="nav-link logout-btn" 
            onClick={handleLogout}
          >
            <span className="nav-icon">🚪</span>
            <span className="nav-text">Logout</span>
          </button>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;

