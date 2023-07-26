import React from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from 'react-scroll';

function Intro() {
  return (
    <Row className="intro">
      <Col
        className="intro-col-left d-flex align-items-center justify-content-center"
        md={12}
      >
        <div className="introduction d-flex flex-column align-items-center">
          <div className="text-center mb-3">
            <h2 className="bold">Hi, I'm Evan</h2>
            <h3 className="medium">I'm a Software Engineer from New York.</h3>
            <h3>Welcome to my portfolio!</h3>
          </div>
          <div className="intro-buttons d-flex justify-content-center">
            <Link to="about">
              <button className="btn semi-bold" style={{marginRight: '10px'}} role="button">
                Learn About Me
              </button>
            </Link>
            <Link to="contact">
            <button className="btn semi-bold" role="button">
              Reach Out
            </button>
            </Link>
          </div>
        </div>
      </Col>
    </Row>
  );
}

export default Intro;
