import React from "react";
import { Link } from "react-router-dom";
import "../styles/ExperiencePreview.css";

function ExperiencePreview() {
  return (
    <section className="experience-preview">
      <h2 className="section-title">Experience & Education</h2>

      <div className="preview-grid">
        <div className="preview-item">
          <h3>Web Developer Intern</h3>
          <p className="preview-sub">Tech Company • Jan 2024 – Mar 2024</p>
          <p>Worked on frontend features using React and backend API integration with Node.js.</p>
        </div>

        <div className="preview-item">
          <h3>B.Tech – Computer Science</h3>
          <p className="preview-sub">Integral University • 2021 – Present</p>
          <p>Specializing in MERN stack development, DSA, and backend technologies.</p>
        </div>
      </div>

      <Link to="/experience" className="experience-button">View Full Experience</Link>
    </section>
  );
}

export default ExperiencePreview;
