import { techStack } from "./Skills.config";
import "./Skills.css";
import NavBar from "../../components/NavBar";
import Device from "../../utils/Device";

const Skills = () => {
  return (
    <div style={{ backgroundColor: "black", minHeight: "100vh" }}>
     <Device />

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
