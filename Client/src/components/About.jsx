import React from "react";
import { Row, Col } from "react-bootstrap";

function About() {
  return (
    <Row className="about">
      <Col
        className="about-col-left d-flex align-items-center justify-content-center"
        md={6}
        sm={12}
      >
        <div className="about-container">
          <h2 className="about-title bold">About Me</h2>
          <h5 className="semi-bold">Background</h5>
          <p>
            With a background in graphic and web design, I pursued my passion
            for web development by completing a coding bootcamp to expand my
            skillset. I specialize in utilizing React, JavaScript, HTML, CSS,
            Flask, Python, and SQLAlchemy to create intuitive and visually
            appealing web applications.
          </p>
          <hr />
          <h5 className="semi-bold">Goals</h5>
          <p>
            My goal is to build user-friendly experiences that seamlessly blend
            design and functionality. Through continuous learning and
            problem-solving, I strive to stay at the forefront of technology
            trends and deliver innovative solutions.
          </p>
        </div>
      </Col>

      <Col
        className="about-col-right d-flex align-items-center justify-content-center d-none d-md-flex"
        md={6}
      >
        <img className="about-img" src="https://raw.githubusercontent.com/Evan-Roberts-808/folio/main/.github/images/portrait/Me.png" alt="photo-of-me" />
      </Col>
    </Row>
  );
}

export default About;
