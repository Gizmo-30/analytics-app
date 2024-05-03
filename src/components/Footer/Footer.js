import React from "react";

// reactstrap components
import { Container, Nav, NavItem, NavLink } from "reactstrap";

function Footer() {
  return (
    <footer className="footer">
      <Container fluid>
        <Nav>
          <NavItem>
            <NavLink target="_blank" href="https://github.com/Gizmo-30">
              Git Hub
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink target="_blank" href="https://www.behance.net/anvaradizov">
              Behance
            </NavLink>
          </NavItem>
        </Nav>
        <div className="copyright">
          © {new Date().getFullYear()} made with{" "}
          <i className="tim-icons icon-heart-2" /> by{" "}
            Anvar Adizov
          for a better web.
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
