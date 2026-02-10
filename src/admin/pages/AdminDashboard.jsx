import { useState } from 'react';
import Sidebar from '../components/Sidebar';
import './AdminDashboard.css';

function AdminDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [timeRange, setTimeRange] = useState('week');

  const stats = [
    { label: 'Total Trainees', value: 120, icon: '👨‍🎓', color: 'blue', change: '+12%' },
    { label: 'Active Programs', value: 5, icon: '📚', color: 'green', change: '+2' },
    { label: 'Sponsors', value: 4, icon: '🤝', color: 'purple', change: '+1' },
    { label: 'Graduates', value: 45, icon: '🎓', color: 'orange', change: '+8' },
    { label: 'New Messages', value: 12, icon: '📬', color: 'red', change: '+5' },
    { label: 'Active Sessions', value: 28, icon: '💻', color: 'cyan', change: '+15' }
  ];

  const recentTrainees = [
    { id: 1, name: 'John Doe', email: 'john@example.com', program: 'Frontend', status: 'Ongoing', date: '2024-01-15' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', program: 'Backend', status: 'Ongoing', date: '2024-01-14' },
    { id: 3, name: 'Mike Johnson', email: 'mike@example.com', program: 'Fullstack', status: 'Completed', date: '2024-01-13' },
    { id: 4, name: 'Sarah Williams', email: 'sarah@example.com', program: 'Frontend', status: 'Ongoing', date: '2024-01-12' },
    { id: 5, name: 'Tom Brown', email: 'tom@example.com', program: 'Backend', status: 'Ongoing', date: '2024-01-11' }
  ];

  const recentActivity = [
    { id: 1, type: 'enrollment', message: 'New enrollment: John Doe joined Frontend Development', time: '2 hours ago', icon: '👨‍🎓' },
    { id: 2, type: 'program', message: 'New program added: Blockchain Development', time: '5 hours ago', icon: '📚' },
    { id: 3, type: 'sponsor', message: 'New sponsor joined: TechCorp International', time: '1 day ago', icon: '🤝' },
    { id: 4, type: 'graduate', message: '3 trainees completed their programs', time: '2 days ago', icon: '🎓' },
    { id: 5, type: 'message', message: 'New contact message from Jane Smith', time: '3 days ago', icon: '📧' }
  ];

  const quickActions = [
    { label: 'Add Trainee', icon: '➕', link: '/admin/trainees', color: 'blue' },
    { label: 'Add Program', icon: '📖', link: '/admin/programs', color: 'green' },
    { label: 'Edit About', icon: 'ℹ️', link: '/admin/about', color: 'purple' },
    { label: 'Manage Services', icon: '🛠️', link: '/admin/services', color: 'orange' },
    { label: 'View Messages', icon: '📬', link: '/admin/contact', color: 'red' },
    { label: 'Update Gallery', icon: '🖼️', link: '/admin/gallery', color: 'cyan' }
  ];

  const upcomingEvents = [
    { id: 1, title: 'Hackathon 2024', date: '2024-02-01', type: 'Event' },
    { id: 2, title: 'Graduation Ceremony', date: '2024-02-15', type: 'Event' },
    { id: 3, title: 'Industry Visit', date: '2024-02-20', type: 'Activity' }
  ];

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
            <h1>Dashboard Overview</h1>
          </div>
          <div className="header-right">
            <div className="time-filter">
              <select value={timeRange} onChange={(e) => setTimeRange(e.target.value)}>
                <option value="today">Today</option>
                <option value="week">This Week</option>
                <option value="month">This Month</option>
                <option value="year">This Year</option>
              </select>
            </div>
            <div className="admin-user">
              <span className="user-name">Admin User</span>
              <div className="user-avatar">A</div>
            </div>
          </div>
        </header>
        
        <div className="admin-content">
          {/* Stats Section */}
          <section className="stats-section">
            <div className="stats-grid">
              {stats.map((stat, index) => (
                <div key={index} className={`stat-card stat-${stat.color}`}>
                  <div className="stat-icon">{stat.icon}</div>
                  <div className="stat-info">
                    <span className="stat-value">{stat.value}</span>
                    <span className="stat-label">{stat.label}</span>
                    <span className={`stat-change ${stat.change.startsWith('+') ? 'positive' : 'negative'}`}>
                      {stat.change} this {timeRange}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Quick Actions Section */}
          <section className="quick-actions-section">
            <h2>Quick Actions</h2>
            <div className="quick-actions-grid">
              {quickActions.map((action, index) => (
                <a key={index} href={action.link} className={`quick-action-card action-${action.color}`}>
                  <span className="action-icon">{action.icon}</span>
                  <span className="action-label">{action.label}</span>
                </a>
              ))}
            </div>
          </section>

          {/* Main Content Grid */}
          <div className="dashboard-grid">
            {/* Recent Trainees */}
            <section className="recent-section">
              <div className="section-header">
                <h2>Recent Trainees</h2>
                <a href="/admin/trainees" className="view-all-link">View All →</a>
              </div>
              
              <div className="table-container">
                <table className="data-table">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Program</th>
                      <th>Status</th>
                      <th>Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentTrainees.map((trainee) => (
                      <tr key={trainee.id}>
                        <td>
                          <div className="trainee-info">
                            <div className="trainee-avatar">{trainee.name.charAt(0)}</div>
                            <div className="trainee-details">
                              <span className="trainee-name">{trainee.name}</span>
                              <span className="trainee-email">{trainee.email}</span>
                            </div>
                          </div>
                        </td>
                        <td>{trainee.program}</td>
                        <td>
                          <span className={`status-badge status-${trainee.status.toLowerCase()}`}>
                            {trainee.status}
                          </span>
                        </td>
                        <td className="date-cell">{trainee.date}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Activity Feed */}
            <section className="activity-section">
              <div className="section-header">
                <h2>Recent Activity</h2>
                <span className="activity-badge">Live</span>
              </div>
              
              <div className="activity-feed">
                {recentActivity.map((activity) => (
                  <div key={activity.id} className="activity-item">
                    <div className="activity-icon">{activity.icon}</div>
                    <div className="activity-content">
                      <p>{activity.message}</p>
                      <span className="activity-time">{activity.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Bottom Grid */}
          <div className="bottom-grid">
            {/* Upcoming Events */}
            <section className="events-section">
              <div className="section-header">
                <h2>Upcoming Events</h2>
                <button className="btn btn-sm btn-outline">+ Add Event</button>
              </div>
              
              <div className="events-list">
                {upcomingEvents.map((event) => (
                  <div key={event.id} className="event-card">
                    <div className="event-date">
                      <span className="date-day">{new Date(event.date).getDate()}</span>
                      <span className="date-month">{new Date(event.date).toLocaleString('default', { month: 'short' })}</span>
                    </div>
                    <div className="event-info">
                      <h4>{event.title}</h4>
                      <span className="event-type">{event.type}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Program Overview */}
            <section className="programs-overview-section">
              <div className="section-header">
                <h2>Program Overview</h2>
                <a href="/admin/programs" className="view-all-link">Manage →</a>
              </div>
              
              <div className="programs-list">
                <div className="program-item">
                  <div className="program-info">
                    <h4>Frontend Development</h4>
                    <span className="program-count">30 trainees</span>
                  </div>
                  <div className="program-progress">
                    <div className="progress-bar">
                      <div className="progress-fill" style={{ width: '75%' }}></div>
                    </div>
                    <span className="progress-text">75% enrolled</span>
                  </div>
                </div>
                <div className="program-item">
                  <div className="program-info">
                    <h4>Backend Development</h4>
                    <span className="program-count">25 trainees</span>
                  </div>
                  <div className="program-progress">
                    <div className="progress-bar">
                      <div className="progress-fill" style={{ width: '60%' }}></div>
                    </div>
                    <span className="progress-text">60% enrolled</span>
                  </div>
                </div>
                <div className="program-item">
                  <div className="program-info">
                    <h4>Fullstack Development</h4>
                    <span className="program-count">20 trainees</span>
                  </div>
                  <div className="program-progress">
                    <div className="progress-bar">
                      <div className="progress-fill" style={{ width: '45%' }}></div>
                    </div>
                    <span className="progress-text">45% enrolled</span>
                  </div>
                </div>
                <div className="program-item">
                  <div className="program-info">
                    <h4>Data Science</h4>
                    <span className="program-count">15 trainees</span>
                  </div>
                  <div className="program-progress">
                    <div className="progress-bar">
                      <div className="progress-fill" style={{ width: '30%' }}></div>
                    </div>
                    <span className="progress-text">30% enrolled</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Sponsors Section */}
            <section className="sponsors-overview-section">
              <div className="section-header">
                <h2>Our Sponsors</h2>
                <a href="/admin/sponsorship" className="view-all-link">Manage →</a>
              </div>
              
              <div className="sponsors-mini-grid">
                <div className="sponsor-mini-card tier-platinum">
                  <span className="sponsor-icon">💎</span>
                  <span className="sponsor-name">TechCorp</span>
                  <span className="sponsor-tier">Platinum</span>
                </div>
                <div className="sponsor-mini-card tier-gold">
                  <span className="sponsor-icon">🥇</span>
                  <span className="sponsor-name">Innovation Labs</span>
                  <span className="sponsor-tier">Gold</span>
                </div>
                <div className="sponsor-mini-card tier-gold">
                  <span className="sponsor-icon">🥇</span>
                  <span className="sponsor-name">CloudServe</span>
                  <span className="sponsor-tier">Gold</span>
                </div>
                <div className="sponsor-mini-card tier-silver">
                  <span className="sponsor-icon">🥈</span>
                  <span className="sponsor-name">DevTools</span>
                  <span className="sponsor-tier">Silver</span>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}

export default AdminDashboard;

