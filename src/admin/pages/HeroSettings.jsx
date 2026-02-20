import { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import { useSiteSettings } from '../../contexts/SiteSettingsContext';
import './HeroSettings.css';

// List of available images in the public folder
const availableImages = [
  { value: '/techconf.png', label: 'Tech Conference' },
  { value: '/robot.png', label: 'Robot' },
  { value: '/code.jpeg', label: 'Code' },
  { value: '/mojjam.png', label: 'Mojjam Logo' },
  { value: '/logo_brand.png', label: 'Brand Logo' },
  { value: '/program1.jpg', label: 'Program 1' },
  { value: '/program2.jpg', label: 'Program 2' },
  { value: '/whitebg.png', label: 'White Background' },
  { value: '', label: 'No Image (Gradient Only)' }
];

const pageNames = [
  { key: 'home', label: 'Home Page' },
  { key: 'services', label: 'Services Page' },
  { key: 'about', label: 'About Page' },
  { key: 'programs', label: 'Programs Page' },
  { key: 'sponsorship', label: 'Sponsorship Page' },
  { key: 'contact', label: 'Contact Page' },
  { key: 'gallery', label: 'Gallery Page' }
];

function HeroSettings() {
  const { heroImages, updateHeroImage, resetToDefaults } = useSiteSettings();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [saved, setSaved] = useState(false);

  // Handle body scroll lock when sidebar is open on mobile
  useEffect(() => {
    if (sidebarOpen) {
      document.body.classList.add('sidebar-open');
    } else {
      document.body.classList.remove('sidebar-open');
    }
    return () => {
      document.body.classList.remove('sidebar-open');
    };
  }, [sidebarOpen]);

  const handleImageChange = (page, imageUrl) => {
    updateHeroImage(page, imageUrl);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const handleReset = () => {
    if (window.confirm('Are you sure you want to reset all hero images to defaults?')) {
      resetToDefaults();
      setSaved(true);
      setTimeout(() => setSaved(false), 2000);
    }
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
            <h1>Hero Background Settings</h1>
          </div>
          <div className="header-actions">
            {saved && <span className="save-notification">✓ Settings saved!</span>}
            <button className="btn btn-outline" onClick={handleReset}>
              Reset to Defaults
            </button>
            <div className="admin-user">
              <span className="user-name">Admin User</span>
              <div className="user-avatar">A</div>
            </div>
          </div>
        </header>
        
        <div className="admin-content">
          <div className="hero-settings-intro">
            <p>Customize the hero background image for each page. Changes are saved automatically and will appear immediately on the live site.</p>
          </div>

          <div className="hero-settings-grid">
            {pageNames.map((page) => (
              <div key={page.key} className="hero-setting-card">
                <div className="hero-setting-header">
                  <h3>{page.label}</h3>
                </div>
                
                <div className="hero-setting-preview">
                  <div 
                    className="preview-image"
                    style={{
                      backgroundImage: heroImages[page.key] 
                        ? `url(${heroImages[page.key]})` 
                        : 'none'
                    }}
                  >
                    {!heroImages[page.key] && (
                      <span className="no-image-text">Gradient Only</span>
                    )}
                  </div>
                </div>
                
                <div className="hero-setting-select">
                  <label htmlFor={`hero-${page.key}`}>Select Background Image:</label>
                  <select
                    id={`hero-${page.key}`}
                    value={heroImages[page.key] || ''}
                    onChange={(e) => handleImageChange(page.key, e.target.value)}
                  >
                    {availableImages.map((img) => (
                      <option key={img.value} value={img.value}>
                        {img.label}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div className="hero-setting-current">
                  <span className="current-label">Current:</span>
                  <span className="current-value">
                    {availableImages.find(img => img.value === heroImages[page.key])?.label || 'Default'}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="hero-settings-info">
            <h3>💡 Tips</h3>
            <ul>
              <li>Recommended image size: 1920x1080 pixels for best results</li>
              <li>Images will be automatically scaled to cover the hero area</li>
              <li>A dark gradient overlay is applied to ensure text remains readable</li>
              <li>You can also upload custom images to the public folder via FTP/SSH</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}

export default HeroSettings;

