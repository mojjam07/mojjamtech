import { useState } from 'react';
import Sidebar from '../components/Sidebar';
import './AboutManagement.css';

function AboutManagement() {
  const [aboutContent, setAboutContent] = useState({
    title: 'About MOJJAM TECHNOLOGIES',
    subtitle: 'Empowering the next generation of tech talent',
    description: 'MOJJAM TECHNOLOGIES is a leading technology training institute dedicated to bridging the gap between education and industry requirements. We provide comprehensive training programs in web development, mobile app development, and other cutting-edge technologies.',
    mission: 'Our mission is to provide high-quality, practical technology education that prepares students for successful careers in the tech industry.',
    vision: 'To be the premier technology training institute in Africa and beyond, producing world-class developers and innovators.',
    values: [
      { id: 1, title: 'Excellence', description: 'Commitment to delivering the highest quality education' },
      { id: 2, title: 'Innovation', description: 'Embracing new technologies and teaching methodologies' },
      { id: 3, title: 'Integrity', description: 'Maintaining honest and transparent relationships' },
      { id: 4, title: 'Community', description: 'Building a supportive learning community' }
    ]
  });

  const [teamMembers] = useState([
    { id: 1, name: 'John Doe', role: 'CEO & Founder', bio: 'Tech entrepreneur with 15+ years experience', image: '/team1.jpg' },
    { id: 2, name: 'Jane Smith', role: 'Head of Education', bio: 'Former university professor with PhD in CS', image: '/team2.jpg' },
    { id: 3, name: 'Mike Johnson', role: 'Lead Instructor', bio: 'Senior developer from Silicon Valley', image: '/team3.jpg' },
    { id: 4, name: 'Sarah Williams', role: 'Operations Manager', bio: 'MBA with experience in EdTech', image: '/team4.jpg' }
  ]);

  const [stats] = useState([
    { id: 1, label: 'Years Established', value: '2018' },
    { id: 2, label: 'Students Graduated', value: '500+' },
    { id: 3, label: 'Partner Companies', value: '50+' },
    { id: 4, label: 'Success Rate', value: '95%' }
  ]);

  const [isEditing, setIsEditing] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="admin-layout">
      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
      
      <main className="admin-main">
        <header className="admin-header">
          <div className="header-left">
            <button 
              className="collapse-btn"
              onClick={() => setSidebarOpen(true)}
              aria-label="Toggle sidebar"
            >
              <span className="collapse-icon">
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
              </span>
            </button>
            <h1>About Page Management</h1>
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
              <input type="text" placeholder="Search content..." />
            </div>
            <div className="filter-buttons">
              <button 
                className={`btn ${isEditing ? 'btn-primary' : 'btn-outline'}`}
                onClick={() => setIsEditing(!isEditing)}
              >
                {isEditing ? 'Cancel Editing' : 'Edit Content'}
              </button>
              {isEditing && (
                <button className="btn btn-primary">
                  Save Changes
                </button>
              )}
            </div>
          </div>

          {/* Main Content Section */}
          <section className="content-section">
            <div className="section-card">
              <div className="section-header">
                <h2>Main Content</h2>
                <span className="badge badge-success">Published</span>
              </div>
              
              <div className="form-group">
                <label>Title</label>
                {isEditing ? (
                  <input 
                    type="text" 
                    value={aboutContent.title}
                    onChange={(e) => setAboutContent({...aboutContent, title: e.target.value})}
                  />
                ) : (
                  <p className="display-value">{aboutContent.title}</p>
                )}
              </div>

              <div className="form-group">
                <label>Subtitle</label>
                {isEditing ? (
                  <input 
                    type="text" 
                    value={aboutContent.subtitle}
                    onChange={(e) => setAboutContent({...aboutContent, subtitle: e.target.value})}
                  />
                ) : (
                  <p className="display-value">{aboutContent.subtitle}</p>
                )}
              </div>

              <div className="form-group">
                <label>Description</label>
                {isEditing ? (
                  <textarea 
                    rows="4"
                    value={aboutContent.description}
                    onChange={(e) => setAboutContent({...aboutContent, description: e.target.value})}
                  />
                ) : (
                  <p className="display-value">{aboutContent.description}</p>
                )}
              </div>
            </div>
          </section>

          {/* Mission & Vision */}
          <section className="content-section">
            <div className="grid grid-2">
              <div className="section-card">
                <div className="section-header">
                  <h2>Mission</h2>
                </div>
                {isEditing ? (
                  <textarea 
                    rows="3"
                    value={aboutContent.mission}
                    onChange={(e) => setAboutContent({...aboutContent, mission: e.target.value})}
                  />
                ) : (
                  <p className="display-value">{aboutContent.mission}</p>
                )}
              </div>
              
              <div className="section-card">
                <div className="section-header">
                  <h2>Vision</h2>
                </div>
                {isEditing ? (
                  <textarea 
                    rows="3"
                    value={aboutContent.vision}
                    onChange={(e) => setAboutContent({...aboutContent, vision: e.target.value})}
                  />
                ) : (
                  <p className="display-value">{aboutContent.vision}</p>
                )}
              </div>
            </div>
          </section>

          {/* Values */}
          <section className="content-section">
            <div className="section-card">
              <div className="section-header">
                <h2>Our Values</h2>
                {isEditing && (
                  <button className="btn btn-sm btn-outline">+ Add Value</button>
                )}
              </div>
              
              <div className="values-grid">
                {aboutContent.values.map((value) => (
                  <div key={value.id} className="value-card">
                    <h3>{value.title}</h3>
                    <p>{value.description}</p>
                    {isEditing && (
                      <div className="value-actions">
                        <button className="btn btn-sm btn-outline">Edit</button>
                        <button className="btn btn-sm btn-outline">Delete</button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Stats */}
          <section className="content-section">
            <div className="section-card">
              <div className="section-header">
                <h2>Statistics</h2>
                {isEditing && (
                  <button className="btn btn-sm btn-outline">+ Add Stat</button>
                )}
              </div>
              
              <div className="stats-grid">
                {stats.map((stat) => (
                  <div key={stat.id} className="stat-card-admin">
                    <span className="stat-value">{stat.value}</span>
                    <span className="stat-label">{stat.label}</span>
                    {isEditing && (
                      <div className="stat-actions">
                        <button className="btn btn-sm btn-outline">Edit</button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Team Members */}
          <section className="content-section">
            <div className="section-card">
              <div className="section-header">
                <h2>Team Members</h2>
                {isEditing && (
                  <button className="btn btn-sm btn-primary">+ Add Member</button>
                )}
              </div>
              
              <div className="team-grid">
                {teamMembers.map((member) => (
                  <div key={member.id} className="team-card">
                    <div className="member-avatar">
                      {member.name.charAt(0)}
                    </div>
                    <h3>{member.name}</h3>
                    <p className="member-role">{member.role}</p>
                    <p className="member-bio">{member.bio}</p>
                    <div className="member-actions">
                      <button className="btn btn-sm btn-outline">Edit</button>
                      <button className="btn btn-sm btn-outline">Delete</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default AboutManagement;

