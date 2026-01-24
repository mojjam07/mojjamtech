import { useState } from 'react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
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
        <div className="container">
          <h1>Contact Us</h1>
          <p>We'd love to hear from you. Get in touch with us.</p>
        </div>
      </section>
      
      {/* Contact Content */}
      <section className="contact-content section">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Form */}
            <div className="contact-form-container">
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
            <div className="contact-info-container">
              <h2>Get in Touch</h2>
              <p className="contact-intro">
                Have questions about our programs, sponsorship opportunities, or want to partner with us? We're here to help.
              </p>
              
              <div className="contact-info">
                <div className="contact-item">
                  <div className="contact-icon">📧</div>
                  <div className="contact-details">
                    <h4>Email</h4>
                    <a href="mailto:info@mojjamtechnologies.com">info@mojjamtechnologies.com</a>
                  </div>
                </div>
                
                <div className="contact-item">
                  <div className="contact-icon">📱</div>
                  <div className="contact-details">
                    <h4>Phone</h4>
                    <a href="tel:+1234567890">+1 (234) 567-890</a>
                  </div>
                </div>
                
                <div className="contact-item">
                  <div className="contact-icon">📍</div>
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
                    <span className="social-icon">📘</span>
                    Facebook
                  </a>
                  <a href="#" className="social-link" aria-label="Twitter">
                    <span className="social-icon">🐦</span>
                    Twitter
                  </a>
                  <a href="#" className="social-link" aria-label="LinkedIn">
                    <span className="social-icon">💼</span>
                    LinkedIn
                  </a>
                  <a href="#" className="social-link" aria-label="Instagram">
                    <span className="social-icon">📷</span>
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
          <div className="section-title">
            <h2>Frequently Asked Questions</h2>
            <p>Quick answers to common questions</p>
          </div>
          <div className="faq-grid">
            <div className="faq-item">
              <h4>How do I apply for a program?</h4>
              <p>Visit our Programs page, choose the program that interests you, and click the "Enroll Now" button to start your application.</p>
            </div>
            <div className="faq-item">
              <h4>What are the prerequisites?</h4>
              <p>Most programs require basic computer literacy and a passion for learning. Some advanced programs may require foundational programming knowledge.</p>
            </div>
            <div className="faq-item">
              <h4>Do you offer scholarships?</h4>
              <p>Yes! We offer scholarships for deserving students. Contact us to learn more about our scholarship opportunities.</p>
            </div>
            <div className="faq-item">
              <h4>How can I become a sponsor?</h4>
              <p>Visit our Sponsorship page to explore sponsorship options, or contact us directly to discuss custom partnership opportunities.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;

