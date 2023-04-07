import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
// import logo from "../images/Emerge logo.svg";
import logo from "../images/SaarthiLogo.png";
import "./nav.css";

const Navbarcomponet = () => {
  return (
    <Navbar className="header  fixed-top " expand="lg">
      <Container>
        <Navbar.Brand href="/" className="  ">
          <img src={logo} alt="" className=" logosss" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav
            className="me-auto  justify-content-center  "
            style={{ width: "100%" }}
          >
            <Nav.Link href="/">Home</Nav.Link>
            <NavDropdown
              title="Products"
              id="basic-nav-dropdown"
              className="hed"
            >
              <NavDropdown.Item href="Products">All Products</NavDropdown.Item>
              <NavDropdown.Item href="LevelukK8">Leveluk K8</NavDropdown.Item>
              <NavDropdown.Item href="P2LevelukSD501p">
                Leveluk SD501 Platinum
              </NavDropdown.Item>
              <NavDropdown.Item href="P3LevelukSD501">
                Leveluk SD501
              </NavDropdown.Item>
              <NavDropdown.Item href="P4LevelukSuper501">
                Leveluk Super501
              </NavDropdown.Item>
              <NavDropdown.Item href="P5LevelukJRIV">
                Leveluk JRIV
              </NavDropdown.Item>
              <NavDropdown.Item href="P6LevelukSD501U">
                Leveluk SD501U
              </NavDropdown.Item>
              <NavDropdown.Item href="P7AnespaDX"> Anespa DX</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="download"> Download</Nav.Link>
            <Nav.Link href="healthbenefit"> Health-Benefits</Nav.Link>
            <Nav.Link href="OurTeam"> Team </Nav.Link>
            <Nav.Link href="testimonial"> Testimonial </Nav.Link>
            <Nav.Link href="contect"> Contact-us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <span className="colltoaction ml-5">
          <a href="">
            <span className="fa fa-phone coll "> </span>
            <span className=" number">9575288778</span>
          </a>
        </span>
      </Container>
    </Navbar>
  );
};

export default Navbarcomponet;
