import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import './Header.css'
import logo from "../../../images/web-logo.png"
import Toggle from "../Toggle/Toggle";

const Header = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
        <Container>
          <div className="d-flex align-items-center">
            <img className="header-img" src={logo} alt="" />
            <h2 className="text-dark ms-2"><Link className="text-decoration-none text-white" to='/'>Web Technology</Link></h2>
          </div>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            </Nav>
            <Nav>
              <Link className="text-decoration-none text-white me-3" to='/'>Home</Link>
              <Link className="text-decoration-none text-white me-3" to='/course'>Course</Link>
              <Link className="text-decoration-none text-white me-3" to='/faq'>FAQ</Link>
              <Link className="text-decoration-none text-white me-3" to='/blog'>Blog</Link>
              <Toggle></Toggle>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
