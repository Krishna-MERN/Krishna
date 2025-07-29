import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProjectsPage from "./pages/ProjectsPage";
import ExperiencePage from "./pages/ExperiencePage";
import AboutUs from "./pages/AboutUs";
import "./styles/variables.css"; // if you're using CSS variables
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton";
import Contact from "./components/Contact";

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  return (
    <Router>
    
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Routes>
    <Route path="/" element={<Home theme={theme} toggleTheme={toggleTheme} />} />
     <Route path="/projects" element={<ProjectsPage />} />
     <Route path="/experience" element={<ExperiencePage />} />
     <Route path="/AboutUs" element={<AboutUs />} />
     <Route path="/Contact" element={<Contact/>}/>
      </Routes>
      <Footer/>
      <ScrollToTopButton />
    </Router>
  );
}

export default App;
