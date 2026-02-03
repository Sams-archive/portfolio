import React from "react";
import ContactMenu from "./ContactMenu";
import '../Styles.css';
function Header(){
  return (
   <div className="header-container">
      <header>
  <h2>Sampson's Portfolio</h2>
  <nav className="nav-links">
    <a href="#about">About Me</a>
    <a href="#skills">Skills</a>
    <a href="#portfolio">Portfolio</a>
    <ContactMenu/>
    {/* <button className="contact-btn">CONTACT ME</button> */}
  </nav>
</header>
    </div>
  );
}
      
export default Header;