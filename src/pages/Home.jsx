import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import ProjectsPreview from "../components/ProjectsPreview";
import Contact from "../components/Contact";
import CertificationsSlider from "../components/CertificationsSlider";
import ExperiencePreview from "../components/ExperiencePreview";
// import Testimonials from "../components/Testimonials";

function Home({ theme, toggleTheme })
{
  return (
    <>
      <Hero />
      <About />
       <ExperiencePreview />
      <Skills />
      {/* <Testimonials/> */}
      <ProjectsPreview />
      <CertificationsSlider />
      <Contact />
      
   
    </>
  );
}

export default Home;
