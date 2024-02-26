import "./App.css";
import Home from "./pages/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Skills from "./pages/Skills/Skills";
import Experience from "./pages/Experience/Experience";
import Project from "./pages/Projects/Projects";
import Links from "./pages/Links/Links";
import Device from "./utils/Device";
import { projects } from "./pages/Projects/Projects.config";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          {/* <Route path="/" element={Device(Home)} />
          <Route path="/skills" element={Device(Skills)} />
          <Route path="/experience" element={Device(Experience)} />
          <Route path="/project" element={Device(Project)} />
          <Route path="/contact" element={Device(Links)} /> */}
          <Route path="/" exact Component={Home}  />
          <Route path="/skills" exact Component={Skills}  />
          <Route path="/experience" exact Component={Experience} />
          <Route path="/project" exact Component={Project}  />
          <Route path="/contact" exact Component={Links}  />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
