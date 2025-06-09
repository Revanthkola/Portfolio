import React, { useState, useEffect } from "react";
import "./App.css";
import "aos/dist/aos.css";
import AOS from "aos";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("skills");

  // Initialize AOS
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  // Toggle dark mode class on body
  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
  }, [darkMode]);

  // Scroll listener for active section
  useEffect(() => {
    const sections = ["skills", "projects", "contact"];
    const onScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 3;
      let current = activeSection;

      sections.forEach((section) => {
        const elem = document.getElementById(section);
        if (elem && elem.offsetTop <= scrollPos) current = section;
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [activeSection]);

  const handleLinkClick = (section) => {
    setActiveSection(section);
    setMenuOpen(false);
  };

  return (
    <>
    <nav className={`navbar ${darkMode ? "dark-nav" : ""}`}>
  <div className="nav-brand">Revanth Kola</div>

  <div className="nav-center">
    <div className="nav-links">
      {["skills", "projects", "contact"].map((section) => (
        <a key={section} href={`#${section}`} className="nav-link">
          {section.charAt(0).toUpperCase() + section.slice(1)}
        </a>
      ))}
    </div>
  </div>

        <button
          className="toggle-btn"
          onClick={() => setDarkMode(!darkMode)}
          aria-label="Toggle dark mode"
        >
          {darkMode ? "☀️" : "🌙"}
        </button>

        <button
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </nav>

      <div className={`container ${darkMode ? "dark" : ""}`}>
        <header data-aos="fade-down">
          <h1>Revanth</h1>
          <p className="bio">
            Passionate CSE student focused on web development and machine learning.
          </p>
        </header>

        <section id="skills" data-aos="fade-up" tabIndex="-1">
          <h2 className="section-title">Skills</h2>
          <div className="skills">
            <ul className="skills-list">
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>Node.js</li>
            </ul>
          </div>
        </section>

        <section id="projects" data-aos="fade-up" tabIndex="-1">
          <h2 className="section-title">Projects</h2>
          <div className="projects-container">
            <div className="project-card">
              <h3>Hospital Finder App</h3>
              <p className="project-desc">
                A web app to find the nearest hospital using Haversine formula.
              </p>
              <p className="project-tech">
                <strong>Tech:</strong> HTML, JS, Flask, Google Maps API
              </p>
              <a
                href="https://github.com/yourname/hospital-finder"
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                View on GitHub
              </a>
            </div>

            <div className="project-card">
              <h3>Alarmify</h3>
              <p className="project-desc">
                Personal assistant with alarm, notes, and reminders.
              </p>
              <p className="project-tech">
                <strong>Tech:</strong> React, Next.js, SQL
              </p>
              <a
                href="https://github.com/yourname/alarmify"
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                View on GitHub
              </a>
            </div>
          </div>
        </section>

        <section id="contact" className="contact-section" data-aos="fade-up" tabIndex="-1">
          <h2 className="section-title">Contact</h2>
          <div className="contact-card">
            <ul className="contact-list">
              <li>
                <strong>Email:</strong>{" "}
                <a href="mailto:revanth@email.com">revanthofficial77@gmail.com</a>
              </li>
              <li>
                <strong>LinkedIn:</strong>{" "}
                <a
                  href="https://www.linkedin.com/in/revanthkola/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  linkedin.com/in/revanthkola
                </a>
              </li>
              <li>
                <strong>GitHub:</strong>{" "}
                <a
                  href="https://github.com/Revanthkola"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  github.com/Revanthkola
                </a>
              </li>
            </ul>
           <a className="resume-btn" href="/resume.pdf" download target="_blank" rel="noopener noreferrer">
  📄 Download Resume
</a>

          </div>
        </section>
      </div>
    </>
  );
}

export default App;
