import React from "react";
import '../navbar/navbar.css';

import respdf from '../assets/resume.pdf'

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <a href="#Home">Home</a>
        </li>
        <li>
          <a href="#aboutme">About Me</a>
        </li>
        <li>
          <a href="#Work">Projects</a>
        </li>
        <li>
          <a href={respdf} target="_blank">Resume</a>
        </li>
        <li>
          <a href="#Contact-me">Contact Me</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
