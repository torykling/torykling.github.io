import React from "react";
import hangman from "../../img/hangman.png";
import github from "../../img/github.png";

export default function ProjectTwo() {
  return (
    <div className="projectContainer">
      <img className="borderRadius" src={hangman} alt="project" />
      <div className="projectLinks">
        <a
          href="https://torykling.github.io/Hangman/"
          target="_blank"
          rel="noopener noreferrer"
        >
          JavaScript Game
        </a>
        <a
          href="https://github.com/torykling/Hangman"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="icon" src={github} alt="icon" />
        </a>
      </div>
    </div>
  );
}
