import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import './Header.css'

const Header = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <div className="d-flex align-items-center">
            <img className="header-img" src="https://www.kindpng.com/picc/m/42-423529_the-one-web-technology-web-technology-logo-hd.png" alt="" />
            <h2 className="text-dark ms-2"><Link className="text-decoration-none text-white" to='/'>Web Technology</Link></h2>
          </div>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            </Nav>
            <Nav>
              <Link className="text-decoration-none text-white" to='/'>Home</Link>
              <Link className="text-decoration-none text-white" to='/course'>Course</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
