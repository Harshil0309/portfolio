import React from "react";
import "./NavBar2.css";
import { useNavigate } from "react-router-dom";
import { SparklesPreview } from "../../utils/SparklesPreview";

const NavBar2 = () => {
  const navigate = useNavigate();

  const defaultHandler = () => {
    navigate("/");
  };

  const skillClickHandler = () => {
    navigate("/skills");
  };
  const experienceClickHandler = () => {
    navigate("/experience");
  };
  const projectClickHandler = () => {
    navigate("/project");
  };
  const linkClickhandler = () => {
    navigate("/contact");
  };
  const openNav = () => {
    document.getElementById("myNav").style.width = "100%";
  };

  const closeNav = () => {
    document.getElementById("myNav").style.width = "0%";
  };

  return (
    <div>
      <SparklesPreview />
      <div className="menu-button">
        <div id="myNav" className="overlay">
          <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>
            &times;
          </a>
          <div className="overlay-content">
            <h2 onClick={defaultHandler}>Home</h2>
            <h2 onClick={skillClickHandler}>Skills</h2>
            <h2 onClick={experienceClickHandler}>Experience</h2>
            <h2 onClick={projectClickHandler}>Project</h2>
            <h2 onClick={linkClickhandler}>Contact</h2>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://file.io/QzpzDhs437Bk"
            >
              Download Resume
            </a>
          </div>
        </div>

        <span style={{ fontSize: "30px", cursor: "pointer" }} onClick={openNav}>
          &#9776;
        </span>
      </div>
    </div>
  );
};

export default NavBar2;
