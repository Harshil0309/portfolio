import "./Home.css";
import React from "react";
import Device from "../../utils/Device.js";
import { useMediaQuery } from "react-responsive";
import { techStack } from "../Skills/Skills.config.js";
import { workHistory } from "../Experience/Experience.config.js";
import { projects } from "../Projects/Projects.config.js";
import { links } from "../Links/Links.config.js";
import { AppBar, Button, Toolbar } from "@mui/material";
import { SparklesPreview } from "../../utils/SparklesPreview.js";

const Home = () => {
  const scrollToRef = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const Mobile = useMediaQuery({
    query: "(max-width:900px)",
  });
  return (
    <div id="home-page" className="home">
      {!Mobile && (
        <AppBar position="fixed" style={{ background: "black" }}>
          <SparklesPreview />
          <Toolbar>
            <Button
              style={{
                flexGrow: 1,
                transition: "background-color 1s",
                width: "100px",
              }}
              color="inherit"
              onClick={() => scrollToRef("home-page")}
              className="portfolio"
            >
              Portfolio
            </Button>
            <Toolbar display="flex">
              <Button
                style={{
                  transition: "background-color 1s",
                }}
                className="experience"
                color="inherit"
                onClick={() => scrollToRef("experience-section")}
              >
                Experience
              </Button>
              <Button
                className="skill"
                style={{
                  transition: "background-color 1s",
                }}
                color="inherit"
                onClick={() => scrollToRef("skills-section")}
              >
                Skills
              </Button>
              <Button
                style={{
                  transition: "background-color 1s",
                }}
                className="projects"
                color="inherit"
                onClick={() => scrollToRef("project-section")}
              >
                Projects
              </Button>
              <Button
                style={{
                  transition: "background-color 1s",
                }}
                className="contact"
                color="inherit"
                onClick={() => scrollToRef("link-section")}
              >
                Contact
              </Button>
              <Button
                className="download"
                color="inherit"
                style={{ background: "red" }}
                rel="noreferrer"
                target="_blank"
                href="https://resume-bucket-03.s3.ap-south-1.amazonaws.com/Harshil_Gupta_Resume.pdf?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCmFwLXNvdXRoLTEiRjBEAiBGDaBYugGyuJt1jvvMUSf9G7c5VrNalWzy9VV0I6puDgIgRATv5rBLjlOleG%2BOGGFPxUmwSmtk0Itkqj9w%2B4u4qM0q7QIIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw0NDY4NTczMDQ2MDkiDEHwOiFzo9%2FYhZXhdSrBAiWdFXyBxz8lxXXypqO%2BlhClCD29ViZ%2BgROH6DpW9WizYsONQyr6alivqgzUAaI9nBcfNqxAPrBn2Lic9ooSvb3bYr5igoYrhQk76Zcajj3e2io3ScuTGbOcbGnjB%2Fnc12MRh%2FV9HYa%2Ba5HNs7N%2FuF37v7TRro88yhmiHnkIDFpfgVR%2BLKzHhyiaDD1VhhUPuqEXDR5ct6blAIPw%2BSRc%2FhnfTyYmhcy4k16ptoMwQGuIxhLAxdCpqvO4HKAjpLGpYiXD%2FnCH9usZYLMYWDgvDVGaOegj0wPBn09yJ6c63hRKMl95WNWEZSXpMEPd%2Fo%2FbWO3RHOdBhFjkrvunALpYBnt94NDOA6erV1h18Tvt55a%2Fjz33rmbSlJtrmakGjWS7BaXCED1Mz7NxkVzJasAaQIFrzyy%2BwudWWc6Sez2C9BGd3TDUn9KvBjq0AtNS8Em%2FJfsH5Idjnh%2FHvP7Vpp8NF13SM%2BjDJSFApgN4lz51JRtU%2FMgyi0edLP4a6%2BY1wcV%2BATJprBZT2pNjOuzvvszAwoesPiiz91asEOHf2v0wx21QlhzW4n3d39uZPK2ySBs2lF1w6P%2B7zh5E%2FnLHu%2BDzCoumsp8I2G05CT4XvSri53c3x0Rf7UWED3ghhCA1ACdDQrKDE%2FjVroTTMsZNUVoUEwIgwgD8JQ6vNKcgvw0Xf9nk3gCFwwa0N8HEuKm%2BLVE38T8Fu2lYC26F5RGIstozVCkLGRPYu0Tp%2BXUjmXPBGG1rAwpAZs2H5nPJmtUbXYrJOWPOGpF7mSQ5%2F9xRGj8nfHdVcRtOh6gH%2BRZau1hAnrPbm%2BarDJgPREa71KCwcYFKLsZL9fzpqbTGY5NbythA&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240315T181738Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAWQCWFLIQR6Q7ZKF7%2F20240315%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Signature=c2ac01d7723ef855bd2f110482e98532ed7050b227bf9b64012303d31e86ca56"
              >
                Download CV
              </Button>
            </Toolbar>
          </Toolbar>
        </AppBar>
      )}
      {Mobile && <SparklesPreview />}
      <div className="box">
        <div className="img" />
        <div className="main">
          <h1 className="name">Harshil Gupta</h1>
          <p>
            I'm a full-stack developer specialised in both frontend and backend
            development for scalable web apps.I have made a variety of MERN
            Stack Applications.
            <br />
            {Mobile && (
              <Button
                style={{
                  color: "white",
                  border: "1px solid grey",
                  margin: "10px",
                }}
                rel="noreferrer"
                target="_blank"
                href="https://resume-bucket-03.s3.ap-south-1.amazonaws.com/Harshil_Gupta_Resume.pdf?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCmFwLXNvdXRoLTEiRjBEAiBGDaBYugGyuJt1jvvMUSf9G7c5VrNalWzy9VV0I6puDgIgRATv5rBLjlOleG%2BOGGFPxUmwSmtk0Itkqj9w%2B4u4qM0q7QIIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw0NDY4NTczMDQ2MDkiDEHwOiFzo9%2FYhZXhdSrBAiWdFXyBxz8lxXXypqO%2BlhClCD29ViZ%2BgROH6DpW9WizYsONQyr6alivqgzUAaI9nBcfNqxAPrBn2Lic9ooSvb3bYr5igoYrhQk76Zcajj3e2io3ScuTGbOcbGnjB%2Fnc12MRh%2FV9HYa%2Ba5HNs7N%2FuF37v7TRro88yhmiHnkIDFpfgVR%2BLKzHhyiaDD1VhhUPuqEXDR5ct6blAIPw%2BSRc%2FhnfTyYmhcy4k16ptoMwQGuIxhLAxdCpqvO4HKAjpLGpYiXD%2FnCH9usZYLMYWDgvDVGaOegj0wPBn09yJ6c63hRKMl95WNWEZSXpMEPd%2Fo%2FbWO3RHOdBhFjkrvunALpYBnt94NDOA6erV1h18Tvt55a%2Fjz33rmbSlJtrmakGjWS7BaXCED1Mz7NxkVzJasAaQIFrzyy%2BwudWWc6Sez2C9BGd3TDUn9KvBjq0AtNS8Em%2FJfsH5Idjnh%2FHvP7Vpp8NF13SM%2BjDJSFApgN4lz51JRtU%2FMgyi0edLP4a6%2BY1wcV%2BATJprBZT2pNjOuzvvszAwoesPiiz91asEOHf2v0wx21QlhzW4n3d39uZPK2ySBs2lF1w6P%2B7zh5E%2FnLHu%2BDzCoumsp8I2G05CT4XvSri53c3x0Rf7UWED3ghhCA1ACdDQrKDE%2FjVroTTMsZNUVoUEwIgwgD8JQ6vNKcgvw0Xf9nk3gCFwwa0N8HEuKm%2BLVE38T8Fu2lYC26F5RGIstozVCkLGRPYu0Tp%2BXUjmXPBGG1rAwpAZs2H5nPJmtUbXYrJOWPOGpF7mSQ5%2F9xRGj8nfHdVcRtOh6gH%2BRZau1hAnrPbm%2BarDJgPREa71KCwcYFKLsZL9fzpqbTGY5NbythA&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240315T181738Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAWQCWFLIQR6Q7ZKF7%2F20240315%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Signature=c2ac01d7723ef855bd2f110482e98532ed7050b227bf9b64012303d31e86ca56"
              >
                Resume
              </Button>
            )}
          </p>
          <img className="mobile-img" />
        </div>
      </div>

      <div
        className="exp-page"
        id="experience-section"
        style={{ backgroundColor: "black" }}
      >
        <div className="work">
          <h2
            style={{ color: "white", textAlign: "center", paddingTop: "40px" }}
          >
            Work History
          </h2>
          <ul className="work-list">
            {workHistory.map((work, index) => {
              const { from, to, role, company, descriptions, skills } = work;
              return (
                <li className="list-item" key={index}>
                  <h3 className="title">
                    {role} | {company}
                  </h3>
                  <p className="duration">
                    {from}-{to}
                  </p>
                  <ul className="work-description">
                    {descriptions.map((desc, index) => {
                      return (
                        <li className="desc-list-item" key={index}>
                          {desc}
                        </li>
                      );
                    })}
                  </ul>
                  <p className="skills">Skills - {skills}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div
        className="skill-page"
        id="skills-section"
        style={{ backgroundColor: "black" }}
      >
        <div className="tech-stack-list">
          <h2
            style={{ color: "white", textAlign: "center", paddingTop: "40px" }}
          >
            Skills
          </h2>
          <ul className="list">
            {techStack.map((tech, index) => {
              return (
                <li key={`tech-stack-number-${index + 1}`} className="item">
                  {tech}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div
        className="proj-page"
        id="project-section"
        style={{ backgroundColor: "black" }}
      >
        <div className="project-main">
          <h2
            className="proj-head"
            style={{ color: "white", textAlign: "center", paddingTop: "40px" }}
          >
            Projects
          </h2>
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
                    <a
                      className="link-item"
                      rel="noreferrer"
                      target="_blank"
                      href={github}
                    >
                      Github
                    </a>
                    <a
                      className="link-item"
                      rel="noreferrer"
                      target="_blank"
                      href={live}
                    >
                      Live
                    </a>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div
        id="link-section"
        style={{ backgroundColor: "black", minHeight: "100vh" }}
      >
        <h2 style={{ color: "white", textAlign: "center", paddingTop: "40px" }}>
          Social Links
        </h2>
        <div className="social-links">
          {links.map((link, index) => {
            const { title, href } = link;
            return (
              <a
                key={index}
                href={href}
                rel="noreferrer"
                target="_blank"
                className="social-links-item"
              >
                {title}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
