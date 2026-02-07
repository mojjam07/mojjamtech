import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [openFaqId, setOpenFaqId] = useState(null);
  
  const faqs = [
    {
      id: 1,
      question: 'How do I apply for a program?',
      answer: 'Visit our Programs page, choose the program that interests you, and click the "Enroll Now" button to start your application.'
    },
    {
      id: 2,
      question: 'What are the prerequisites?',
      answer: 'Most programs require basic computer literacy and a passion for learning. Some advanced programs may require foundational programming knowledge.'
    },
    {
      id: 3,
      question: 'Do you offer scholarships?',
      answer: 'Yes! We offer scholarships for deserving students. Contact us to learn more about our scholarship opportunities.'
    },
    {
      id: 4,
      question: 'How can I become a sponsor?',
      answer: 'Visit our Sponsorship page to explore sponsorship options, or contact us directly to discuss custom partnership opportunities.'
    }
  ];
  
  const toggleFaq = (id) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };
  
  return (
    <div className="contact">
      {/* Page Header */}
      <section className="page-header">
        <div className="page-header-bg"></div>
        <div className="container">
          <div className="page-header-content">
            <h1 className="page-title fade-in">Contact Us</h1>
            <p className="page-subtitle fade-in">We'd love to hear from you. Get in touch with us.</p>
          </div>
        </div>
      </section>
      
      {/* Contact Content */}
      <section className="contact-content section">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Form */}
            <div className="contact-form-container fade-in">
              <h2>Send us a Message</h2>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message..."
                    rows="5"
                    required
                  ></textarea>
                </div>
                
                <button type="submit" className="btn btn-primary btn-lg btn-block">
                  Send Message
                </button>
              </form>
            </div>
            
            {/* Contact Info */}
            <div className="contact-info-container fade-in">
              <h2>Get in Touch</h2>
              <p className="contact-intro">
                Have questions about our programs, sponsorship opportunities, or want to partner with us? We're here to help.
              </p>
              
              {/* Service Inquiry Options */}
              <div className="service-inquiry-options">
                <h4>How can we help you?</h4>
                <div className="inquiry-options-grid">
                  <Link to="/services" className="inquiry-option">
                    <span className="inquiry-icon">💻</span>
                    <span>Tech Services</span>
                  </Link>
                  <Link to="/programs" className="inquiry-option">
                    <span className="inquiry-icon">📚</span>
                    <span>Training Programs</span>
                  </Link>
                  <Link to="/sponsorship" className="inquiry-option">
                    <span className="inquiry-icon">🤝</span>
                    <span>Sponsorship</span>
                  </Link>
                  <Link to="/contact" className="inquiry-option active">
                    <span className="inquiry-icon">💬</span>
                    <span>General Inquiry</span>
                  </Link>
                </div>
              </div>
              
              <div className="contact-info">
                <div className="contact-item">
                  <div className="contact-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="20" height="16" x="2" y="4" rx="2"/>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                    </svg>
                  </div>
                  <div className="contact-details">
                    <h4>Email</h4>
                    <a href="mailto:info@mojjamtechnologies.com">info@mojjamtechnologies.com</a>
                  </div>
                </div>
                
                <div className="contact-item">
                  <div className="contact-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                  </div>
                  <div className="contact-details">
                    <h4>Phone</h4>
                    <a href="tel:+1234567890">+1 (234) 567-890</a>
                  </div>
                </div>
                
                <div className="contact-item">
                  <div className="contact-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                  </div>
                  <div className="contact-details">
                    <h4>Address</h4>
                    <p>123 Tech Street, Innovation City, TC 12345</p>
                  </div>
                </div>
              </div>
              
              {/* Social Links */}
              <div className="social-section">
                <h4>Follow Us</h4>
                <div className="social-links">
                  <a href="#" className="social-link" aria-label="Facebook">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                    </svg>
                    Facebook
                  </a>
                  <a href="#" className="social-link" aria-label="Twitter">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                    Twitter
                  </a>
                  <a href="#" className="social-link" aria-label="LinkedIn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    LinkedIn
                  </a>
                  <a href="#" className="social-link" aria-label="Instagram">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                    </svg>
                    Instagram
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="faq-section section">
        <div className="container">
          <div className="section-title fade-in">
            <h2>Frequently Asked Questions</h2>
            <p>Quick answers to common questions</p>
          </div>
          <div className="faq-grid">
            {faqs.map((faq) => (
              <div 
                key={faq.id} 
                className={`faq-item fade-in ${openFaqId === faq.id ? 'open' : ''}`}
              >
                <button 
                  className="faq-question" 
                  onClick={() => toggleFaq(faq.id)}
                  aria-expanded={openFaqId === faq.id}
                >
                  <div className="faq-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"/>
                      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
                      <path d="M12 17h.01"/>
                    </svg>
                  </div>
                  <h4>{faq.question}</h4>
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="20" 
                    height="20" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    className="faq-chevron"
                  >
                    <path d="m6 9 6 6 6-6"/>
                  </svg>
                </button>
                <div 
                  className="faq-answer"
                  style={{ 
                    maxHeight: openFaqId === faq.id ? '200px' : '0',
                    opacity: openFaqId === faq.id ? 1 : 0,
                    paddingTop: openFaqId === faq.id ? 'var(--spacing-4)' : '0'
                  }}
                >
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;

