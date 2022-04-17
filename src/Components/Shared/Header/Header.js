import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import auth from "../../../firebase.init";
import CustomLink from "../CustomLink/CustomLink";
import logo from "./../../../images/logo.png";

const Header = () => {
  const [user] = useAuthState(auth);

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
              <CustomLink
                style={{
                  color: "#6a70ac",
                  fontWeight: 500,
                  fontSize: "18px",
                  marginLeft: "15px",
                  textDecoration: "none",
                }}
                to='/'
              >
                Home
              </CustomLink>
              <CustomLink
                style={{
                  color: "#6a70ac",
                  fontWeight: 500,
                  fontSize: "18px",
                  marginLeft: "15px",
                  textDecoration: "none",
                }}
                to=''
              >
                Blog
              </CustomLink>
              <CustomLink
                style={{
                  color: "#6a70ac",
                  fontWeight: 500,
                  fontSize: "18px",
                  marginLeft: "15px",
                  textDecoration: "none",
                }}
                to=''
              >
                About
              </CustomLink>
              {user ? (
                <>
                  <CustomLink
                    onClick={() => signOut(auth)}
                    style={{
                      color: "#6a70ac",
                      fontWeight: 500,
                      fontSize: "18px",
                      marginLeft: "15px",
                      textDecoration: "none",
                    }}
                    to='/'
                  >
                    Logout
                  </CustomLink>
                </>
              ) : (
                <>
                  <CustomLink
                    o
                    style={{
                      color: "#6a70ac",
                      fontWeight: 500,
                      fontSize: "18px",
                      marginLeft: "15px",
                      textDecoration: "none",
                    }}
                    to='/login'
                  >
                    Login
                  </CustomLink>
                </>
              )}
              {user ? (
                <>
                  <CustomLink
                    style={{
                      display: "none",
                    }}
                    to='/signup'
                  >
                    Sing Up
                  </CustomLink>
                </>
              ) : (
                <>
                  <CustomLink
                    style={{
                      color: "#6a70ac",
                      fontWeight: 500,
                      fontSize: "18px",
                      marginLeft: "15px",
                      textDecoration: "none",
                    }}
                    to='/signup'
                  >
                    Sing Up
                  </CustomLink>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
