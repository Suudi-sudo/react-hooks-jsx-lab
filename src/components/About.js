import React from "react";
import { image } from "../data/data";


const About = () => {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>
        I am a passionate web developer with experience in creating dynamic and responsive web applications. I love exploring new technologies and continuously improving my skills.
      </p>
      <img src={image} alt="I made this" />
    </div>
  );
};

export default About;

