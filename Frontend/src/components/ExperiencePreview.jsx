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
          <p className="preview-sub">Softpro India • June 2025 – August 2025</p>
        <ul>
          <li>Developed a full-stack Exam Conduct Software with separate login modules for Admin and User, ensuring 
role-based access. </li>
          <li>Implemented secure authentication and authorization to protect user data and manage access rights. </li>
          <li>Built using the MERN stack, focusing on modular design, dynamic UI, and responsive dashboard interfaces.</li>
        </ul>
        </div>

        <div className="preview-item">
          <h3>B.Tech – Computer Science and Engineering</h3>
          <p className="preview-sub">Integral University • 2022 – 2026 Expected</p>
          <p>Pursuing Bachelor of Technology (B.Tech) in Computer Science and Engineering from Integral University Lucknow, with a focus on building strong technical and problem-solving skills.</p>
        </div>
      </div>

      <Link to="/experience" className="experience-button">View Full Experience</Link>
    </section>
  );
}

export default ExperiencePreview;
