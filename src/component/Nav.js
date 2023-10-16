import React from "react";
import b from "../component/Nav.module.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const Bar = () => {
  return (
    <div>
    <Navbar expand="lg" className={"bg-body-tertiary"}>
        <Link to="/">
          <button className={b.brand}>SWISH RESORTS</button>
        </Link>

        <Navbar.Toggle className={b.toggle} aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className={b.collapse}>
          <Nav className={b.navlist}>
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
      </Navbar>
    
    </div>
  );
};

export default Bar;
