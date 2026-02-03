import React from "react";

function Skills() {
  const skillCategories = [
    {
      title: "Core Technologies",
      skills: [
        { name: "HTML5", icon: "🌐" },
        { name: "CSS3", icon: "🎨" },
        { name: "JavaScript (ES6+)", icon: "🟨" },
        { name: "Dart", icon: "🎯" },
      ],
    },
    {
      title: "Frameworks & Libraries",
      skills: [
        { name: "React", icon: "⚛️" },
        { name: "Flutter", icon: "💙" },
        { name: "React Native", icon: "📱" },
       
      
      ],
    },
    {
      title: "Design & Tools",
      skills: [
        
        { name: "Git & GitHub", icon: "📦" },
        { name: "Figma", icon: "📐" },
      ]
    },
  ];

  return (
    <section id="skills">
      <div className="skills-content">
        <h1 className="section-title">Technical Proficiency</h1>
        
        {skillCategories.map((category, index) => (
          <div key={index} className="skill-group">
            {/* These are your category subtitles */}
            <h2 className="category-subtitle">{category.title}</h2>
            <div className="skills-grid">
              {category.skills.map((skill, sIndex) => (
                <div key={sIndex} className="skill-card">
                  <span className="skill-icon">{skill.icon}</span>
                  <p>{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;