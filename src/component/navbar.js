import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import b from "../component/Nav.module.css";

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" className={b.example}>
      <Container>
        <Navbar.Brand className={b.brands}>swish resorts</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          
          <Link to="/">
            <button className={b.btn}>ABOUT</button>
          </Link>
          <Link to="/Amenities">
            <button className={b.btn}>AMENITIES</button>
          </Link>
          <Link to="/Packages">
            <button className={b.btn}>PACKAGES</button>
          </Link>
          <Link to="/Bookings">
            <button className={b.btn}>BOOKINGS</button>
          </Link>
        </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;