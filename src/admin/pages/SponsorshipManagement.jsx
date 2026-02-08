import { useState } from 'react';
import Sidebar from '../components/Sidebar';
import './SponsorshipManagement.css';

function SponsorshipManagement() {
  const [sponsors] = useState([
    {
      id: 1,
      name: 'TechCorp International',
      logo: '/sponsors/techcorp.png',
      tier: 'Platinum',
      website: 'https://techcorp.example.com',
      description: 'Leading provider of enterprise software solutions',
      contribution: '$50,000',
      status: 'Active',
      startDate: '2024-01-15',
      endDate: '2025-01-15'
    },
    {
      id: 2,
      name: 'Innovation Labs',
      logo: '/sponsors/innovation.png',
      tier: 'Gold',
      website: 'https://innovationlabs.example.com',
      description: 'Technology incubator and startup accelerator',
      contribution: '$25,000',
      status: 'Active',
      startDate: '2024-02-01',
      endDate: '2025-02-01'
    },
    {
      id: 3,
      name: 'CloudServe Inc',
      logo: '/sponsors/cloudserve.png',
      tier: 'Gold',
      website: 'https://cloudserve.example.com',
      description: 'Cloud infrastructure and hosting services',
      contribution: '$20,000',
      status: 'Active',
      startDate: '2024-03-01',
      endDate: '2025-03-01'
    },
    {
      id: 4,
      name: 'DevTools Pro',
      logo: '/sponsors/devtools.png',
      tier: 'Silver',
      website: 'https://devtools.example.com',
      description: 'Professional developer tools and IDEs',
      contribution: '$10,000',
      status: 'Active',
      startDate: '2024-01-01',
      endDate: '2024-12-31'
    },
    {
      id: 5,
      name: 'DataStream Analytics',
      logo: '/sponsors/datastream.png',
      tier: 'Silver',
      website: 'https://datastream.example.com',
      description: 'Real-time data analytics platform',
      contribution: '$8,000',
      status: 'Active',
      startDate: '2024-04-01',
      endDate: '2025-04-01'
    },
    {
      id: 6,
      name: 'SecureNet Solutions',
      logo: '/sponsors/securenet.png',
      tier: 'Bronze',
      website: 'https://securenet.example.com',
      description: 'Cybersecurity and network security',
      contribution: '$5,000',
      status: 'Active',
      startDate: '2024-05-01',
      endDate: '2025-05-01'
    }
  ]);

  const [sponsorshipPackages] = useState([
    { id: 1, name: 'Platinum', price: '$50,000+', benefits: ['Logo on all materials', 'VIP booth at events', 'Speaking opportunity', 'Featured blog post'] },
    { id: 2, name: 'Gold', price: '$25,000+', benefits: ['Logo on website', 'Booth at events', 'Social media mentions'] },
    { id: 3, name: 'Silver', price: '$10,000+', benefits: ['Logo on website', 'Event participation'] },
    { id: 4, name: 'Bronze', price: '$5,000+', benefits: ['Logo on website', 'Certificate of appreciation'] }
  ]);

  const [isEditing, setIsEditing] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [filter, setFilter] = useState('all');

  const filteredSponsors = filter === 'all' 
    ? sponsors 
    : sponsors.filter(s => s.tier.toLowerCase() === filter);

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
            <h1>Sponsorship Management</h1>
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
                All ({sponsors.length})
              </button>
              <button 
                className={`filter-tab ${filter === 'platinum' ? 'active' : ''}`}
                onClick={() => setFilter('platinum')}
              >
                Platinum ({sponsors.filter(s => s.tier === 'Platinum').length})
              </button>
              <button 
                className={`filter-tab ${filter === 'gold' ? 'active' : ''}`}
                onClick={() => setFilter('gold')}
              >
                Gold ({sponsors.filter(s => s.tier === 'Gold').length})
              </button>
              <button 
                className={`filter-tab ${filter === 'silver' ? 'active' : ''}`}
                onClick={() => setFilter('silver')}
              >
                Silver ({sponsors.filter(s => s.tier === 'Silver').length})
              </button>
              <button 
                className={`filter-tab ${filter === 'bronze' ? 'active' : ''}`}
                onClick={() => setFilter('bronze')}
              >
                Bronze ({sponsors.filter(s => s.tier === 'Bronze').length})
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
                  + Add Sponsor
                </button>
              )}
            </div>
          </div>

          {/* Stats Overview */}
          <section className="stats-section">
            <div className="stats-grid">
              <div className="stat-card-admin">
                <div className="stat-icon">🤝</div>
                <div className="stat-info">
                  <span className="stat-value">{sponsors.length}</span>
                  <span className="stat-label">Total Sponsors</span>
                </div>
              </div>
              <div className="stat-card-admin stat-platinum">
                <div className="stat-icon">💎</div>
                <div className="stat-info">
                  <span className="stat-value">{sponsors.filter(s => s.tier === 'Platinum').length}</span>
                  <span className="stat-label">Platinum</span>
                </div>
              </div>
              <div className="stat-card-admin stat-gold">
                <div className="stat-icon">🥇</div>
                <div className="stat-info">
                  <span className="stat-value">{sponsors.filter(s => s.tier === 'Gold').length}</span>
                  <span className="stat-label">Gold</span>
                </div>
              </div>
              <div className="stat-card-admin stat-silver">
                <div className="stat-icon">🥈</div>
                <div className="stat-info">
                  <span className="stat-value">{sponsors.filter(s => s.tier === 'Silver').length}</span>
                  <span className="stat-label">Silver</span>
                </div>
              </div>
              <div className="stat-card-admin stat-bronze">
                <div className="stat-icon">🥉</div>
                <div className="stat-info">
                  <span className="stat-value">{sponsors.filter(s => s.tier === 'Bronze').length}</span>
                  <span className="stat-label">Bronze</span>
                </div>
              </div>
            </div>
          </section>

          {/* Sponsors Grid */}
          <section className="sponsors-section">
            <div className="sponsors-grid">
              {filteredSponsors.map((sponsor) => (
                <div key={sponsor.id} className={`sponsor-card tier-${sponsor.tier.toLowerCase()}`}>
                  <div className="sponsor-header">
                    <div className="sponsor-logo">
                      {sponsor.name.charAt(0)}
                    </div>
                    <span className={`tier-badge tier-${sponsor.tier.toLowerCase()}`}>
                      {sponsor.tier}
                    </span>
                  </div>
                  
                  <div className="sponsor-body">
                    <h3>{sponsor.name}</h3>
                    <p className="sponsor-description">{sponsor.description}</p>
                    
                    <div className="sponsor-details">
                      <div className="detail-row">
                        <span className="detail-label">Website</span>
                        <a href={sponsor.website} className="detail-link" target="_blank" rel="noopener noreferrer">
                          {sponsor.website.replace('https://', '')}
                        </a>
                      </div>
                      <div className="detail-row">
                        <span className="detail-label">Contribution</span>
                        <span className="detail-value">{sponsor.contribution}</span>
                      </div>
                      <div className="detail-row">
                        <span className="detail-label">Period</span>
                        <span className="detail-value">{sponsor.startDate} - {sponsor.endDate}</span>
                      </div>
                      <div className="detail-row">
                        <span className="detail-label">Status</span>
                        <span className={`status-indicator ${sponsor.status.toLowerCase()}`}>
                          {sponsor.status}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  {isEditing && (
                    <div className="sponsor-footer">
                      <button className="btn btn-sm btn-outline">Edit</button>
                      <button className="btn btn-sm btn-outline">Delete</button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Sponsorship Packages */}
          <section className="packages-section">
            <div className="section-header">
              <h2>Sponsorship Packages</h2>
              {isEditing && (
                <button className="btn btn-sm btn-outline">+ Add Package</button>
              )}
            </div>
            
            <div className="packages-grid">
              {sponsorshipPackages.map((pkg) => (
                <div key={pkg.id} className={`package-card tier-${pkg.name.toLowerCase()}`}>
                  <div className="package-header">
                    <span className="package-icon">
                      {pkg.name === 'Platinum' ? '💎' : pkg.name === 'Gold' ? '🥇' : pkg.name === 'Silver' ? '🥈' : '🥉'}
                    </span>
                    <h3>{pkg.name}</h3>
                    <span className="package-price">{pkg.price}</span>
                  </div>
                  
                  <div className="package-body">
                    <ul className="benefits-list">
                      {pkg.benefits.map((benefit, index) => (
                        <li key={index}>
                          <span className="benefit-icon">✓</span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {isEditing && (
                    <div className="package-footer">
                      <button className="btn btn-sm btn-outline">Edit Package</button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default SponsorshipManagement;

