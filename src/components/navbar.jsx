import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


export default function NavbarComponent() {
  return (
    <div > 
        <div>
      <Navbar expand="lg" className="bg-dark  ">
        <Container>
          <Navbar.Brand href="#home" className="text-light">Epibooks</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto ">
              <Nav.Link href="#home" className="text-light">Home</Nav.Link>
              <Nav.Link href="#link" className="text-light">About</Nav.Link>
              <Nav.Link href="#link" className="text-light">Browse</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      </div>
    </div>
  );
}
