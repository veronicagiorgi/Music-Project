import {Container,Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { BsBoxArrowRight, BsFillPersonFill } from "react-icons/bs";
import Logo from "../images/logo.png";
import "./Navbar.css";

const NavbarComponent = () => {

  return (
    <header>
      <Navbar bg="white" expand="lg" className="p-0">
        <Container fluid className="p-0">
          <Navbar.Brand href="/">
            <img src={Logo} alt="logo" style={{ width: "7em" }} />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="navbarScroll"
            className="rounded-0 text-white me-2"
            style={{ backgroundColor: "#BA8449" }}
          />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="d-flex align-items-center me-auto my-2 my-lg-0 ms-sm-2 gap-0 gap-sm-3 gap-md-4"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <NavLink
                to="/catalogue"
                className="text-dark me-5 navbarMargin"
                style={{ textDecoration: "none" }}
              >
                Catalogo
              </NavLink>
              <NavLink
                to="/artists"
                className="text-dark me-5 navbarMargin"
                style={{ textDecoration: "none" }}
              >
                Artisti
              </NavLink>
              <NavLink
                to="/category"
                className="text-dark me-5 navbarMargin"
                style={{ textDecoration: "none" }}
              >
                Categorie strumenti
              </NavLink>
              <NavLink
                to="/blog"
                className="text-dark me-5 navbarMargin"
                style={{ textDecoration: "none" }}
              >
                Blog
              </NavLink>
            </Nav>
            <Link to={"/admin"} className="btn">
              <BsFillPersonFill /> <BsBoxArrowRight />
            </Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};
export default NavbarComponent;