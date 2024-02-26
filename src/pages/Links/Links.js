import React from "react";
import NavBar from "../../components/NavBar";
import { links } from "./Links.config";
import "./Links.css";
import Device from "../../utils/Device";
const Links = () => {
  return (
    <div style={{ backgroundColor: "black", minHeight: "100vh" }}>
       <Device />
        <h2 style={{color:'white',textAlign:'center'}}>Social Links</h2>
      <div className="social-links">
        {links.map((link,index) => {
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
  );
};

export default Links;
