import React from "react";
import profile from "../img/profile.jpg";

export default function About() {
  return (
    <div className="about">
      <img className="borderRadius" src={profile} alt="Tory" />
      <p>
        I've always loved a puzzle. As a psychology major at Yale, I was
        fascinated by studies on infants. I was hooked by the challenge of
        trying to understand what humans know at such a young age. After college
        I continued to study human brains by becoming an early childhood
        teacher. I learned a lot and worked hard. Don't let the Play-Doh fool
        you-- teaching kindergarten is serious business. To learn more about
        students with disabilities, I got my Master's in early childhood special
        education while teaching full time. After teaching early childhood
        (pre-k/k/1st) for nine years, I felt ready for a change. I followed my
        love for puzzles and found software engineering. I'm solving problems
        every day. It's been a blast so far, and I can't wait to learn more.
      </p>
    </div>
  );
}
