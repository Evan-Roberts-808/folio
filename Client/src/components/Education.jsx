import React, {useState, useEffect, useRef} from 'react'
import {Row} from 'react-bootstrap'

function Education() {

  const flatironRef = useRef(null);
  const sunyRef = useRef(null);
  const mvccRef = useRef(null);
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

    if (flatironRef.current && sunyRef.current && mvccRef.current) {
      observer.observe(flatironRef.current);
      observer.observe(sunyRef.current);
      observer.observe(mvccRef.current);
    }

    return () => {
      if (flatironRef.current && sunyRef.current && mvccRef.current) {
        observer.unobserve(flatironRef.current);
        observer.unobserve(sunyRef.current);
        observer.unobserve(mvccRef.current);
      }
    };
  }, [hasAnimated]);

  const animateInternalRows = () => {
    const rows = [flatironRef.current, sunyRef.current, mvccRef.current];
    rows.forEach((row, index) => {
      row.style.visibility = 'visible';
      row.classList.add('animate__animated', 'animate__fadeIn');
      row.style.animationDelay = `${index * 0.5}s`;
    });
  };

  return (
    <Row className="education d-flex align-items-center justify-content-center">
      <div className="education-container">
        <h2 className="education-title bold">Education</h2>
        <Row ref={flatironRef}>
          <h4 className="bold">Software Engineer Program</h4>
          <h5 className="semi-bold">Flatiron School</h5>
          <h5 className="extra-light">Apr 2023 - Jul 2023</h5>  
          <h5 className="semi-bold">Key Technologies: <span className="light">JavaScript, React, Python, Flask</span></h5>
        </Row>
        <hr />
        <Row ref={sunyRef}>
          <h4 className="bold">BAS, Graphic Design</h4>
          <h5 className="semi-bold">State University of New York College of Agriculture and Technology at Cobleskill</h5>
          <h5 className="extra-light">Aug 2019 - Dec 2021</h5>
          <h5 className="semi-bold">Key Technologies: <span className="light">Adobe Creative Suite, HTML5, CSS, JavaScript, jQuery</span></h5>
        </Row>
        <hr />
        <Row ref={mvccRef}>
          <h4 className="bold">AAS, Graphic Communication</h4>
          <h5 className="semi-bold">Mohawk Valley Community College</h5>
          <h5 className="extra-light">Aug 2016 - May 2019</h5>
          <h5 className="semi-bold">Key Technologies: <span className="light">Adobe Creative Suite</span></h5>
        </Row>
      </div>
    </Row>
  )
}

export default Education