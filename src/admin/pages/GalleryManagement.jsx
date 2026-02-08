import { useState } from 'react';
import Sidebar from '../components/Sidebar';
import './GalleryManagement.css';

function GalleryManagement() {
  const [galleryItems] = useState([
    {
      id: 1,
      title: 'Classroom Session',
      category: 'Training',
      image: '/gallery/classroom.jpg',
      date: '2024-01-15',
      status: 'Published',
      featured: true,
      description: 'Students during a React.js training session'
    },
    {
      id: 2,
      title: 'Hackathon Winners',
      category: 'Events',
      image: '/gallery/hackathon.jpg',
      date: '2024-01-10',
      status: 'Published',
      featured: true,
      description: 'Congratulations to our hackathon winning team'
    },
    {
      id: 3,
      title: 'Graduation Ceremony',
      category: 'Events',
      image: '/gallery/graduation.jpg',
      date: '2024-01-05',
      status: 'Published',
      featured: false,
      description: 'Class of 2024 graduation ceremony'
    },
    {
      id: 4,
      title: 'Industry Visit',
      category: 'Activities',
      image: '/gallery/industry.jpg',
      date: '2023-12-20',
      status: 'Published',
      featured: false,
      description: 'Students visiting a tech company'
    },
    {
      id: 5,
      title: 'Coding Workshop',
      category: 'Training',
      image: '/gallery/workshop.jpg',
      date: '2023-12-15',
      status: 'Published',
      featured: false,
      description: 'Weekend coding workshop for beginners'
    },
    {
      id: 6,
      title: 'Guest Lecture',
      category: 'Events',
      image: '/gallery/guest.jpg',
      date: '2023-12-10',
      status: 'Published',
      featured: false,
      description: 'Industry expert sharing insights'
    },
    {
      id: 7,
      title: 'Team Building',
      category: 'Activities',
      image: '/gallery/teambuilding.jpg',
      date: '2023-12-05',
      status: 'Published',
      featured: false,
      description: 'Annual team building event'
    },
    {
      id: 8,
      title: 'Project Showcase',
      category: 'Training',
      image: '/gallery/showcase.jpg',
      date: '2023-11-28',
      status: 'Published',
      featured: true,
      description: 'Students presenting their final projects'
    }
  ]);

  const [isEditing, setIsEditing] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [filter, setFilter] = useState('all');
  const [view, setView] = useState('grid');
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredItems = filter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category.toLowerCase() === filter);

  const categories = [...new Set(galleryItems.map(item => item.category))];

  const stats = {
    total: galleryItems.length,
    published: galleryItems.filter(i => i.status === 'Published').length,
    draft: galleryItems.filter(i => i.status === 'Draft').length,
    featured: galleryItems.filter(i => i.featured).length
  };

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
            <h1>Gallery Management</h1>
          </div>
          <div className="header-actions">
            <div className="view-toggle">
              <button 
                className={`view-btn ${view === 'grid' ? 'active' : ''}`}
                onClick={() => setView('grid')}
              >
                ⊞
              </button>
              <button 
                className={`view-btn ${view === 'list' ? 'active' : ''}`}
                onClick={() => setView('list')}
              >
                ≡
              </button>
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
              <div className="stat-card-admin">
                <div className="stat-icon">🖼️</div>
                <div className="stat-info">
                  <span className="stat-value">{stats.total}</span>
                  <span className="stat-label">Total Images</span>
                </div>
              </div>
              <div className="stat-card-admin stat-published">
                <div className="stat-icon">✅</div>
                <div className="stat-info">
                  <span className="stat-value">{stats.published}</span>
                  <span className="stat-label">Published</span>
                </div>
              </div>
              <div className="stat-card-admin stat-draft">
                <div className="stat-icon">📝</div>
                <div className="stat-info">
                  <span className="stat-value">{stats.draft}</span>
                  <span className="stat-label">Drafts</span>
                </div>
              </div>
              <div className="stat-card-admin stat-featured">
                <div className="stat-icon">⭐</div>
                <div className="stat-info">
                  <span className="stat-value">{stats.featured}</span>
                  <span className="stat-label">Featured</span>
                </div>
              </div>
            </div>
          </section>

          {/* Actions Bar */}
          <div className="actions-bar">
            <div className="filter-tabs">
              <button 
                className={`filter-tab ${filter === 'all' ? 'active' : ''}`}
                onClick={() => setFilter('all')}
              >
                All ({stats.total})
              </button>
              {categories.map(cat => (
                <button 
                  key={cat}
                  className={`filter-tab ${filter === cat.toLowerCase() ? 'active' : ''}`}
                  onClick={() => setFilter(cat.toLowerCase())}
                >
                  {cat} ({galleryItems.filter(i => i.category === cat).length})
                </button>
              ))}
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
                  + Upload Image
                </button>
              )}
            </div>
          </div>

          {/* Gallery Grid */}
          <section className="gallery-section">
            <div className={`gallery-container ${view}`}>
              {filteredItems.map((item) => (
                <div 
                  key={item.id} 
                  className={`gallery-item ${item.featured ? 'featured' : ''}`}
                  onClick={() => setSelectedImage(item)}
                >
                  <div className="item-image">
                    <div className="image-placeholder">
                      <span className="placeholder-icon">📷</span>
                    </div>
                    {item.featured && (
                      <span className="featured-badge">⭐ Featured</span>
                    )}
                    <div className="item-overlay">
                      <button className="overlay-btn">View</button>
                    </div>
                  </div>
                  <div className="item-body">
                    <h3>{item.title}</h3>
                    <div className="item-meta">
                      <span className="category-badge">{item.category}</span>
                      <span className={`status-badge status-${item.status.toLowerCase()}`}>
                        {item.status}
                      </span>
                    </div>
                    <p className="item-description">{item.description}</p>
                    <span className="item-date">{item.date}</span>
                  </div>
                  {isEditing && (
                    <div className="item-actions">
                      <button className="btn btn-sm btn-outline">Edit</button>
                      <button className="btn btn-sm btn-outline">Delete</button>
                      <button className="btn btn-sm btn-outline">
                        {item.featured ? 'Unfeature' : 'Feature'}
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Image Preview Modal */}
          {selectedImage && (
            <div className="image-modal" onClick={() => setSelectedImage(null)}>
              <div className="modal-content" onClick={e => e.stopPropagation()}>
                <button className="modal-close" onClick={() => setSelectedImage(null)}>✕</button>
                <div className="modal-image">
                  <div className="image-placeholder large">
                    <span className="placeholder-icon">📷</span>
                  </div>
                </div>
                <div className="modal-info">
                  <h2>{selectedImage.title}</h2>
                  <p className="modal-description">{selectedImage.description}</p>
                  <div className="modal-meta">
                    <span>Category: {selectedImage.category}</span>
                    <span>Date: {selectedImage.date}</span>
                    <span>Status: {selectedImage.status}</span>
                  </div>
                  <div className="modal-actions">
                    <button className="btn btn-outline">Edit Details</button>
                    <button className="btn btn-primary">Set as Featured</button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default GalleryManagement;

