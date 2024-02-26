import "./Home.css";
import React from "react";
import NavBar from "../../components/NavBar";
import Device from "../../utils/Device.js";

const Home = () => {
  return (
    <div className="home">
      <Device />
      <div className="box">
        <div className="img" />
        <div style={{ flex: "1" }} className="main">
          <h1 className="name">Harshil Gupta</h1>
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
