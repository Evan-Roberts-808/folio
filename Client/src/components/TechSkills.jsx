import React, {useState, useEffect, useRef} from "react";
import { Row } from "react-bootstrap";

function TechSkills() {

  const frontendRef = useRef(null);
  const backendRef = useRef(null);
  const creativeRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            animateInternalRows();
            setHasAnimated(true);
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    if (frontendRef.current && backendRef.current && creativeRef.current) {
      observer.observe(frontendRef.current);
      observer.observe(backendRef.current);
      observer.observe(creativeRef.current);
    }

    return () => {
      if (frontendRef.current && backendRef.current && creativeRef.current) {
        observer.unobserve(frontendRef.current);
        observer.unobserve(backendRef.current);
        observer.unobserve(creativeRef.current);
      }
    };
  }, [hasAnimated]);

  const animateInternalRows = () => {
    const rows = [frontendRef.current, backendRef.current, creativeRef.current];
    rows.forEach((row, index) => {
      row.style.visibility = "visible";
      row.classList.add("animate__animated", "animate__fadeIn");
      row.style.animationDelay = `${index * 0.5}s`;
    });
  };

  return (
    <Row className="techskills d-flex align-items-center justify-content-center">
      <div className="tech-skills-container">
        <h2 className="tech-skills-title bold">Technical Skills</h2>
        <Row ref={frontendRef}>
          <h4 className="bold">Frontend Development</h4>
          <h5>
            React · React Routing · React Bootstrap · HTML5 · CSS · JavaScript ·
            jQuery · Responsive Web Design · UI / UX Design
          </h5>
        </Row>
        <hr />
        <Row ref={backendRef}>
          <h4 className="bold">Backend Development</h4>
          <h5>
            Python · Flask · REST APIs · SQLAlchemy · Object Oriented
            Programming · Node.js
          </h5>
        </Row>
        <hr />
        <Row ref={creativeRef}>
          <h4 className="bold">Creative Tools and Visual Communications</h4>
          <h5>
            Adobe Illustrator · Adobe Photoshop · Adobe InDesign · Adobe After
            Effects · Figma · Creative Problem Solving
          </h5>
        </Row>
      </div>
    </Row>
  );
}

export default TechSkills;
