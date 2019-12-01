import React from "react";
import newsPic from "../../img/topStories.png";
import github from "../../img/github.png";

export default function ProjectThree() {
  return (
    <div className="projectContainer">
      <img className="borderRadius" src={newsPic} alt="project" />
      <div className="projectLinks">
        <a
          href="https://torykling.github.io/Project3/"
          target="_blank"
          rel="noopener noreferrer"
        >
          API News Site
        </a>
        <a
          href="https://github.com/torykling/Project3"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="icon" src={github} alt="icon" />
        </a>
      </div>
    </div>
  );
}
