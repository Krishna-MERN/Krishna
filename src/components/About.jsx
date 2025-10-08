import React, { useState } from "react";
import "../styles/About.css";

function About() {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  return (
    <section className="about" id="about">
      <h2 className="section-title">About Me</h2>
      <div className="about-content">
        <div className="about-text">
          <p>
            Hello! I'm <span className="highlight">Krishna Kumar Shukla</span>, a dedicated and enthusiastic computer science student with a passion for <span className="highlight">technology</span> and innovation. I am currently pursuing my degree at Integral University, where I am honing my skills in software development, data structures, algorithms, and web development.
          </p>

          {expanded && (
            <>
              <p>
                "As a passionate <span className="highlight">#computer_science</span> student, I'm on a journey to explore the endless possibilities of technology. Eager to learn, adapt, and create, I'm constantly seeking opportunities to expand my knowledge and apply it to real-world challenges. With a strong foundation in programming, data structures, and algorithms, I'm driven to make a meaningful impact in the tech industry. I thrive on collaboration, problem-solving, and continuous growth."
              </p>
              <p>
                From a young age, I have been fascinated by the power of technology to transform ideas into reality. This curiosity has driven me to explore various programming languages and frameworks, allowing me to build a diverse portfolio of projects.
              </p>
              <p>
                In addition to my technical skills, I value creativity and problem-solving. I believe that a combination of strong technical knowledge and innovative thinking can lead to impactful solutions. I am particularly interested in <span className="highlight">AI</span>, <span className="highlight">machine learning</span>, <span className="highlight">cybersecurity</span>, and I am constantly seeking opportunities to expand my expertise in these fields.
              </p>
              <p>
                Beyond academics, I enjoy reading, playing chess, and traveling, which helps me maintain a balanced and well-rounded lifestyle.
              </p>
              <p>
                I am excited to share my journey and projects with you through this website. Feel free to explore my work, read my blog, and get in touch if you'd like to connect or collaborate.
              </p>
              <p><strong>Thank you for visiting!</strong></p>
            </>
          )}

          <button className="read-more-btn" onClick={handleToggle}>
            {expanded ? "Show Less" : "Read More"}
          </button>
        </div>
      </div>
    </section>
  );
}

export default About;
