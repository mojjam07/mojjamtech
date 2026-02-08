import { useState } from 'react';
import Sidebar from '../components/Sidebar';
import './ProgramManagement.css';

function ProgramManagement() {
  const [programs] = useState([
    { id: 1, title: 'Frontend Development', duration: '3 months', trainees: 30, status: 'Active' },
    { id: 2, title: 'Backend Development', duration: '3 months', trainees: 25, status: 'Active' },
    { id: 3, title: 'Fullstack Development', duration: '6 months', trainees: 20, status: 'Active' },
    { id: 4, title: 'React Mastery', duration: '2 months', trainees: 15, status: 'Draft' },
    { id: 5, title: 'Node.js Fundamentals', duration: '2 months', trainees: 0, status: 'Upcoming' }
  ]);
  
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  return (
    <div className="admin-layout">
      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
      
      <main className="admin-main">
        <header className="admin-header">
          <div className="header-left">
            <button 
              className="mobile-menu-btn"
              onClick={() => setSidebarOpen(true)}
            >
              ☰
            </button>
            <h1>Programs Management</h1>
          </div>
          <div className="admin-user">
            <span className="user-name">Admin User</span>
            <div className="user-avatar">A</div>
          </div>
        </header>
        
        <div className="admin-content">
          {/* Actions Bar */}
          <div className="actions-bar">
            <div className="search-box">
              <input type="text" placeholder="Search programs..." />
            </div>
            <div className="filter-buttons">
              <select className="filter-select">
                <option value="">All Status</option>
                <option value="active">Active</option>
                <option value="draft">Draft</option>
                <option value="upcoming">Upcoming</option>
              </select>
              <button className="btn btn-primary">
                + Add Program
              </button>
            </div>
          </div>
          
          {/* Programs Grid */}
          <section className="programs-section">
            <div className="programs-grid">
              {programs.map((program) => (
                <div key={program.id} className="program-card">
                  <div className="program-header">
                    <h3>{program.title}</h3>
                    <span className={`status-badge status-${program.status.toLowerCase()}`}>
                      {program.status}
                    </span>
                  </div>
                  <div className="program-body">
                    <div className="program-stats">
                      <div className="program-stat">
                        <span className="stat-value">{program.duration}</span>
                        <span className="stat-label">Duration</span>
                      </div>
                      <div className="program-stat">
                        <span className="stat-value">{program.trainees}</span>
                        <span className="stat-label">Trainees</span>
                      </div>
                    </div>
                    <div className="program-actions">
                      <button className="btn btn-sm btn-outline">Edit</button>
                      <button className="btn btn-sm btn-outline">Delete</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default ProgramManagement;

