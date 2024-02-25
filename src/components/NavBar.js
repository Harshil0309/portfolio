import "./NavBar.css";
import React from "react";
import { AppBar, Button, Toolbar } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { SparklesPreview } from "../utils/SparklesPreview";

const NavBar = () => {
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

  return (
    <AppBar position="static" style={{ background: "black" }}>
      <SparklesPreview />
      <Toolbar>
        <Button
          style={{
            flexGrow: 1,
            transition: "background-color 1s",
            width: "100px",
          }}
          color="inherit"
          onClick={defaultHandler}
          className="portfolio"
        >
          Portfolio
        </Button>
        <Toolbar display="flex">
          <Button
            className="skill"
            style={{
              transition: "background-color 1s",
            }}
            color="inherit"
            onClick={skillClickHandler}
          >
            Skills
          </Button>
          <Button
            style={{
              transition: "background-color 1s",
            }}
            className="experience"
            color="inherit"
            onClick={experienceClickHandler}
          >
            Experience
          </Button>
          <Button
            style={{
              transition: "background-color 1s",
            }}
            className="projects"
            color="inherit"
            onClick={projectClickHandler}
          >
            Projects
          </Button>
          <Button
            style={{
              transition: "background-color 1s",
            }}
            className="contact"
            color="inherit"
            onClick={linkClickhandler}
          >
            Contact
          </Button>
          <Button
            className="download"
            color="inherit"
            style={{ background: "red" }}
            rel="noreferrer"
            target="_blank"
            href="https://file.io/QzpzDhs437Bk"
          >
            Download CV
          </Button>
        </Toolbar>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
