import React from 'react';

function Projects() {
  return (
    <section className="premium-section projects-section" id="projects">
      <div className="section-header">
        <h2>Featured Projects</h2>
        <div className="accent-line"></div>
      </div>
      <div className="project-display">
        <div className="project-card">
          <div className="project-tag">Latest Work</div>
          <h3>Student Portfolio Management System</h3>
          <p>
            A high-performance React application designed to manage and showcase 
            student academic records and project achievements with an interactive UI.
          </p>
          <div className="project-tech">
            <span>React</span>
            <span>CSS3</span>
            <span>Vite</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
