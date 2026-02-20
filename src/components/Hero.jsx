import { useSiteSettings } from '../contexts/SiteSettingsContext';

/**
 * Hero component that renders a hero section with dynamic background image
 * @param {string} pageKey - The page identifier (home, services, about, programs, sponsorship, contact, gallery)
 * @param {object} props - Additional props passed to the section
 * @param {React.ReactNode} props.children - Content to render inside the hero
 */
function Hero({ pageKey, children, className = '', style = {}, ...props }) {
  const { getHeroImage } = useSiteSettings();
  const heroImage = getHeroImage(pageKey);
  
  const heroStyle = {
    ...style,
    backgroundImage: heroImage 
      ? `linear-gradient(135deg, rgba(102, 126, 234, 0.9) 0%, rgba(118, 75, 162, 0.9) 100%), url('${heroImage}')`
      : 'linear-gradient(135deg, rgba(102, 126, 234, 0.9) 0%, rgba(118, 75, 162, 0.9) 100%)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  };

  return (
    <section 
      className={`hero ${className}`} 
      style={heroStyle}
      {...props}
    >
      {children}
    </section>
  );
}

/**
 * PageHeader component for pages that use the .page-header class
 * @param {string} pageKey - The page identifier
 * @param {object} props - Additional props passed to the section
 * @param {React.ReactNode} props.children - Content to render inside
 */
function PageHeader({ pageKey, children, className = '', style = {}, ...props }) {
  const { getHeroImage } = useSiteSettings();
  const heroImage = getHeroImage(pageKey);
  
  const headerStyle = {
    ...style,
    backgroundImage: heroImage 
      ? `linear-gradient(135deg, rgba(102, 126, 234, 0.9) 0%, rgba(118, 75, 162, 0.9) 100%), url('${heroImage}')`
      : 'linear-gradient(135deg, rgba(102, 126, 234, 0.9) 0%, rgba(118, 75, 162, 0.9) 100%)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  };

  return (
    <section 
      className={`page-header ${className}`} 
      style={headerStyle}
      {...props}
    >
      {children}
    </section>
  );
}

export { Hero, PageHeader };
export default Hero;

