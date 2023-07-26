import React, { useState, useEffect, useRef } from 'react';
import { Row, Card, Button, Col } from 'react-bootstrap';

function BlogCards() {

  const card1Ref = useRef(null);
  const card2Ref = useRef(null);
  const card3Ref = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    if (card1Ref.current && card2Ref.current && card3Ref.current) {
      observer.observe(card1Ref.current);
      observer.observe(card2Ref.current);
      observer.observe(card3Ref.current);
    }

    return () => {
      if (card1Ref.current && card2Ref.current && card3Ref.current) {
        observer.unobserve(card1Ref.current);
        observer.unobserve(card2Ref.current);
        observer.unobserve(card3Ref.current);
      }
    };
  }, [hasAnimated]);

  useEffect(() => {
    if (hasAnimated) {
      animateBlogCards();
    }
  }, [hasAnimated]);

  const animateBlogCards = () => {
    const cards = [card1Ref.current, card2Ref.current, card3Ref.current];
    for (let i = 0; i < cards.length; i++) {
      const card = cards[i];
      card.classList.add('animate__animated');
      card.style.visibility = 'visible';
      if (i === 0) {
        card.classList.add('animate__fadeInLeft');
      } else if (i === 1) {
        card.classList.add('animate__fadeIn');
      } else if (i === 2) {
        card.classList.add('animate__fadeInRight');
      }
      card.style.animationDelay = `${i * 0.5}s`;
    }
  };

  return (
  <Row>
    <div className="d-flex justify-content-center align-items-center">
    <Col md={4} >
      <Card className="blog-card" ref={card1Ref} style={{ visibility: 'hidden' }}>
          <Card.Img src="https://raw.githubusercontent.com/Evan-Roberts-808/folio/main/.github/images/blogs/scraping.png" />
          <Card.Title>Scraping Dynamically Loaded Content with Selenium and BeautifulSoup</Card.Title>
          <Card.Body>
          <div className="d-flex justify-content-between align-items-center">
            <Card.Text className="bold">Jun 22, 2023</Card.Text>
            <a href="https://medium.com/@robertsevan/scraping-dynamically-loaded-content-with-selenium-and-beautifulsoup-2cb7b067ea6c" target="_blank" rel="noopener noreferrer">
              <button className="btn bold">Read</button>
            </a>
          </div>
        </Card.Body>
        </Card>
        </Col>
        <Col md={4}>
        <Card className="blog-card" ref={card2Ref} style={{ visibility: 'hidden' }}>
          <Card.Img src="https://raw.githubusercontent.com/Evan-Roberts-808/folio/main/.github/images/blogs/pyinquirer.png" />
          <Card.Title>Creating Interactive Command-Line Interfaces with PyInquirer</Card.Title>
          <Card.Body>
          <div className="d-flex justify-content-between align-items-center">
            <Card.Text className="bold">Jun 5, 2023</Card.Text>
            <a href="https://medium.com/@robertsevan/creating-interactive-command-line-interfaces-with-pyinquirer-6074de66fe7d" target="_blank" rel="noopener noreferrer">
              <button className="btn bold">Read</button>
            </a>
          </div>
        </Card.Body>
        </Card>
        </Col>
        <Col md={4}>
        <Card className="blog-card" ref={card3Ref} style={{ visibility: 'hidden' }}>
          <Card.Img src="https://raw.githubusercontent.com/Evan-Roberts-808/folio/main/.github/images/blogs/useeffect.png" />
          <Card.Title>Understanding the useEffect Hook in React</Card.Title>
          <Card.Body>
          <div className="d-flex justify-content-between align-items-center">
            <Card.Text className="bold">May 7, 2023</Card.Text>
            <a href="https://medium.com/@robertsevan/scraping-dynamically-loaded-content-with-selenium-and-beautifulsoup-2cb7b067ea6c" target="_blank" rel="noopener noreferrer">
              <button className="btn bold">Read</button>
            </a>
          </div>
        </Card.Body>
        </Card>
        </Col>
    </div>
  </Row>
  );
}

export default BlogCards;
