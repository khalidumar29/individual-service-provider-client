import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "./../../../images/logo.png";

const Header = () => {
  return (
    <header>
      <Navbar bg='light' expand='lg'>
        <Container>
          <Navbar.Brand href='#home'>
            <img style={{ height: "60px" }} src={logo} alt='' />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto'>
              <Nav.Link
                style={{ color: "black", fontWeight: 450, fontSize: "18px" }}
                href='#home'
              >
                Home
              </Nav.Link>
              <Nav.Link
                style={{ color: "black", fontWeight: 450, fontSize: "18px" }}
                href='#link'
              >
                Blog
              </Nav.Link>
              <Nav.Link
                style={{ color: "black", fontWeight: 450, fontSize: "18px" }}
                href='#link'
              >
                About
              </Nav.Link>
              <Nav.Link
                style={{ color: "black", fontWeight: 450, fontSize: "18px" }}
                href='#link'
              >
                Login
              </Nav.Link>
              <Nav.Link
                style={{ color: "black", fontWeight: 450, fontSize: "18px" }}
                href='#link'
              >
                Sing Up
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
