import { useState } from 'react';
import Sidebar from '../components/Sidebar';
import './ContactManagement.css';

function ContactManagement() {
  const [messages] = useState([
    {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      subject: 'Inquiry about Web Development Program',
      message: 'I am interested in joining your web development program. Could you please provide more details about the curriculum, schedule, and fees?',
      phone: '+1 234 567 890',
      date: '2024-01-15',
      status: 'New',
      priority: 'High'
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane@company.com',
      subject: 'Corporate Training Partnership',
      message: 'Our company is looking to partner with MOJJAM TECHNOLOGIES for employee training. We would like to discuss a corporate partnership.',
      phone: '+1 234 567 891',
      date: '2024-01-14',
      status: 'Read',
      priority: 'High'
    },
    {
      id: 3,
      name: 'Mike Johnson',
      email: 'mike@startup.io',
      subject: 'Sponsorship Opportunity',
      message: 'We are interested in sponsoring your upcoming tech event. Please share the sponsorship packages and benefits.',
      phone: '+1 234 567 892',
      date: '2024-01-13',
      status: 'Replied',
      priority: 'Medium'
    },
    {
      id: 4,
      name: 'Sarah Williams',
      email: 'sarah@mail.com',
      subject: 'Scholarship Information',
      message: 'I would like to know if you offer any scholarships for the data science program. I am a recent graduate with financial constraints.',
      phone: '+1 234 567 893',
      date: '2024-01-12',
      status: 'New',
      priority: 'Medium'
    },
    {
      id: 5,
      name: 'Tom Brown',
      email: 'tom@tech.org',
      subject: 'Career Counseling Request',
      message: 'I would like to schedule a career counseling session to understand which programming path suits me best.',
      phone: '+1 234 567 894',
      date: '2024-01-11',
      status: 'Read',
      priority: 'Low'
    },
    {
      id: 6,
      name: 'Emily Davis',
      email: 'emily@edu.net',
      subject: 'Placement Assistance',
      message: 'Can you provide information about your placement assistance services and the companies that hire your graduates?',
      phone: '+1 234 567 895',
      date: '2024-01-10',
      status: 'Replied',
      priority: 'Low'
    }
  ]);

  const [isEditing, setIsEditing] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [filter, setFilter] = useState('all');
  const [selectedMessage, setSelectedMessage] = useState(null);

  const filteredMessages = filter === 'all' 
    ? messages 
    : messages.filter(m => m.status.toLowerCase() === filter);

  const stats = {
    total: messages.length,
    new: messages.filter(m => m.status === 'New').length,
    read: messages.filter(m => m.status === 'Read').length,
    replied: messages.filter(m => m.status === 'Replied').length
  };

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
            <h1>Contact Messages</h1>
          </div>
          <div className="admin-user">
            <span className="user-name">Admin User</span>
            <div className="user-avatar">A</div>
          </div>
        </header>
        
        <div className="admin-content">
          {/* Stats Bar */}
          <section className="stats-section">
            <div className="stats-grid">
              <div className="stat-card-admin">
                <div className="stat-icon">📬</div>
                <div className="stat-info">
                  <span className="stat-value">{stats.total}</span>
                  <span className="stat-label">Total Messages</span>
                </div>
              </div>
              <div className="stat-card-admin stat-new">
                <div className="stat-icon">📩</div>
                <div className="stat-info">
                  <span className="stat-value">{stats.new}</span>
                  <span className="stat-label">New</span>
                </div>
              </div>
              <div className="stat-card-admin stat-read">
                <div className="stat-icon">👁️</div>
                <div className="stat-info">
                  <span className="stat-value">{stats.read}</span>
                  <span className="stat-label">Read</span>
                </div>
              </div>
              <div className="stat-card-admin stat-replied">
                <div className="stat-icon">✅</div>
                <div className="stat-info">
                  <span className="stat-value">{stats.replied}</span>
                  <span className="stat-label">Replied</span>
                </div>
              </div>
            </div>
          </section>

          {/* Filter Tabs */}
          <div className="filter-tabs">
            <button 
              className={`filter-tab ${filter === 'all' ? 'active' : ''}`}
              onClick={() => setFilter('all')}
            >
              All ({stats.total})
            </button>
            <button 
              className={`filter-tab ${filter === 'new' ? 'active' : ''}`}
              onClick={() => setFilter('new')}
            >
              New ({stats.new})
            </button>
            <button 
              className={`filter-tab ${filter === 'read' ? 'active' : ''}`}
              onClick={() => setFilter('read')}
            >
              Read ({stats.read})
            </button>
            <button 
              className={`filter-tab ${filter === 'replied' ? 'active' : ''}`}
              onClick={() => setFilter('replied')}
            >
              Replied ({stats.replied})
            </button>
          </div>

          {/* Messages Section */}
          <section className="messages-section">
            <div className="messages-container">
              {/* Messages List */}
              <div className="messages-list">
                {filteredMessages.map((message) => (
                  <div 
                    key={message.id} 
                    className={`message-card ${selectedMessage?.id === message.id ? 'selected' : ''} ${message.status.toLowerCase()}`}
                    onClick={() => setSelectedMessage(message)}
                  >
                    <div className="message-header">
                      <div className="message-avatar">
                        {message.name.charAt(0)}
                      </div>
                      <div className="message-meta">
                        <h4>{message.name}</h4>
                        <span className="message-date">{message.date}</span>
                      </div>
                      <span className={`priority-badge ${message.priority.toLowerCase()}`}>
                        {message.priority}
                      </span>
                    </div>
                    <div className="message-subject">{message.subject}</div>
                    <div className="message-preview">
                      {message.message.substring(0, 80)}...
                    </div>
                    <div className="message-footer">
                      <span className={`status-badge status-${message.status.toLowerCase()}`}>
                        {message.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Message Detail */}
              <div className="message-detail">
                {selectedMessage ? (
                  <>
                    <div className="detail-header">
                      <h3>{selectedMessage.subject}</h3>
                      <div className="detail-actions">
                        <button className="btn btn-sm btn-outline">Reply</button>
                        <button className="btn btn-sm btn-outline">Mark Read</button>
                        <button className="btn btn-sm btn-outline">Delete</button>
                      </div>
                    </div>
                    
                    <div className="detail-info">
                      <div className="info-row">
                        <span className="info-label">From</span>
                        <span className="info-value">{selectedMessage.name}</span>
                      </div>
                      <div className="info-row">
                        <span className="info-label">Email</span>
                        <span className="info-value">{selectedMessage.email}</span>
                      </div>
                      <div className="info-row">
                        <span className="info-label">Phone</span>
                        <span className="info-value">{selectedMessage.phone}</span>
                      </div>
                      <div className="info-row">
                        <span className="info-label">Date</span>
                        <span className="info-value">{selectedMessage.date}</span>
                      </div>
                      <div className="info-row">
                        <span className="info-label">Priority</span>
                        <span className={`priority-badge ${selectedMessage.priority.toLowerCase()}`}>
                          {selectedMessage.priority}
                        </span>
                      </div>
                    </div>
                    
                    <div className="detail-message">
                      <h4>Message</h4>
                      <p>{selectedMessage.message}</p>
                    </div>
                    
                    <div className="detail-reply">
                      <h4>Quick Reply</h4>
                      <textarea 
                        placeholder="Type your reply..."
                        rows="4"
                      />
                      <div className="reply-actions">
                        <button className="btn btn-primary">Send Reply</button>
                        <button className="btn btn-outline">Save Draft</button>
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="no-selection">
                    <span className="no-selection-icon">📧</span>
                    <p>Select a message to view details</p>
                  </div>
                )}
              </div>
            </div>
          </section>

          {/* Contact Info Management */}
          <section className="info-section">
            <div className="section-card">
              <div className="section-header">
                <h2>Contact Information</h2>
                <button 
                  className={`btn ${isEditing ? 'btn-primary' : 'btn-outline'}`}
                  onClick={() => setIsEditing(!isEditing)}
                >
                  {isEditing ? 'Done' : 'Edit'}
                </button>
              </div>
              
              <div className="contact-info-grid">
                <div className="info-item">
                  <label>Email Address</label>
                  {isEditing ? (
                    <input type="email" defaultValue="info@mojjamtechnologies.com" />
                  ) : (
                    <p>info@mojjamtechnologies.com</p>
                  )}
                </div>
                <div className="info-item">
                  <label>Phone Number</label>
                  {isEditing ? (
                    <input type="tel" defaultValue="+1 234 567 8900" />
                  ) : (
                    <p>+1 234 567 8900</p>
                  )}
                </div>
                <div className="info-item">
                  <label>Address</label>
                  {isEditing ? (
                    <input type="text" defaultValue="123 Tech Street, Innovation City" />
                  ) : (
                    <p>123 Tech Street, Innovation City</p>
                  )}
                </div>
                <div className="info-item">
                  <label>Business Hours</label>
                  {isEditing ? (
                    <input type="text" defaultValue="Mon-Fri: 9AM - 6PM" />
                  ) : (
                    <p>Mon-Fri: 9AM - 6PM</p>
                  )}
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default ContactManagement;

