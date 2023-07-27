import React from "react";
import { Row, Col, Figure } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Portfolio() {
  const PrevArrow = (props) => {
    const { className, onClick } = props;
    return (
      <div
        className={`slick-arrow custom-prev-arrow ${className}`}
        onClick={onClick}
      />
    );
  };

  const NextArrow = (props) => {
    const { className, onClick } = props;
    return (
      <div
        className={`slick-arrow custom-next-arrow ${className}`}
        onClick={onClick}
      />
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <Row className="portfolio">
      <Col md={12} className="d-none d-md-block">
        <Slider {...settings}>
          <Row>
            <div className="portfolio-container">
              <div className="first-sticker-container">
                <img
                  src="https://raw.githubusercontent.com/Evan-Roberts-808/folio/main/.github/images/icons/RX-78-2.svg"
                  alt="Sticker 1"
                  className="sticker"
                />
              </div>
              <div className="second-sticker-container">
                <img
                  src="https://raw.githubusercontent.com/Evan-Roberts-808/folio/main/.github/images/icons/Chars-Zaku.svg"
                  alt="Sticker 1"
                  className="sticker"
                />
              </div>
              <Row className="center-container">
                <Col md={6}>
                  <Figure>
                    <Figure.Image src="https://raw.githubusercontent.com/Evan-Roberts-808/folio/main/.github/images/sites/gunplapal.png" />
                  </Figure>
                </Col>
                <Col md={6}>
                  <h3 className="bold" style={{ marginTop: "10px" }}>
                    GunplaPal
                  </h3>
                  <h5>Description</h5>
                  <p>
                    GunplaPAL is a dedicated database and collection tracker for
                    Gunpla enthusiasts. Our platform provides a comprehensive
                    collection of Gunpla kits, making it easier for you to
                    explore, track, and manage your collection.
                  </p>
                  <h5>Tech Stack</h5>
                  <p>
                    React · React Router · React-Bootstrap · Flask ·
                    Flask-Restful · SQLAlchemy
                  </p>
                  <div className="button-container">
                    <a href="https://gunplapal.onrender.com" target="_blank">
                      <button className="btn">View Project</button>
                    </a>
                    <a
                      href="https://github.com/Evan-Roberts-808/Gunpla-Pal"
                      target="_blank"
                    >
                      <button className="btn">View Repo</button>
                    </a>
                  </div>
                  <p className="light" style={{ marginTop: "10px" }}>
                    Note: Live site may take a few minutes for server to deploy
                    / fetch data
                  </p>
                </Col>
              </Row>
            </div>
          </Row>
          <Row>
            <div className="portfolio-container">
              <div className="first-sticker-container">
                <img
                  style={{ width: "200px" }}
                  src="https://raw.githubusercontent.com/Evan-Roberts-808/folio/main/.github/images/icons/Chocotonic-1.svg"
                  alt="Sticker 1"
                  className="sticker chocolate-bar"
                />
              </div>
              <div className="second-sticker-container">
                <img
                  style={{ width: "125px" }}
                  src="https://raw.githubusercontent.com/Evan-Roberts-808/folio/main/.github/images/icons/Chocotonic-2.svg"
                  alt="Sticker 1"
                  className="sticker"
                />
              </div>
              <Row className="center-container">
                <Col md={6}>
                  <Figure>
                    <Figure.Image src="https://raw.githubusercontent.com/Evan-Roberts-808/folio/main/.github/images/sites/chocotonic.png" />
                  </Figure>
                </Col>
                <Col md={6}>
                  <h3 className="bold" style={{ marginTop: "10px" }}>
                    Chocotonic
                  </h3>
                  <h5>Description</h5>
                  <p>
                    Chocotonic is a chocolate company with a mission to make a
                    positive impact on the environment and promote
                    sustainability. Our passion for creating delicious chocolate
                    treats goes hand in hand with our commitment to creating a
                    brighter and greener future.
                  </p>
                  <h5>Tech Stack</h5>
                  <p>
                    React · React Router · React-Bootstrap · Flask ·
                    Flask-Restful · Flask-SQLAlchemy
                  </p>
                  <div className="button-container">
                    <a href="https://chocotonic.onrender.com" target="_blank">
                      <button className="btn">View Project</button>
                    </a>
                    <a
                      href="https://github.com/Evan-Roberts-808/Chocotonic"
                      target="_blank"
                    >
                      <button className="btn">View Repo</button>
                    </a>
                  </div>
                  <p className="light" style={{ marginTop: "10px" }}>
                    Note: Live site may take a few minutes for server to deploy
                    / fetch data
                  </p>
                </Col>
              </Row>
            </div>
          </Row>
          <Row>
            <div className="portfolio-container">
              <div className="first-sticker-container">
                <img
                  src="https://raw.githubusercontent.com/Evan-Roberts-808/folio/main/.github/images/icons/Hamburger.svg"
                  alt="Sticker 1"
                  className="sticker"
                />
              </div>
              <div className="second-sticker-container">
                <img
                  src="https://raw.githubusercontent.com/Evan-Roberts-808/folio/main/.github/images/icons/Cocktail.svg"
                  alt="Sticker 1"
                  className="sticker"
                />
              </div>
              <Row className="center-container">
                <Col md={6}>
                  <Figure>
                    <Figure.Image src="https://raw.githubusercontent.com/Evan-Roberts-808/folio/main/.github/images/sites/bitesnbrews.png" />
                  </Figure>
                </Col>
                <Col md={6}>
                  <h3 className="bold" style={{ marginTop: "10px" }}>
                    Bites & Brews
                  </h3>
                  <h5>Description</h5>
                  <p>
                    Recipe / Cocktail site that allows users to browse meal and
                    cocktail recipes and get the ingredient list and directions.
                    Also allows for favoriting and submitting of recipes as well
                    as getting a pairing recommendation.
                  </p>
                  <h5>Tech Stack</h5>
                  <p>React · React Router · React-Bootstrap</p>
                  <div className="button-container">
                    <a
                      href="https://main--splendorous-frangollo-74c2dd.netlify.app"
                      target="_blank"
                    >
                      <button className="btn">View Project</button>
                    </a>
                    <a
                      href="https://github.com/Evan-Roberts-808/Bites-and-Brews"
                      target="_blank"
                    >
                      <button className="btn">View Repo</button>
                    </a>
                  </div>
                  <p className="light" style={{ marginTop: "10px" }}>
                    Note: Live site may take a few minutes for server to deploy
                    / fetch data
                  </p>
                </Col>
              </Row>
            </div>
          </Row>
          <Row>
            <div className="portfolio-container">
              <div className="first-sticker-container">
                <img
                  src="https://raw.githubusercontent.com/Evan-Roberts-808/folio/main/.github/images/icons/Gameboy.svg"
                  alt="Sticker 1"
                  className="sticker gameboy"
                />
              </div>
              <div className="second-sticker-container">
                <img
                  style={{ width: "120px" }}
                  src="https://raw.githubusercontent.com/Evan-Roberts-808/folio/main/.github/images/icons/Pokemon-Blue.svg"
                  alt="Sticker 1"
                  className="sticker"
                />
              </div>
              <Row className="center-container">
                <Col md={6}>
                  <Figure>
                    <Figure.Image src="https://raw.githubusercontent.com/Evan-Roberts-808/folio/main/.github/images/sites/pokedex.png" />
                  </Figure>
                </Col>
                <Col md={6}>
                  <h3 className="bold" style={{ marginTop: "10px" }}>
                    PokeDex
                  </h3>
                  <h5>Description</h5>
                  <p>
                    A Pokemon search app built using PokeApi. Allows users to
                    view all 1000+ Pokemon, search for specific Pokemon, filter
                    by gen. or type, and add Pokemon to their favorites
                  </p>
                  <h5>Tech Stack</h5>
                  <p>HTML / CSS · Vanilla JS · Bootstrap</p>
                  <div className="button-container">
                    <a
                      href="https://evan-roberts-808.github.io/PokeDex/"
                      target="_blank"
                    >
                      <button className="btn">View Project</button>
                    </a>
                    <a
                      href="https://github.com/Evan-Roberts-808/PokeDex"
                      target="_blank"
                    >
                      <button className="btn">View Repo</button>
                    </a>
                  </div>
                  <p className="light" style={{ marginTop: "10px" }}>
                    Note: Live site may take a few minutes for server to deploy
                    / fetch data
                  </p>
                </Col>
              </Row>
            </div>
          </Row>
        </Slider>
      </Col>
      {/* Mobile Layout */}
      <Col md={6} className="d-md-none">
        <div className="portfolio-item">
          <Figure>
            <Figure.Image src="https://raw.githubusercontent.com/Evan-Roberts-808/folio/main/.github/images/sites/gunplapal.png" />
          </Figure>
          <h3 className="bold" style={{ marginTop: "10px" }}>
            GunplaPal
          </h3>
          <h5>Description</h5>
          <p>
            GunplaPAL is a dedicated database and collection tracker for Gunpla
            enthusiasts. Our platform provides a comprehensive collection of
            Gunpla kits, making it easier for you to explore, track, and manage
            your collection.
          </p>
          <h5>Tech Stack</h5>
          <p>
            React · React Router · React-Bootstrap · Flask · Flask-Restful ·
            SQLAlchemy
          </p>
          <div className="button-container">
            <a href="https://gunplapal.onrender.com" target="_blank">
              <button className="btn">View Project</button>
            </a>
            <a
              href="https://github.com/Evan-Roberts-808/Gunpla-Pal"
              target="_blank"
            >
              <button className="btn">View Repo</button>
            </a>
          </div>
          <p className="light" style={{ marginTop: "10px" }}>
            Note: Live site may take a few minutes for server to deploy / fetch
            data
          </p>
        </div>
        <hr />
        <div className="portfolio-item">
          <Figure>
            <Figure.Image src="https://raw.githubusercontent.com/Evan-Roberts-808/folio/main/.github/images/sites/chocotonic.png" />
          </Figure>
          <h3 className="bold" style={{ marginTop: "10px" }}>
            Chocotonic
          </h3>
          <h5>Description</h5>
          <p>
            Chocotonic is a chocolate company with a mission to make a positive
            impact on the environment and promote sustainability. Our passion
            for creating delicious chocolate treats goes hand in hand with our
            commitment to creating a brighter and greener future.
          </p>
          <h5>Tech Stack</h5>
          <p>
            React · React Router · React-Bootstrap · Flask · Flask-Restful ·
            Flask-SQLAlchemy
          </p>
          <div className="button-container">
            <a href="https://chocotonic.onrender.com" target="_blank">
              <button className="btn">View Project</button>
            </a>
            <a
              href="https://github.com/Evan-Roberts-808/Chocotonic"
              target="_blank"
            >
              <button className="btn">View Repo</button>
            </a>
          </div>
          <p className="light" style={{ marginTop: "10px" }}>
            Note: Live site may take a few minutes for server to deploy / fetch
            data
          </p>
        </div>
        <hr />
        <div className="portfolio-item">
          <Figure>
            <Figure.Image src="https://raw.githubusercontent.com/Evan-Roberts-808/folio/main/.github/images/sites/bitesnbrews.png" />
          </Figure>
          <h3 className="bold" style={{ marginTop: "10px" }}>
            Bites & Brews
          </h3>
          <h5>Description</h5>
          <p>
            Recipe / Cocktail site that allows users to browse meal and cocktail
            recipes and get the ingredient list and directions. Also allows for
            favoriting and submitting of recipes as well as getting a pairing
            recommendation.
          </p>
          <h5>Tech Stack</h5>
          <p>React · React Router · React-Bootstrap</p>
          <div className="button-container">
            <a
              href="https://main--splendorous-frangollo-74c2dd.netlify.app"
              target="_blank"
            >
              <button className="btn">View Project</button>
            </a>
            <a
              href="https://github.com/Evan-Roberts-808/Bites-and-Brews"
              target="_blank"
            >
              <button className="btn">View Repo</button>
            </a>
          </div>
          <p className="light" style={{ marginTop: "10px" }}>
            Note: Live site may take a few minutes for server to deploy / fetch
            data
          </p>
        </div>
        <hr />
        <div className="portfolio-item">
          <Figure>
            <Figure.Image src="https://raw.githubusercontent.com/Evan-Roberts-808/folio/main/.github/images/sites/pokedex.png" />
          </Figure>
          <h3 className="bold" style={{ marginTop: "10px" }}>
            PokeDex
          </h3>
          <h5>Description</h5>
          <p>
            A Pokemon search app built using PokeApi. Allows users to view all
            1000+ Pokemon, search for specific Pokemon, filter by gen. or type,
            and add Pokemon to their favorites.
          </p>
          <h5>Tech Stack</h5>
          <p>HTML / CSS · Vanilla JS · Bootstrap</p>
          <div className="button-container">
            <a
              href="https://evan-roberts-808.github.io/PokeDex/"
              target="_blank"
            >
              <button className="btn">View Project</button>
            </a>
            <a
              href="https://github.com/Evan-Roberts-808/PokeDex"
              target="_blank"
            >
              <button className="btn">View Repo</button>
            </a>
          </div>
          <p className="light" style={{ marginTop: "10px" }}>
            Note: Live site may take a few minutes for server to deploy / fetch
            data
          </p>
        </div>
      </Col>
    </Row>
  );
}

export default Portfolio;
