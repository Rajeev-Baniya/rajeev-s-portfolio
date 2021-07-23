import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
const NavBarC = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
      <Container>
        <Navbar.Brand href="#home" className="padding">
          Portfolio
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Nav.Link className="padding" href="#home">
              HOME
            </Nav.Link>
            <Nav.Link className="padding" href="#about">
              ABOUT
            </Nav.Link>
            <Nav.Link className="padding" href="#resume">
              RESUME
            </Nav.Link>
            <Nav.Link className="padding" href="#works">
              WORKS
            </Nav.Link>
            <Nav.Link className="padding" href="#contacts">
              CONTACTS
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBarC;
