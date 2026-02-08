import { useState } from 'react';
import Sidebar from '../components/Sidebar';
import './ServicesManagement.css';

function ServicesManagement() {
  const [services] = useState([
    {
      id: 1,
      title: 'Web Development',
      description: 'Full-stack web development training covering HTML, CSS, JavaScript, React, Node.js, and databases.',
      icon: '🌐',
      features: ['Frontend Development', 'Backend Development', 'Database Design', 'API Development'],
      price: '$499',
      duration: '3 months',
      status: 'Active'
    },
    {
      id: 2,
      title: 'Mobile App Development',
      description: 'Build cross-platform mobile applications using React Native and Flutter.',
      icon: '📱',
      features: ['iOS Development', 'Android Development', 'App UI/UX', 'App Deployment'],
      price: '$599',
      duration: '4 months',
      status: 'Active'
    },
    {
      id: 3,
      title: 'Data Science & Analytics',
      description: 'Master data analysis, visualization, and machine learning with Python and R.',
      icon: '📊',
      features: ['Python Programming', 'Machine Learning', 'Data Visualization', 'Statistical Analysis'],
      price: '$699',
      duration: '4 months',
      status: 'Active'
    },
    {
      id: 4,
      title: 'UI/UX Design',
      description: 'Learn to design beautiful, user-friendly interfaces using Figma and Adobe XD.',
      icon: '🎨',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems'],
      price: '$399',
      duration: '2 months',
      status: 'Active'
    },
    {
      id: 5,
      title: 'DevOps Engineering',
      description: 'Master CI/CD, containerization, cloud platforms, and infrastructure management.',
      icon: '⚙️',
      features: ['Docker & Kubernetes', 'AWS/Azure', 'CI/CD Pipelines', 'Infrastructure as Code'],
      price: '$649',
      duration: '3 months',
      status: 'Upcoming'
    },
    {
      id: 6,
      title: 'Blockchain Development',
      description: 'Build decentralized applications using Ethereum, Solidity, and Web3.js.',
      icon: '⛓️',
      features: ['Smart Contracts', 'DApp Development', 'Token Economics', 'DeFi Integration'],
      price: '$799',
      duration: '3 months',
      status: 'Draft'
    }
  ]);

  const [isEditing, setIsEditing] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [filter, setFilter] = useState('all');

  const filteredServices = filter === 'all' 
    ? services 
    : services.filter(s => s.status.toLowerCase() === filter);

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
            <h1>Services Management</h1>
          </div>
          <div className="admin-user">
            <span className="user-name">Admin User</span>
            <div className="user-avatar">A</div>
          </div>
        </header>
        
        <div className="admin-content">
          {/* Actions Bar */}
          <div className="actions-bar">
            <div className="filter-tabs">
              <button 
                className={`filter-tab ${filter === 'all' ? 'active' : ''}`}
                onClick={() => setFilter('all')}
              >
                All ({services.length})
              </button>
              <button 
                className={`filter-tab ${filter === 'active' ? 'active' : ''}`}
                onClick={() => setFilter('active')}
              >
                Active ({services.filter(s => s.status === 'Active').length})
              </button>
              <button 
                className={`filter-tab ${filter === 'upcoming' ? 'active' : ''}`}
                onClick={() => setFilter('upcoming')}
              >
                Upcoming ({services.filter(s => s.status === 'Upcoming').length})
              </button>
              <button 
                className={`filter-tab ${filter === 'draft' ? 'active' : ''}`}
                onClick={() => setFilter('draft')}
              >
                Draft ({services.filter(s => s.status === 'Draft').length})
              </button>
            </div>
            <div className="filter-buttons">
              <button 
                className={`btn ${isEditing ? 'btn-primary' : 'btn-outline'}`}
                onClick={() => setIsEditing(!isEditing)}
              >
                {isEditing ? 'Cancel' : 'Edit Mode'}
              </button>
              {isEditing && (
                <button className="btn btn-primary">
                  + Add Service
                </button>
              )}
            </div>
          </div>

          {/* Services Grid */}
          <section className="services-section">
            <div className="services-grid">
              {filteredServices.map((service) => (
                <div key={service.id} className="service-card">
                  <div className="service-header">
                    <div className="service-icon">{service.icon}</div>
                    <span className={`status-badge status-${service.status.toLowerCase()}`}>
                      {service.status}
                    </span>
                  </div>
                  
                  <div className="service-body">
                    <h3>{service.title}</h3>
                    <p className="service-description">{service.description}</p>
                    
                    <div className="service-meta">
                      <div className="meta-item">
                        <span className="meta-label">Duration</span>
                        <span className="meta-value">{service.duration}</span>
                      </div>
                      <div className="meta-item">
                        <span className="meta-label">Price</span>
                        <span className="meta-value">{service.price}</span>
                      </div>
                    </div>
                    
                    <div className="service-features">
                      <h4>Key Features:</h4>
                      <ul>
                        {service.features.map((feature, index) => (
                          <li key={index}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="service-footer">
                    {isEditing ? (
                      <div className="service-actions">
                        <button className="btn btn-sm btn-outline">Edit</button>
                        <button className="btn btn-sm btn-outline">Delete</button>
                        <button className="btn btn-sm btn-outline">
                          {service.status === 'Active' ? 'Deactivate' : 'Activate'}
                        </button>
                      </div>
                    ) : (
                      <div className="service-stats">
                        <span>{service.features.length} Features</span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Summary Cards */}
          <section className="summary-section">
            <div className="summary-grid">
              <div className="summary-card">
                <div className="summary-icon">🌐</div>
                <div className="summary-info">
                  <span className="summary-value">{services.length}</span>
                  <span className="summary-label">Total Services</span>
                </div>
              </div>
              <div className="summary-card">
                <div className="summary-icon">✅</div>
                <div className="summary-info">
                  <span className="summary-value">{services.filter(s => s.status === 'Active').length}</span>
                  <span className="summary-label">Active Services</span>
                </div>
              </div>
              <div className="summary-card">
                <div className="summary-icon">⏳</div>
                <div className="summary-info">
                  <span className="summary-value">{services.filter(s => s.status === 'Upcoming').length}</span>
                  <span className="summary-label">Coming Soon</span>
                </div>
              </div>
              <div className="summary-card">
                <div className="summary-icon">📝</div>
                <div className="summary-info">
                  <span className="summary-value">{services.filter(s => s.status === 'Draft').length}</span>
                  <span className="summary-label">Drafts</span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default ServicesManagement;

