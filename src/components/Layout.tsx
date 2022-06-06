import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "../pages/Home";
import About from "../pages/About";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";

export default function Layout() {
  return (
    <Router>
      <NavBar />
      <section id="home">
        <Home />
      </section>
      <section id="projects" style={{ height: "100vh" }}>
        <Projects />
      </section>
      <section id="about" style={{ height: "100vh" }}>
        <About />
      </section>
      <section id="contact" style={{ height: "100vh" }}>
        <Contact />
      </section>
    </Router>
  );
}
