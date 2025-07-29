import React from "react";
import { Link } from "react-router-dom";
import "../styles/ExperiencePreview.css";

function ExperiencePreview() {
  return (
    <section className="experience-preview">
      <h2 className="section-title">Experience & Education</h2>

      <div className="preview-grid">
        <div className="preview-item">
          <h3>MERN Stack Trainee</h3>
          <p className="preview-sub">Softpro India • June 2025 – July 2025</p>
        <ul>
          <li>Developed and maintained Java-based applications using Core Java, Spring, and Hibernate frameworks.</li>
          <li>Designed and implemented backend logic, APIs, and database interactions for web applications.</li>
        </ul>
        </div>

        <div className="preview-item">
          <h3>B.Tech – Computer Science and Engineering</h3>
          <p className="preview-sub">Integral University • 2022 – Present</p>
          <p>Pursuing Bachelor of Technology (B.Tech) in Computer Science and Engineering from Integral University Lucknow, with a focus on building strong technical and problem-solving skills.</p>
        </div>
      </div>

      <Link to="/experience" className="experience-button">View Full Experience</Link>
    </section>
  );
}

export default ExperiencePreview;
