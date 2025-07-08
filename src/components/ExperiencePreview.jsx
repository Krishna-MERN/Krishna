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
          <p>Worked on frontend features using React and backend API integration with Node.js.</p>
        </div>

        <div className="preview-item">
          <h3>B.Tech – Computer Science and Engineering</h3>
          <p className="preview-sub">Integral University • 2022 – Present</p>
          <p>Specializing in MERN stack development, DSA, and backend technologies.</p>
        </div>
      </div>

      <Link to="/experience" className="experience-button">View Full Experience</Link>
    </section>
  );
}

export default ExperiencePreview;
