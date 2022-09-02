import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Blog from "./Pages/Blog";
import Work from "./Pages/Work";
import About from "./Pages/About";
import ErrorPage from "./Pages/ErrorPage";

function App() {
  return (
    <Router>
      <nav class="navMenu">
      <a href="/home">Home</a>
      <a href="/Blog">Blog</a>
      <a href="/Work">Work</a>
      <a href="/About">About</a>
      <div class="dot"></div>
    </nav>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/work" element={<Work />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="*" element={<ErrorPage />}/> */}
      </Routes>
    </Router>
  );
}

export default App;
