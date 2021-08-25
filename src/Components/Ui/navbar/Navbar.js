import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Navbar.module.css";
import classes from "../reviewbar/reviewbar.module.css";
import fire from "../../../firebase/firebase";

const NavBar = (props) => {
  const logoutHandler = () => {
    fire.auth().signOut();
    props.setUser();
  };

  let nav = (
    <Nav.Link as={NavLink} exact to="/login" activeClassName={classes.active}>
      تسجيل الدخول
    </Nav.Link>
  );

  if (props.user) {
    nav = (
      <>
        <Nav.Link
          as={NavLink}
          exact
          to="/home"
          activeClassName={classes.active}
        >
          الرئيسية
        </Nav.Link>

        <Nav.Link
          as={NavLink}
          to="/review/engineering"
          activeClassName={classes.active}
        >
          تقييم
        </Nav.Link>

        <Nav.Link as={NavLink} to="/comments" activeClassName={classes.active}>
          الآراء والتعليقات
        </Nav.Link>

        <Nav.Link
          onClick={logoutHandler}
          as={NavLink}
          to="/login"
          activeClassName={classes.active}
        >
          تسجيل الخروج <i className="fas fa-sign-out-alt"></i>
        </Nav.Link>
      </>
    );
  }

  return (
    <div className="navbar-custom">
      <Navbar
        variant="dark"
        expand="md"
        fixed="top"
        style={{ backgroundColor: "#111" }}
      >
        <Container style={{ backgroundColor: "#111" }}>
          <Navbar.Toggle aria-controls="default-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto"> {nav}</Nav>
          </Navbar.Collapse>
          <Navbar.Brand
            as={NavLink}
            to="/"
            disabled
            style={{ fontWeight: "bolder", fontSize: "25px" }}
          >
            RateUS.org
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
