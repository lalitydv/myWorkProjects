import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Outlet, Link } from "react-router-dom";

// import logo from "../images/Emerge logo.svg";
import logo from "../images/SaarthiLogo.png";
import "./nav.css";

const Navbarcomponet2 = () => {
  const myFunction = () => {
    window.location.reload();
  };

  return (
    <div>
      <Navbar className="header  fixed-top " expand="lg">
        <Container>
          <Navbar.Brand link="/" className="  ">
            <img src={logo} alt="" className=" logosss" />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav
              className="me-auto  justify-content-center  "
              style={{ width: "100%" }}
            >
              <Link to="/" className="navbra_top" onClick={() => myFunction()}>
                Home
              </Link>
              <NavDropdown
                title="Products"
                id="basic-nav-dropdown"
                className="hed "
              >
                <NavDropdown.Item onClick={() => myFunction()}>
                  <Link className="navbra_top_iner" to="/Products">
                    All Products
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => myFunction()}>
                  <Link className="navbra_top_iner" to="LevelukK8">
                    Leveluk K8
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => myFunction()}>
                  <Link className="navbra_top_iner" to="P2LevelukSD501p">
                    Leveluk SD501 Platinum
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => myFunction()}>
                  <Link className="navbra_top_iner" to="P3LevelukSD501">
                    Leveluk SD501
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => myFunction()}>
                  <Link className="navbra_top_iner" to="P4LevelukSuper501">
                    Leveluk Super501
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => myFunction()}>
                  <Link className="navbra_top_iner" to="P5LevelukJRIV">
                    Leveluk JRIV
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => myFunction()}>
                  <Link className="navbra_top_iner" to="P6LevelukSD501U">
                    {" "}
                    Leveluk SD501U
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => myFunction()}>
                  <Link className="navbra_top_iner" to="P7AnespaDX">
                    {" "}
                    Anespa DX
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>

              <Link
                className="navbra_top"
                to="download"
                onClick={() => myFunction()}
              >
                Download
              </Link>
              <Link
                className="navbra_top"
                to="healthbenefit"
                onClick={() => myFunction()}
              >
                {" "}
                Health-Benefits
              </Link>
              <Link
                className="navbra_top"
                to="OurTeam"
                onClick={() => myFunction()}
              >
                {" "}
                Team{" "}
              </Link>
              <Link
                className="navbra_top"
                to="testimonial"
                onClick={() => myFunction()}
              >
                Testimonial{" "}
              </Link>
              <Link
                className="navbra_top"
                to="contect"
                onClick={() => myFunction()}
              >
                {" "}
                Contact-us
              </Link>
            </Nav>
          </Navbar.Collapse>
          <span className="colltoaction ml-5">
            <a link="">
              <span className="fa fa-phone coll "> </span>
              <span className="number">9575288778</span>
            </a>
          </span>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navbarcomponet2;
