import React from "react";
import cleanImage from "../assets/cleanme.png";

function About() {
  return (
    <section id="about" className="about-container">
    <div >
        <img src="https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif" alt="Waving Hand" width="40" height="40"/>
        <h2>Hi, I am</h2>
        <h1>SAMPSON</h1>
        
        <p className="about-text"> An Electrical Engineering graduate with a distinguished academic record (CGPA: 4.13/5.0) and extensive hands-on experience in mobile application development using react, reactnative, Flutter and Dart. Proven track record of architecting functional, user-centric applications, with core competencies in REST API integration and the implementation of sustainable, high-fidelity user interfaces. Currently advancing technical proficiency in React and React Native to build integrated digital systems. A collaborative and solution-oriented professional seeking a challenging work environment to contribute technical expertise while continuously learning and growing within a forward-thinking team.</p> 
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