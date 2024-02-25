import { techStack } from "./Skills.config";
import "./Skills.css";
import NavBar from "../../components/NavBar";

const Skills = () => {
  return (
    <div style={{ backgroundColor: "black", minHeight: "100vh" }}>
      <NavBar />

      <div className="tech-stack-list">
        <h2 style={{color:'white',textAlign:'center'}}>Skills</h2>
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
  );
};

export default Skills;
