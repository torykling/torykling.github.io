import React from "react";
import "./App.css";
import { Link, Route } from "react-router-dom";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import github from "./img/github.png";
import linkedin from "./img/linkedin.png";
import mail from "./img/mail.png";

function App() {
  return (
    <div className="App">
      <nav className="nav">
        <h1>Tory Klingenstein</h1>
        <h2>Software Engineer</h2>
        <div className="navBottom">
          <div>
            <Link to="/">Projects</Link> <Link to="/about">About</Link>{" "}
            <Link to="/contact">Contact</Link>{" "}
            <a
              href="https://torykling.github.io/deploy_resume/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </div>
          <div>
            <a
              href="mailto:toryklingenstein@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="icon" src={mail} alt="icon" />
            </a>
            <a
              href="https://www.linkedin.com/in/toryklingenstein/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="icon" src={linkedin} alt="icon" />
            </a>
            <a
              href="https://github.com/torykling"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="icon" src={github} alt="icon" />
            </a>
          </div>
        </div>
      </nav>
      <main>
        <Route path="/" exact render={routerProps => <Projects />} />
        <Route path="/about" exact render={routerProps => <About />} />
        <Route path="/contact" exact render={routerProps => <Contact />} />
      </main>
    </div>
  );
}

export default App;
