import React from "react";
import { Nav } from "react-bootstrap";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <footer>
        <Nav className="justify-content-center">
          <Nav.Item>
            <Nav.Link
              target="_blank"
              href="https://www.facebook.com/yousef.aboesha.9/"
            >
              <i className="fab fa-facebook"></i>
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link
              target="_blank"
              href="https://www.linkedin.com/in/yousef-aboesha-9b40b4193/"
            >
              <i className="fab fa-linkedin"></i>
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link target="_blank" href="https://twitter.com/_abuAisha">
              <i className="fab fa-twitter"></i>
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link target="_blank" href="https://github.com/YousefAboAisha">
              <i className="fab fa-github"></i>
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <span> جميع الحقوق محفوظة لدى يوسف رشاد أبو عيشة &copy;</span>
      </footer>
    </div>
  );
};

export default Footer;
