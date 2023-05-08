import React from "react";
import '../navbar/navbar.css';

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
          <a href="#resume">Resume</a>
        </li>
        <li>
          <a href="#Contact-me">Contact Me</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
