import React from "react";
import bookPic from "../../img/bestBooks.png";
import github from "../../img/github.png";

export default function ProjectOne(props) {
  return (
    <div className="projectContainer">
      <img className="borderRadius" src={bookPic} alt="project" />
      <div className="projectLinks">
        <a
          href="https://elastic-lalande-528edc.netlify.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          MERN Stack App
        </a>
        <a
          href="https://github.com/torykling/Best-Books-App"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="icon" src={github} alt="icon" />
        </a>
      </div>
    </div>
  );
}
