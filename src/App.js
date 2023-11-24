import React from "react";
import "./index.css";
import Home from "./routes/Home";
import About from "./routes/About";
import Project from "./routes/project";

import { Route, Routes } from "react-router-dom";
import Education from "./routes/Education";
function App() {
  return (
    <>
      <Routes>
        <Route path="/RPortfolio" element={<Home />} />
        <Route path="/project" element={<Project />} />
        <Route path="/about" element={<About />} />
        <Route path="/Education" element={<Education />} />
      </Routes>
    </>
  );
}

export default App;
