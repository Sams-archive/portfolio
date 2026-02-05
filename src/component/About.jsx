import React from "react";
import cleanImage from "../assets/cleanme.png";

function About() {
  return (
    <section id="about" className="about-container">
    <div >
        <img src="https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif" alt="Waving Hand" width="40" height="40"/>
        <h2>Hi, I am</h2>
        <h1>SAMPSON</h1>
        
        <p className="about-text"> An Electrical Engineering graduate (CGPA: 4.13/5.0) with practical experience in web and mobile application development using HTML, CSS, JavaScript, React, React Native, Flutter, and Dart. Experienced in building responsive user interfaces, implementing basic application navigation flows, and integrating REST APIs for data-driven applications. Has worked on personal and collaborative projects involving frontend development, UI structuring, and API consumption. Currently improving proficiency in React and React Native while gaining industry experience through operations, documentation, and reporting roles in the oil and gas services sector. Comfortable working in team environments and learning on the job.</p> 
    </div>
    <div className="about-image-column">
        {/* Background Image (GIF) */}
        <img 
          src="https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif" 
          className="bg-image" 
          alt="Background" 
        />
        {/* Foreground Image (Clean Me) */}
        <img 
          src={cleanImage} 
          className="clean-me-image" 
          alt="Clean Me" 
        /> 
      </div>
    </section>
  );
}

export default About;