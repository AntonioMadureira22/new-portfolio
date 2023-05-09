import React from "react";
import "./project.css";

//images
import builder from '../assets/resume builder .png'

function Projects() {
  return (
    <div className="projects" id="Work">
      <h2>My Projects</h2>
      <div className="project-list">
        <div className="project-item">
          <h3>All In One Resume Builder</h3>
          <img src={builder} alt="Project 1" />
          <a href="https://melodic-caramel-8e3861.netlify.app/" target="_blank">View project</a>
        </div>
        <div className="project-item">
          <h3>Project 2</h3>
          <img src="https://via.placeholder.com/300x200" alt="Project 2" />
          <a href="#">View project</a>
        </div>
        <div className="project-item">
          <h3>Project 3</h3>
          <img src="https://via.placeholder.com/300x200" alt="Project 3" />
          <a href="#">View project</a>
        </div>
        <div className="project-item">
          <h3>Project 4</h3>
          <img src="https://via.placeholder.com/300x200" alt="Project 4" />
          <a href="#">View project</a>
        </div>
        <div className="project-item">
          <h3>Project 5</h3>
          <img src="https://via.placeholder.com/300x200" alt="Project 5" />
          <a href="">View project</a>
        </div>
      </div>
    </div>
  );
}

export default Projects;
