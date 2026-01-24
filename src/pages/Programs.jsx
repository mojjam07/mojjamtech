import './Programs.css';

function Programs() {
  const programs = [
    {
      id: 1,
      title: 'Frontend Development',
      duration: '3 months',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      outcome: 'Job-ready frontend developer',
      description: 'Master the fundamentals of web development and learn to build beautiful, responsive websites using modern frameworks and best practices.'
    },
    {
      id: 2,
      title: 'Backend Development',
      duration: '3 months',
      skills: ['Django', 'APIs', 'Databases'],
      outcome: 'Backend developer capable of building robust server-side applications',
      description: 'Learn server-side programming, database design, and API development to create powerful backend systems.'
    },
    {
      id: 3,
      title: 'Fullstack Development',
      duration: '6 months',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Django', 'APIs', 'Databases'],
      outcome: 'Complete fullstack developer ready for any challenge',
      description: 'Comprehensive program covering both frontend and backend technologies to become a versatile fullstack developer.'
    }
  ];

  return (
    <div className="programs">
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1>Training Programs</h1>
          <p>Choose the program that fits your career goals</p>
        </div>
      </section>
      
      {/* Programs List */}
      <section className="programs-list section">
        <div className="container">
          <div className="programs-grid">
            {programs.map((program) => (
              <div key={program.id} className="card program-card">
                <div className="program-header">
                  <h3>{program.title}</h3>
                  <span className="program-duration">{program.duration}</span>
                </div>
                <div className="card-body">
                  <p className="program-description">{program.description}</p>
                  
                  <div className="program-skills">
                    <h4>Skills You'll Learn:</h4>
                    <div className="skills-tags">
                      {program.skills.map((skill, index) => (
                        <span key={index} className="skill-tag">{skill}</span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="program-outcome">
                    <h4>Outcome:</h4>
                    <p>{program.outcome}</p>
                  </div>
                  
                  <button className="btn btn-primary btn-block">Enroll Now</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Program Features */}
      <section className="program-features section">
        <div className="container">
          <div className="section-title">
            <h2>Why Choose Our Programs?</h2>
            <p>What makes our training stand out</p>
          </div>
          <div className="grid grid-4">
            <div className="feature-item">
              <div className="feature-icon">👨‍🏫</div>
              <h4>Expert Instructors</h4>
              <p>Learn from industry professionals with years of experience</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">💻</div>
              <h4>Hands-on Projects</h4>
              <p>Build real-world projects to build your portfolio</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">👥</div>
              <h4>Mentorship</h4>
              <p>Get guidance and feedback from experienced mentors</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">🎯</div>
              <h4>Career Support</h4>
              <p>Resume reviews, interview prep, and job placement assistance</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="programs-cta section">
        <div className="container">
          <div className="cta-content">
            <h2>Not Sure Which Program to Choose?</h2>
            <p>Our team can help you find the right path based on your goals and experience level.</p>
            <button className="btn btn-secondary btn-lg">Schedule a Consultation</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Programs;

