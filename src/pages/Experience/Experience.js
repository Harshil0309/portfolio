import React from "react";
import NavBar from "../../components/NavBar";
import { workHistory } from "./Experience.config";
import "./Experience.css";
const Experience = () => {
  return (
    <div style={{ backgroundColor: "black", minHeight: "100vh" }}>
      <NavBar />
      <div className="work">
        <h2 style={{color:'white',textAlign:'center'}}>Work History</h2>
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
  );
};
export default Experience;
