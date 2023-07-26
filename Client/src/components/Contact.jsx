import React from "react";
import { Row, Col } from "react-bootstrap";

function Contact() {
  return (
    <Row className="contact d-flex justify-content-center align-items-center">
      <div className="contact-container">
        <h2 className="contact-title bold">Reach Out</h2>
        <Row>
          <Col xs={12} md={6}>
            <button
              className="btn separation semi-bold"
              role="button"
              onClick={() => {
                const emailAddress = "your.email@example.com";
                window.location.href = `mailto:${emailAddress}`;
              }}
            >
              Send me an Email
            </button>
          </Col>
          <Col xs={12} md={6}>
            <div className="contact-header">
              <h3 className="semi-bold">Socials</h3>
            </div>
            <Row>
              <Col xs={6} md={6} className="text-center">
                <a href="https://github.com/Evan-Roberts-808" target="_blank">
                  <img
                    style={{ width: "50px", marginBottom: "10px" }}
                    src="https://raw.githubusercontent.com/Evan-Roberts-808/folio/046970161bb7c58aef49d66ea3f064c3d7c59530/.github/images/icons/GitHub.svg"
                    alt="GitHub"
                  />
                  <h4>GitHub</h4>
                </a>
              </Col>
              <Col xs={6} md={6} className="text-center">
                <a href="https://medium.com/@robertsevan" target="_blank">
                  <img
                    style={{ width: "50px", marginBottom: "10px" }}
                    src="https://raw.githubusercontent.com/Evan-Roberts-808/folio/046970161bb7c58aef49d66ea3f064c3d7c59530/.github/images/icons/Medium.svg"
                    alt="Medium"
                  />
                  <h4>Medium</h4>
                </a>
              </Col>
            </Row>
            <Row>
              <Col xs={6} md={6} className="text-center">
                <a
                  href="https://www.linkedin.com/in/roberts-evan/"
                  target="_blank"
                >
                  <img
                    style={{ width: "50px", marginBottom: "10px" }}
                    src="https://raw.githubusercontent.com/Evan-Roberts-808/folio/046970161bb7c58aef49d66ea3f064c3d7c59530/.github/images/icons/LinkedIn.svg"
                    alt="LinkedIn"
                  />
                  <h4>LinkedIn</h4>
                </a>
              </Col>
              <Col xs={6} md={6} className="text-center">
                <a href="https://www.behance.net/evanroberts3" target="_blank">
                  <img
                    style={{ width: "50px", marginBottom: "10px" }}
                    src="https://raw.githubusercontent.com/Evan-Roberts-808/folio/9ce697947c2efb54baf1e550fac3975f94b2af33/.github/images/icons/Behance.svg"
                    alt="Behance"
                  />
                  <h4>Behance</h4>
                </a>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </Row>
  );
}

export default Contact;
