import { Link, useLocation } from 'react-router-dom';
import './Sidebar.css';

function Sidebar() {
  const location = useLocation();
  
  const isActive = (path) => {
    return location.pathname === path || location.pathname.startsWith(path + '/');
  };
  
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <img src="/logo.png" alt="MOJJAM TECHNOLOGIES" className="sidebar-logo" />
        <span className="sidebar-title">Admin Panel</span>
      </div>
      
      <nav className="sidebar-nav">
        <ul className="nav-menu">
          <li className="nav-item">
            <Link 
              to="/admin/dashboard" 
              className={`nav-link ${isActive('/admin/dashboard') ? 'active' : ''}`}
            >
              <span className="nav-icon">📊</span>
              <span className="nav-text">Dashboard</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/admin/trainees" 
              className={`nav-link ${isActive('/admin/trainees') ? 'active' : ''}`}
            >
              <span className="nav-icon">👨‍🎓</span>
              <span className="nav-text">Trainees</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/admin/programs" 
              className={`nav-link ${isActive('/admin/programs') ? 'active' : ''}`}
            >
              <span className="nav-icon">📚</span>
              <span className="nav-text">Programs</span>
            </Link>
          </li>
        </ul>
      </nav>
      
      <div className="sidebar-footer">
        <Link to="/" className="nav-link">
          <span className="nav-icon">🏠</span>
          <span className="nav-text">View Website</span>
        </Link>
        <button className="nav-link logout-btn">
          <span className="nav-icon">🚪</span>
          <span className="nav-text">Logout</span>
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;

