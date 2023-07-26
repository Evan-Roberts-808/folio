import React from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-scroll';

function Header() {
  return (
    <Navbar className="navbar" fixed="top" expand="md">
    <Container>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
      <Nav>
        <Nav.Item style={{cursor: 'pointer'}}>
          <Nav.Link as={Link} to="intro" linear>
            Intro
          </Nav.Link>
        </Nav.Item>
        <Nav.Item style={{cursor: 'pointer'}}>
          <Nav.Link as={Link} to="about" linear>
            About
          </Nav.Link>
        </Nav.Item>
        <Nav.Item style={{cursor: 'pointer'}}>
          <Nav.Link as={Link} to="techskills" linear>
            Tech Skills
          </Nav.Link>
        </Nav.Item>
        <Nav.Item style={{cursor: 'pointer'}}>
          <Nav.Link as={Link} to="portfolio" linear>
            Portfolio
          </Nav.Link>
        </Nav.Item>
        <Nav.Item style={{cursor: 'pointer'}}>
          <Nav.Link as={Link} to="education" linear>
            Education
          </Nav.Link>
        </Nav.Item>
        <Nav.Item style={{cursor: 'pointer'}}>
          <Nav.Link as={Link} to="blog" linear>
            Blog
          </Nav.Link>
        </Nav.Item>
        <Nav.Item style={{cursor: 'pointer'}}>
          <Nav.Link as={Link} to="contact" linear>
            Contact
          </Nav.Link>
        </Nav.Item>
      </Nav>
      </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
