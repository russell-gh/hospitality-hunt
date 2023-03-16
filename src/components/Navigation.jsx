import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { setScreenMode } from "../features/hospitality/hospitalitySlice";
import SearchForJob from "./SearchForJob";
import { useDispatch } from "react-redux";


const Navigation = () => {
  const dispatch = useDispatch();

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Hospitality-Hunt</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              onClick={() => {
                dispatch(setScreenMode(0));
              }}>
              Home
            </Nav.Link>
            <Nav.Link comppnent="">Search for Job</Nav.Link>
            <Nav.Link href="#SearchForFreelancer">
              Search for freelancer
            </Nav.Link>
            <Nav.Link href="#link">Edit profile</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
