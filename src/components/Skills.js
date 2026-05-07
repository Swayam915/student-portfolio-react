import React from 'react';

function Skills() {
  const skillsList = [
    { name: 'HTML5', icon: '🌐' },
    { name: 'CSS3', icon: '🎨' },
    { name: 'JavaScript', icon: '⚡' },
    { name: 'React', icon: '⚛️' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'UI/UX Design', icon: '✨' }
  ];

  return (
    <section className="premium-section skills-section" id="skills">
      <div className="section-header">
        <h2>Technical Skills</h2>
        <div className="accent-line"></div>
      </div>
      <div className="skills-grid">
        {skillsList.map((skill, index) => (
          <div key={index} className="skill-card">
            <span className="skill-icon">{skill.icon}</span>
            <span className="skill-name">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
