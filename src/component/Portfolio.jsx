import React from "react";

function Portfolio() {
  const projects = [
    {
      title: "TripGuide (Tourism App)",
      description: "A React Native app featuring a 5-screen timed onboarding sequence and a destination-focused Home screen.",
      tech: ["React Native", "UI/UX"],
      date: "Dec 2025"
    },
    {
      title: "WeatherFlow",
      description: "A minimalist weather app with real-time API integration for tracking weather conditions across Nigerian states.",
      tech: ["React Native", "REST API"],
      date: "Dec 2025"
    },
    {
      title: "Keeper App",
      description: "A responsive React web application for dynamic note-taking and data handling.",
      tech: ["React", "JavaScript"],
      date: "Jan 2026"
    }
  ];

  return (
    <section id="portfolio">
      <div className="portfolio-content">
        <h1 className="section-title">Featured Projects</h1>
        <div className="portfolio-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-info">
                <span className="project-date">{project.date}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech-tags">
                  {project.tech.map((tag, i) => (
                    <span key={i} className="tech-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;