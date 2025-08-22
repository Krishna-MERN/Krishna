import React from "react";
import "../styles/Projects.css";
const projects = [
    {
    title: "SmartBusScheduler",
    status:"Ongoing",
    description: "The Automatic Bus Scheduling with Route Management System is a software solution that helps Delhi Transport Corporation (DTC) manage its bus services efficiently. Instead of manually preparing bus timetables .........",
    points: [
      "Automation of Scheduling – Assign buses to routes and trips automatically.",
      "Route Management – Define, update, and optimize routes & stops.",
      "Real-time Tracking  – Track buses via GPS."

    ],
    tech: ["React", "Node.js", "MongoDB", "Express","Scheduling Algorithm"],
    screenshots: [
      "/images/jobportal1.png",
      "/images/jobportal2.png"
    ]
  },
    {
    title: "Exam Prep – Client: Soft Pro India, Kapoor Thala  ",
    status:"Completed",
    description: "Developed a full-stack Exam Conduct Software using the MERN stack with separate role-based login modules for Admin and Users. The Admin module manages examinees, sessions, exams, results, reports, and question ...........",
    points: [
      " To conduct the Exam Prep of respective modules of a given course. ",
      "To maintain the marks obtained by the students in each module."
    ],
    tech: ["React", "Node.JS","Express.JS","MongoDB", "CSS",""],
    screenshots: [
      "/images/lms1.png",
      "/images/2.png",
      "/images/lms3.png",
      "/images/lms4.png"
    ]
  },
  {
    title: "Docket – Personal Task Management Desktop Software ",
    status:"Completed",
    description: "Developed a desktop-based utility software for niche task tracking and management, designed to enhance productivity and focus. Configured to auto-launch at system startup and ..........",
    points: [
      " Developed a desktop-based utility software tailored for niche task tracking and management.",
      "Configured to auto-launch with system boot and remain always on top for continuous visibility.",



    ],
    tech: ["React", "Node.JS","Express.JS","MongoDB", "CSS",""],
    screenshots: [
      "/images/lms1.png",
      "/images/2.png",
      "/images/lms3.png",
      "/images/lms4.png"
    ]
  },
];

export default function ProjectsPreview() {
  return (
    <div className="projects-container">
      <h2 className="projects-heading">My Projects</h2>
      <div className="projects-list">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3 className="project-title">{project.title}</h3>
            <h4> Status : {project.status}</h4>
            <p className="project-desc">{project.description}</p>

            <ul className="project-points">
              {project.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>

            <p className="project-tech">
              <strong>Tech Used:</strong> {project.tech.join(", ")}
            </p>

            {/* <div className="project-screenshots">
              {project.screenshots.map((src, i) => (
                <img src={src} alt={`Screenshot ${i + 1}`} key={i} />
              ))}
            </div> */}
          </div>
        ))}
      </div>
    </div>
  );
}
