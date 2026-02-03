import React, { useState } from "react";
// Import your official app logos from the assets folder
import linkedinImg from "../assets/linkedin.png";
import githubImg from "../assets/github.png";
import xImg from "../assets/x-logo.png";
import whatsappImg from "../assets/whatsapp.png";

function ContactMenu() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleMenu = () => setIsVisible(!isVisible);

  const socialLinks = [
    { name: "LinkedIn", imgSrc: linkedinImg, url: "https://www.linkedin.com/in/sampson-chika" },
    { name: "GitHub", imgSrc: githubImg, url: "https://github.com/Sams-archive" },
    { name: "X (Twitter)", imgSrc: xImg, url: "https://x.com/isam_son" },
    { name: "WhatsApp", imgSrc: whatsappImg, url: "https://wa.me/2348100942474" }
  ];

  return (
    <div className="contact-menu-wrapper">
      <button className="contact-btn" onClick={toggleMenu}>
        CONTACT ME
      </button>

      {isVisible && (
        <ul className="social-dropdown">
          {socialLinks.map((social, index) => (
            <li key={index}>
              <a href={social.url} target="_blank" rel="noopener noreferrer">
                {/* Use the <img> tag here instead of <span> */}
                <img src={social.imgSrc} alt={social.name} className="dropdown-icon" />
                {social.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ContactMenu;