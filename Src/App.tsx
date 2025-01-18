import { useState } from 'react'

function App() {
  const [activeSection, setActiveSection] = useState('home')

  const projects = [
    {
      title: 'Interactive Web Application',
      description: 'Developed a dynamic web platform using HTML, CSS, JavaScript, and MySQL to manage real-time data. Integrated responsive design techniques, improving compatibility across devices by 40%.',
      tags: ['HTML', 'CSS', 'JavaScript', 'MySQL'],
    },
    {
      title: 'Cybersecurity Implementation Framework',
      description: 'Implemented a secure authentication framework and encrypted sensitive data to enhance application security. Collaborated with a team to conduct penetration testing and vulnerability assessments, mitigating 95% of potential threats.',
      tags: ['Security', 'Authentication', 'Penetration Testing'],
    }
  ]

  const skills = [
    {
      name: 'Programming Languages',
      description: 'Java, Python, C++',
      icon: '💻',
    },
    {
      name: 'Web Development',
      description: 'HTML, CSS, JavaScript, MERN Stack',
      icon: '🌐',
    },
    {
      name: 'Tools & Platforms',
      description: 'Eclipse, VS Code, GitHub, Azure DevOps',
      icon: '⚙️',
    },
    {
      name: 'Database',
      description: 'MySQL, MongoDB',
      icon: '🗄️',
    },
    {
      name: 'Other Skills',
      description: 'REST APIs, Agile Methodologies, Software Debugging',
      icon: '🔧',
    },
    {
      name: 'Languages',
      description: 'Telugu, English, Hindi, Tamil',
      icon: '🌍',
    }
  ]

  return (
    <>
      <nav className="nav">
        <div className="container nav-content">
          <div className="nav-logo">Lokanadham K</div>
          <div className="nav-links">
            <a href="#home" className="nav-link" onClick={() => setActiveSection('home')}>
              Home
            </a>
            <a href="#projects" className="nav-link" onClick={() => setActiveSection('projects')}>
              Projects
            </a>
            <a href="#skills" className="nav-link" onClick={() => setActiveSection('skills')}>
              Skills
            </a>
            <a href="#contact" className="nav-link" onClick={() => setActiveSection('contact')}>
              Contact
            </a>
          </div>
        </div>
      </nav>

      <section id="home" className="section hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Hi, I'm Lokanadham K</h1>
            <h2 className="hero-subtitle">Computer Science Engineering Student</h2>
            <p className="hero-description">
              Motivated and detail-oriented Computer Science Engineering graduate with expertise in Java, Python, and web development. 
              Skilled in creating dynamic applications, optimizing performance, and implementing secure frameworks. 
              Currently pursuing B.Tech in CSE at Vemu Institute of Technology with a CGPA of 8.3/10.
            </p>
            <div className="social-links">
              <a href="https://www.linkedin.com/in/k-lokanadham" target="_blank" rel="noopener noreferrer" className="button">LinkedIn</a>
              <a href="https://github.com/lokanadhamk" target="_blank" rel="noopener noreferrer" className="button">GitHub</a>
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="section">
        <div className="container">
          <h2 className="hero-subtitle">Experience</h2>
          <div className="experience-card">
            <h3 className="project-title">Java Developer Intern</h3>
            <p className="company">Slash Mark (Online/Remote)</p>
            <p className="duration">May 2024 - July 2024</p>
            <ul className="experience-list">
              <li>Debugged and optimized code to enhance web application performance by 20%</li>
              <li>Reviewed and resolved software errors, ensuring 99% system efficiency</li>
              <li>Improved website load times by optimizing web assets and resources</li>
              <li>Provided remote customer support using an e-ticketing system, resolving 95% of client issues within SLA</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="projects" className="section">
        <div className="container">
          <h2 className="hero-subtitle">Featured Projects</h2>
          <div className="projects">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tags">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="section">
        <div className="container">
          <h2 className="hero-subtitle">Skills & Expertise</h2>
          <div className="skills">
            {skills.map((skill, index) => (
              <div key={index} className="skill-card">
                <div className="skill-icon">{skill.icon}</div>
                <h3 className="project-title">{skill.name}</h3>
                <p className="project-description">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="achievements" className="section">
        <div className="container">
          <h2 className="hero-subtitle">Achievements</h2>
          <div className="achievements-list">
            <div className="achievement-item">
              <span className="achievement-icon">🏆</span>
              <p>Earned Cybersecurity Certification from Google</p>
            </div>
            <div className="achievement-item">
              <span className="achievement-icon">🎓</span>
              <p>Awarded AI Certification by Google</p>
            </div>
            <div className="achievement-item">
              <span className="achievement-icon">🥇</span>
              <p>Secured top ranks in technical quizzes, including 1st Place at National Symposium (M.B.U)</p>
            </div>
            <div className="achievement-item">
              <span className="achievement-icon">📜</span>
              <p>Recognized for exceptional performance in Java Basics Certification by SoloLearn</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="section">
        <div className="container">
          <h2 className="hero-subtitle">Get in Touch</h2>
          <div className="contact-info">
            <p><strong>Location:</strong> Chittoor, Andhra Pradesh, India, 517132</p>
            <p><strong>Email:</strong> <a href="mailto:lokanadham1432@gmail.com">lokanadham1432@gmail.com</a></p>
            <p><strong>Phone:</strong> +91 8106439672</p>
          </div>
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" id="name" className="form-input" />
            </div>
            <div className="form-group">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" id="email" className="form-input" />
            </div>
            <div className="form-group">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea id="message" className="form-input" rows={5}></textarea>
            </div>
            <button type="submit" className="button">Send Message</button>
          </form>
        </div>
      </section>
    </>
  )
}

export default App