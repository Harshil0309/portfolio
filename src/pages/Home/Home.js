import "./Home.css";
import React from "react";
import NavBar from "../../components/NavBar";
import Device from "../../utils/Device.js"

const Home = () => {
  return (
    <div style={{ backgroundColor: "black", minHeight: "100vh" }}>
      <Device />
      <div className="box" style={{ display: "flex" }}>
        <div className="img"></div>
        <div style={{ flex: "1" }} className="main">
          <h1 style={{ textAlign: "center", color: "red" }}>Harshil Gupta</h1>
          <p>
            I'm a full-stack developer specialised in both frontend and backend
            development for scalable web apps.I have made a variety of MERN
            Stack Applications.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
