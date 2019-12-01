import React from "react";
import ProjectOne from "./projects/ProjectOne";
import ProjectTwo from "./projects/ProjectTwo";
import ProjectThree from "./projects/ProjectThree";

export default function Projects() {
  return (
    <div className="projectsContainer">
      <ProjectOne />
      <ProjectTwo />
      <ProjectThree />
    </div>
  );
}
