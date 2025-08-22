import React from "react";
import "../styles/Projects.css";
const projects = [
  {
    title: "SmartBusScheduler",
    status:"Ongoing",
    description: "The Automatic Bus Scheduling with Route Management System is a software solution that helps Delhi Transport Corporation (DTC) manage its bus services efficiently. Instead of manually preparing bus timetables and assigning buses to routes, the system automatically generates schedules based on:",
    points: [
      "Automation of Scheduling – Assign buses to routes and trips automatically.",
      "Route Management – Define, update, and optimize routes & stops.",
      "Real-time Tracking  – Track buses via GPS.",
      "Demand Optimization (optional advanced) – Increase frequency in peak hours.",
      "Database Management – Store bus, driver, and route information."
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
    description: "Developed a full-stack Exam Conduct Software using the MERN stack with separate role-based login modules for Admin and Users. The Admin module manages examinees, sessions, exams, results, reports, and question banks, while the User module allows students to attempt exams, view schedules, check results, and track performance. Implemented secure authentication and a responsive, modular dashboard for a smooth and dynamic user experience.",
    points: [
      " To conduct the Exam Prep of respective modules of a given course. ",
      "To maintain the marks obtained by the students in each module.",
      "To maintain the marks obtained by the students in each module.",
      "Screen the deserving candidates at low cost.",
      "Fast Accessing.",
      "Save Time"

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
    description: "Developed a desktop-based utility software for niche task tracking and management, designed to enhance productivity and focus. Configured to auto-launch at system startup and remain always on top for continuous visibility. Integrated focus detection to identify and prioritize active tasks, ensuring seamless daily monitoring with minimal user interruption.",
    points: [
      " Developed a desktop-based utility software tailored for niche task tracking and management.",
      "Configured to auto-launch with system boot and remain always on top for continuous visibility.",
      " Integrated focus detection to identify and prioritize active user tasks. ",
      "Designed for minimal interruption and seamless daily task monitoring on user desktops. ",


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
    title: "Datara Softwares – MERN Application",
    status:"Completed",
    description: "Developed a full-stack MERN application for Datara Softwares, focusing on scalable design, secure authentication, and a responsive user interface. The project integrated dynamic dashboards, data management modules, and role-based access control to streamline software operations.",
    points: [
      "Built responsive and dynamic UIs in React with modular components for easy scalability.",
      "Integrated MongoDB for structured data storage with optimized schema design.",
      "Implemented role-based authentication & authorization to ensure secure access.",
      "Developed an admin dashboard for managing users, configurations, and reports.",
      "Focused on performance optimization and a clean, user-friendly design."
    ],
    tech: ["React", "Node.JS","Express.JS","MongoDB", "CSS",""],
    screenshots: [
      "/images/atm1.png"
    ]
  }
];

export default function Projects() {
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
