import Home from "../pages/Home";
import About from "../pages/About";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";

export const navigationLinks = [
  { id: "home", name: "Home", component: <Home /> },
  { id: "experience", name: "Experience", component: <Contact /> },
  { id: "projects", name: "Projects", component: <Projects /> },
  { id: "about", name: "About", component: <About /> },
  { id: "contact", name: "Contact", component: <Contact /> },
];
