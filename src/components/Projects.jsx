import React, { useState } from "react";
import "../styles/Projects.css"; // external CSS file

const projects = [
  {
    title: "Automated Bus Scheduling System and Route management",
    description:
      "The Bus Scheduling System is a full-stack web application designed to automate and simplify the process of managing bus routes, schedules, and seat bookings. It provides an intuitive admin dashboard for managing buses and routes, while users can easily view available schedules and book seats online.",
    features: [
      "Dynamic Bus Scheduling: Admins can create and modify bus schedules with assigned routes and timings in real time.",
      "Interactive Admin Dashboard: Displays total users, routes, buses, and analytics for easy monitoring.",
      "Route & Stop Management: Allows adding, updating, and removing routes and intermediate stops.",
      "Smart Booking System: Users can view available buses, select timings, and book seats.",
      "Automated Seat Availability: The system automatically updates booked and available seats.",
      "Secure Authentication: User login and admin access with secure session handling.",
    ],
    images: [],
    github: "https://github.com/yourusername/bus-scheduler",
    live: "https://bus-scheduler.vercel.app",
  },
  {
    title: "ExamPrep – Online Test & Learning Platform",
    description:
      "ExamPrep is a web-based platform that helps students prepare for competitive exams by providing mock tests, practice questions, and performance analytics.It offers subject-wise test creation, timer-based quizzes, instant scoring, and progress tracking — all designed to improve exam readiness efficiently.Built using MERN stack, it focuses on usability, accuracy, and data-driven performance evaluation for both students and administrators.",
    features: [
      "Secure Login System: Separate dashboards for students and admin with authentication.",
      "Timer-Based Tests: Each test runs with a countdown timer for realistic exam experience.",
      "Progress Dashboard: Students can track performance with detailed analytics and accuracy reports.",
      "Mock Test Creation: Admins can create and manage topic-wise and full-length mock tests.",
      "Question Bank Management: Add, update, and categorize questions by difficulty and subject.",
      "Real-Time Result Evaluation: Automatic scoring system provides instant feedback.",
    ],
    images: ["/images/att1.png", "/images/att2.png"],
    github: "https://github.com/yourusername/attendance-system",
    live: "https://attendance-system.vercel.app",
  },
];

const Projects = () => {
  const [expanded, setExpanded] = useState(null);

  const toggleExpand = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <section className="project-section">
      <h2 className="section-title">My Projects</h2>
      <div className="project-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3 className="project-title">{project.title}</h3>
            <p className="project-desc">{project.description}</p>

            {/* Images */}
            {project.images.length > 0 && (
              <div className="project-images">
                {project.images.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    // alt={`${project.title} ${i + 1}`}
                    className="project-img"
                  />
                ))}
              </div>
            )}

            {/* Features */}
            <ul className="feature-list">
              {(expanded === index
                ? project.features
                : project.features.slice(0, 2)
              ).map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>

            {project.features.length > 2 && (
              <button
                className="read-more-btn"
                onClick={() => toggleExpand(index)}
              >
                {expanded === index ? "Read Less" : "Read More"}
              </button>
            )}

            {/* Links */}
            <div className="project-links">
              <a href={project.github} target="_blank" rel="noreferrer">
                GitHub Repo
              </a>
              <a href={project.live} target="_blank" rel="noreferrer">
                See Live
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
