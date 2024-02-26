import React from "react";
import NavBar from "../../components/NavBar";
import { projects } from "./Projects.config";
import "./Projects.css";
import Device from "../../utils/Device";
const Project = () => {
  if (!Array.isArray(projects)) {
    console.log("Projects is not an array:", projects);
    return null; // or render an error message
  }
  return (
    <div className="proj-page" style={{ backgroundColor: "black", minHeight: "100vh" }}>
       <Device />
      <div className="project-main">
        <h2 style={{ color: "white", textAlign: "center" }}>Projects</h2>
        <ul className="project-list">
          {projects.map((project, index) => {
            const { title, descriptions, skills, github, live } = project;
            return (
              <li className="project-list-item" key={index}>
                <h3 className="title">{title}</h3>
                <ul className="desc-list">
                  {descriptions.map((desc, index) => {
                    return (
                      <li className="desc-list-item" key={index}>
                        {desc}
                      </li>
                    );
                  })}
                </ul>
                <h4 className="skills">Skills- {skills}</h4>
                <div className="project-links">
                  <a className="link-item" rel="noreferrer" target="_blank" href={github}>
                    Github
                  </a>
                  <a className="link-item" rel="noreferrer" target="_blank" href={live}>
                    Live
                  </a>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Project;
