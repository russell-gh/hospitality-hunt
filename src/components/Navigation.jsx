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
    <nav class="navbar navbar-expand-sm navbar-light bg-light ">
      <a class="navbar-brand mx-3 pt-3" href="#">
        Hospitality Hunt
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto mx-5 ">
          <li class="nav-item active">
            <a
              class="nav-link"
              onClick={() => {
                dispatch(setScreenMode(2));
              }}
            >
              Home
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              onClick={() => {
                dispatch(setScreenMode(8));
              }}
            >
              Job Search
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              onClick={() => {
                dispatch(setScreenMode(7));
              }}
            >
              Freelancer Search
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link "
              onClick={() => {

                dispatch(setScreenMode(5));
              }}>

              Profile
            </a>
          </li>
        </ul>
      </div>
    </nav>

    // <Navbar bg="light" expand="lg">
    //   <Container>
    //     <Navbar.Brand href="#home">Hospitality-Hunt</Navbar.Brand>
    //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //     <Navbar.Collapse id="basic-navbar-nav">
    //       <Nav className="me-auto">
    //         <Nav.Link
    //           onClick={() => {
    //             dispatch(setScreenMode(0));
    //           }}>
    //           Home
    //         </Nav.Link>
    //         <Nav.Link comppnent="">Search for Job</Nav.Link>
    //         <Nav.Link href="#SearchForFreelancer">
    //           Search for freelancer
    //         </Nav.Link>
    //         <Nav.Link href="#link">Edit profile</Nav.Link>
    //       </Nav>
    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar>
  );
};

export default Navigation;
