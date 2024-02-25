import "./App.css";
import Home from "./pages/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Skills from "./pages/Skills/Skills";
import Experience from "./pages/Experience/Experience";
import Project from "./pages/Projects/Projects";
import Links from "./pages/Links/Links";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" exact Component={Home} />
          <Route path="/skills" exact Component={Skills} />
          <Route path="/experience" exact Component={Experience} />
          <Route path="/project" exact Component={Project} />
          <Route path="/contact" exact Component={Links} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
