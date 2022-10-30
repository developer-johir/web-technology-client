import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import './Header.css'
import logo from "../../../images/web-logo.png"
import Toggle from "../Toggle/Toggle";
import { Button, Image } from 'react-bootstrap';
import { FaUser } from 'react-icons/fa';
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }

  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
        <Container>
          <div className="d-flex align-items-center">
            <Link to='/'><img className="header-img" src={logo} alt="" /></Link>
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

                        <>
                            {
                                user?.uid ?
                                    <>
                                        <span>{user?.displayName}</span>
                                        <Button variant="light" onClick={handleLogOut}>Log out</Button>
                                    </>
                                    :
                                    <>
                                        <Link className="text-decoration-none text-white me-3" to='/login'>Login</Link>
                                        <Link className="text-decoration-none text-white me-3" to='/register'>Register</Link>
                                    </>
                            }
                        </>

                        <Link className="text-decoration-none text-white me-3" to='/profile' href="#memes">
                            {user?.photoURL ?
                                <Image
                                    style={{ height: '30px' }}
                                    roundedCircle
                                    src={user?.photoURL}>
                                </Image>
                                : <FaUser></FaUser>
                            }
                        </Link>

                        <Toggle></Toggle>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
