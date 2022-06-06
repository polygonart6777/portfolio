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
      <section id="projects">
        <Projects />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </Router>
  );
}
