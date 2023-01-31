import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import React from "react";

export default function Header() {
  return (
    <>
      <style type="text/css">
        {`
    .dropdown-toggle::after {
      content : none; 
    `}
      </style>

      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Brand href="/">Film Hedge</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <NavDropdown
                title={
                  <span>
                    <i className="bi bi-gear"></i>
                  </span>
                }
                id="collasible-nav-dropdown"
              >
                <NavDropdown.Item href="/production">
                  Production Dashboard
                </NavDropdown.Item>
                <NavDropdown.Item href="/investor">
                  Investor Dashboard
                </NavDropdown.Item>
                <NavDropdown.Item href="/producer">
                  Producer Dashboard
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/document">
                  Document Upload
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown
                title={
                  <span>
                    <i className="bi bi-bell "></i>
                  </span>
                }
                id="collasible-nav-dropdown"
              >
                <Navbar.Text>No New Notifications</Navbar.Text>
              </NavDropdown>

              <NavDropdown
                title={
                  <span className="mr-2">
                    <i className="bi bi-person-circle"></i>
                  </span>
                }
                id="collasible-nav-dropdown"
              >
                <NavDropdown.Item href="/signin">Sign In</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
