import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
const Header = () => {
  return (
    <header>
      <Navbar bg="dark" expand="lg" variant="dark" collapseOnSelect>
        <Container>
          <Container fluid>
            <LinkContainer to="/">
              <Navbar.Brand>Electro</Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="ml-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <LinkContainer to="/cart">
                  <Nav.Link>
                    <i className="mr-1 fas fa-shopping-cart"></i>
                    Cart
                  </Nav.Link>
                </LinkContainer>

                <LinkContainer to="/signin">
                  <Nav.Link>
                    <i className="mr-1 fas fa-user"></i>
                    Sign In
                  </Nav.Link>
                </LinkContainer>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
