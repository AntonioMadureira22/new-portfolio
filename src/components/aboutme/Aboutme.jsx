import React from "react";

import picture from "../assets/profilephoto.jpg";
import './aboutme.css';

function AboutMe() {
  return (
    <div className="about-me" id="aboutme">
      <div className="image-container">
        {/* Placeholder image */}
        <img src={picture} alt="Profile" ></img>
      </div>
      <div className="linked">
      <a className='linkedin' href="https://www.linkedin.com/in/antonio-madureira-a6b806191/" target="_blank">🡺View my LinkedIn🡸</a>
      </div>
      <div className="description">
        <h1>About Me</h1>
        <p>
          Hello, my name is Antonio Madureira. I am a full-stack web developer, software engineer, and sales professional. I am passionate about creating high-quality software solutions that solve complex problems and deliver value to users.
        </p>
        <a href="#Work"><button>View Projects</button></a>
      </div>
    </div>
  );
}

export default AboutMe;

