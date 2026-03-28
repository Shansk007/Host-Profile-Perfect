import React, { useEffect, useState } from 'react';
import './App.css';
import profileImg from './assets/profile.jpg';

function App() {
    const [theme, setTheme] = useState('dark');

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        feedback: '',
    });

    const [message, setMessage] = useState('');

    useEffect(() => {
        document.body.classList.remove('dark', 'light');
        document.body.classList.add(theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:5000/api/feedback', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                setMessage('Feedback submitted successfully!');
                setFormData({ name: '', email: '', feedback: '' });
            } else {
                setMessage(data.message || 'Something went wrong.');
            }
        } catch (error) {
            setMessage('Server connection failed. Make sure Node.js backend is running.');
        }
    };

    return (
        <div className="page">
            <header className="header">
                <div className="container">
                    <div>
                        <p className="brand-tag">Portfolio</p>
                        <h1 className="logo">Shahnawaz Sheikh</h1>
                    </div>

                    <nav className="nav">
                        <a href="#about">About</a>
                        <a href="#skills">Skills</a>
                        <a href="#projects">Projects</a>
                        <a href="#certificates">Certificates</a>
                        <a href="#contact">Contact</a>
                    </nav>

                    <button className="theme-toggle" onClick={toggleTheme}>
                        {theme === 'dark' ? '☀️' : '🌙'}
                    </button>
                </div>
            </header>

            <main className="container">
                <section className="hero">
                    <div className="hero-left">
                        <span className="badge">DevOps • Cloud • AWS • Linux</span>
                        <h2 className="hero-title">
                            Building modern, scalable and reliable cloud infrastructure.
                        </h2>
                        <p className="hero-subtitle">
                            I am a DevOps and Cloud enthusiast focused on AWS, Linux, Docker,
                            Kubernetes, Jenkins, Terraform and automation. I enjoy creating
                            fast, secure and production-ready environments.
                        </p>

                        <div className="button-group">
                            <a className="primary-btn" href="#projects">View Projects</a>
                            <a className="secondary-btn" href="#contact">Hire Me</a>
                            <a className="resume-btn" href="/resume.pdf" download>
                                Download Resume
                            </a>
                        </div>

                        <div className="social-links">
                            <a href="https://github.com/" target="_blank" rel="noreferrer">GitHub</a>
                            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn</a>
                        </div>

                        <div className="stats">
                            <div className="stat-card">
                                <h3>3.2+</h3>
                                <p>Years Experience</p>
                            </div>
                            <div className="stat-card">
                                <h3>15+</h3>
                                <p>Cloud & DevOps Projects</p>
                            </div>
                            <div className="stat-card">
                                <h3>24/7</h3>
                                <p>Automation Mindset</p>
                            </div>
                        </div>
                    </div>

                    <div className="hero-right">
                        <div className="profile-card float-card">
                            <div className="profile-glow"></div>
                            <div className="profile-content">
                                <div className="profile-image-wrap">
                                    <img
                                        src={profileImg}
                                        alt="Profile"
                                        className="profile-image"
                                    />
                                </div>
                                <p className="small-label">Profile</p>
                                <h3>DevOps Engineer</h3>
                                <p>
                                    Passionate about CI/CD, cloud-native deployments, monitoring,
                                    infrastructure as code and high availability systems.
                                </p>
                                <div className="highlight-list">
                                    <span>AWS</span>
                                    <span>Docker</span>
                                    <span>Kubernetes</span>
                                    <span>Jenkins</span>
                                    <span>Terraform</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="about" className="section">
                    <div className="section-heading">
                        <p>About Me</p>
                        <h2>Turning ideas into automated and scalable systems</h2>
                    </div>
                    <div className="glass-card hover-lift">
                        <p>
                            I am Shahnawaz Sheikh, a Linux System Administrator and DevOps professional
                            with hands-on experience in cloud platforms, automation, CI/CD pipelines,
                            containerization and infrastructure management. I love solving deployment,
                            scalability and reliability challenges with clean and efficient solutions.
                        </p>
                    </div>
                </section>

                <section id="skills" className="section">
                    <div className="section-heading">
                        <p>Skills</p>
                        <h2>Technologies I work with</h2>
                    </div>
                    <div className="skills-grid">
                        {[
                            'Linux',
                            'AWS',
                            'Docker',
                            'Kubernetes',
                            'Jenkins',
                            'Terraform',
                            'Git',
                            'Shell Scripting',
                        ].map((skill) => (
                            <div key={skill} className="skill-card hover-lift colorful-card">
                                <span>{skill}</span>
                            </div>
                        ))}
                    </div>
                </section>

                <section id="projects" className="section">
                    <div className="section-heading">
                        <p>Projects</p>
                        <h2>Some of my featured work</h2>
                    </div>
                    <div className="projects-grid">
                        <div className="project-card hover-lift colorful-card">
                            <div className="project-top-line"></div>
                            <h3>AWS EKS Deployment</h3>
                            <p>
                                Deployed containerized applications on AWS EKS with automated CI/CD,
                                monitoring and secure infrastructure provisioning.
                            </p>
                            <button className="project-btn">View Details</button>
                        </div>

                        <div className="project-card hover-lift colorful-card">
                            <div className="project-top-line"></div>
                            <h3>Jenkins CI/CD Pipeline</h3>
                            <p>
                                Built a complete pipeline for code build, Docker image creation,
                                vulnerability scanning and deployment automation.
                            </p>
                            <button className="project-btn">View Details</button>
                        </div>

                        <div className="project-card hover-lift colorful-card">
                            <div className="project-top-line"></div>
                            <h3>Infrastructure with Terraform</h3>
                            <p>
                                Provisioned scalable AWS infrastructure using reusable Terraform modules
                                for networking, compute and container orchestration.
                            </p>
                            <button className="project-btn">View Details</button>
                        </div>
                    </div>
                </section>

                <section id="certificates" className="section">
                    <div className="section-heading">
                        <p>Certificates</p>
                        <h2>Learning and achievements</h2>
                    </div>
                    <div className="projects-grid">
                        <div className="project-card hover-lift colorful-card">
                            <div className="project-top-line"></div>
                            <h3>AWS Certification</h3>
                            <p>AWS Solution Architecture</p>
                        </div>
                        <div className="project-card hover-lift colorful-card">
                            <div className="project-top-line"></div>
                            <h3>Docker / Kubernetes</h3>
                            <p>WIP</p>
                        </div>
                        <div className="project-card hover-lift colorful-card">
                            <div className="project-top-line"></div>
                            <h3>Linux / DevOps</h3>
                            <p>Coming soon</p>
                        </div>
                    </div>
                </section>

                <section id="contact" className="section">
                    <div className="contact-box hover-lift">
                        <p className="contact-label">Contact & Feedback</p>
                        <h2>Let’s build something amazing together</h2>
                        <p className="contact-text">
                            Email: shansk2700@gmail.com <br />
                            Location: India <br />
                            Open to DevOps, Cloud and Infrastructure opportunities.
                        </p>

                        <form className="feedback-form" onSubmit={handleSubmit}>
                            <input
                                type="text"
                                name="name"
                                placeholder="Enter your name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Enter your email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                            <textarea
                                name="feedback"
                                placeholder="Write your feedback"
                                rows="5"
                                value={formData.feedback}
                                onChange={handleChange}
                                required
                            ></textarea>
                            <button type="submit" className="resume-btn">
                                Submit Feedback
                            </button>
                        </form>

                        {message && <p className="form-message">{message}</p>}
                    </div>
                </section>
            </main>
        </div>
    );
}

export default App;
