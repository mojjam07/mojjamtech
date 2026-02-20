import { createContext, useContext, useState, useEffect } from 'react';

const SiteSettingsContext = createContext(null);

// Default hero images for each page
const defaultHeroImages = {
  home: '/techconf.png',
  services: '/robot.png',
  about: '/logo_brand.png',
  programs: '/program2.jpg',
  sponsorship: '/program1.jpg',
  contact: '/robot.png',
  gallery: '/mojjam.png'
};

export function SiteSettingsProvider({ children }) {
  // Load settings from localStorage or use defaults
  const [heroImages, setHeroImages] = useState(() => {
    try {
      const saved = localStorage.getItem('siteHeroImages');
      if (saved) {
        const parsed = JSON.parse(saved);
        // Validate that all required keys exist
        const requiredKeys = ['home', 'services', 'about', 'programs', 'sponsorship', 'contact', 'gallery'];
        const hasAllKeys = requiredKeys.every(key => key in parsed);
        if (hasAllKeys) {
          return parsed;
        }
      }
    } catch (e) {
      console.error('Error loading hero images from localStorage:', e);
    }
    return defaultHeroImages;
  });

  // Save to localStorage whenever heroImages changes
  useEffect(() => {
    localStorage.setItem('siteHeroImages', JSON.stringify(heroImages));
  }, [heroImages]);

  // Update a specific page's hero image
  const updateHeroImage = (page, imageUrl) => {
    setHeroImages(prev => ({
      ...prev,
      [page]: imageUrl
    }));
  };

  // Get hero image for a specific page
  const getHeroImage = (page) => {
    const image = heroImages[page];
    // If image is not set or is invalid, return default
    if (!image || typeof image !== 'string') {
      return defaultHeroImages[page];
    }
    return image;
  };

  // Reset to default images
  const resetToDefaults = () => {
    setHeroImages(defaultHeroImages);
  };

  const value = {
    heroImages,
    updateHeroImage,
    getHeroImage,
    resetToDefaults,
    defaultHeroImages
  };

  return (
    <SiteSettingsContext.Provider value={value}>
      {children}
    </SiteSettingsContext.Provider>
  );
}

export function useSiteSettings() {
  const context = useContext(SiteSettingsContext);
  if (!context) {
    throw new Error('useSiteSettings must be used within a SiteSettingsProvider');
  }
  return context;
}

export default SiteSettingsContext;

