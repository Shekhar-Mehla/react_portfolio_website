import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container, Button, Form } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar bg="light" expand="lg" className="shadow-lg header-animation">
      <Container>
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <div className="d-flex flex-column">
            <h2 className="mb-0">SHEKHAR SINGH</h2>
            <div className="text-muted">Software Engineer</div>
          </div>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/Home">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/Skills">
              Skills
            </Nav.Link>
            <Nav.Link as={Link} to="/projects">
              Projects
            </Nav.Link>
            <Nav.Link as={Link} to="/About">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/Contact">
              Contact
            </Nav.Link>
          </Nav>
          <Form className="d-flex align-items-center ml-auto"></Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
