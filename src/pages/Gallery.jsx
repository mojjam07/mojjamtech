import './Gallery.css';

function Gallery() {
  const albums = [
    {
      id: 1,
      title: 'Training Sessions',
      description: 'Hands-on training sessions where trainees learn the latest technologies.',
      images: [
        {
          id: 1,
          src: '/logo.png',
          alt: 'Training Session 1',
          description: 'Introduction to React development with live coding examples.'
        },
        {
          id: 2,
          src: '/logo1.png',
          alt: 'Training Session 2',
          description: 'Backend development workshop focusing on Node.js and databases.'
        },
        {
          id: 3,
          src: '/logo2.png',
          alt: 'Training Session 3',
          description: 'Full-stack project building with modern frameworks.'
        }
      ]
    },
    {
      id: 2,
      title: 'Events',
      description: 'Community events, hackathons, and networking gatherings.',
      images: [
        {
          id: 4,
          src: '/logo_brand.png',
          alt: 'Event 1',
          description: 'Annual tech conference with industry speakers and workshops.'
        },
        {
          id: 5,
          src: '/vite.svg',
          alt: 'Event 2',
          description: 'Hackathon event where teams build innovative solutions.'
        }
      ]
    },
    {
      id: 3,
      title: 'Projects',
      description: 'Showcase of completed projects by our trainees and team.',
      images: [
        {
          id: 6,
          src: '/mojjam.png',
          alt: 'Project 1',
          description: 'E-commerce platform built with React and Node.js.',
          demoUrl: 'https://demo.example.com/ecommerce'
        },
        {
          id: 7,
          src: '/logo.png',
          alt: 'Project 2',
          description: 'Mobile app for task management using React Native.',
          demoUrl: 'https://demo.example.com/taskmanager'
        }
      ]
    }
  ];

  return (
    <div className="gallery">
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <div className="page-header-content">
            <h1 className="page-title fade-in">Gallery</h1>
            <p className="page-subtitle fade-in">Explore our training sessions, events, and projects through images.</p>
          </div>
        </div>
      </section>

      {/* Gallery Content */}
      <section className="gallery-content section">
        <div className="container">
          {albums.map(album => (
            <div key={album.id} className="album-section">
              <div className="album-header">
                <h2 className="album-title">{album.title}</h2>
                <p className="album-description">{album.description}</p>
              </div>
              <div className="album-grid">
                {album.images.map(image => (
                  <div key={image.id} className="gallery-item">
                    <div className="gallery-image-container">
                      <img src={image.src} alt={image.alt} className="gallery-image" />
                      <div className="gallery-overlay">
                        <p className="gallery-description">{image.description}</p>
                        {image.demoUrl && (
                          <a 
                            href={image.demoUrl} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="live-demo-link"
                          >
                            Live Demo
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Gallery;
