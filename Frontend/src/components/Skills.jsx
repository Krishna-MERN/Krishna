import React from "react";
import "../styles/Skills.css";

function Skills() {
  const skills = {
    Languages: ["C", "Java","JavaScript", "HTML", "CSS", "SQL"],
    "Frameworks & Libraries": ["React.js", "Node.js", "Express.js", "Mongoose", "Tailwind CSS"],
    "Tools & Platforms": ["Git", "GitHub", "Postman", "Firebase", "VS Code"],
    "CS Concepts": ["Data Structures", "Algorithms", "OOPs", "REST APIs"],
  };

  return (
    <section className="skills" id="skills">
      <h2 className="section-title">My Skills</h2>
      <div className="skills-container">
        {Object.entries(skills).map(([category, skillList], index) => (
          <div className="skill-category" key={index}>
            <h3>{category}</h3>
            <div className="skills-grid">
              {skillList.map((skill, idx) => (
                <div className="skill-card" key={idx}>{skill}</div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
