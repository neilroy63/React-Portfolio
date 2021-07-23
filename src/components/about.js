import React from "react";
import "./about.css";
import reactDom from "react-dom";

function About() {
  return (
    <div class="content-wrapper">
      <header>
        <h1>Neil Roy </h1>
        <h2>
          Full Stack Web Developer <span>(+ Remediation Analyst)</span> 😎{" "}
        </h2>
        <p>
          I am a Web Developer with a passion for new tech and an interest in
          both front-end + back-end architecture.
        </p>
        <p>
          My current day job also allows me to work as a Remediation Analyst for
          Australia's premier Life Insurance Company.
        </p>
      </header>
    </div>
  );
}

export default About;
