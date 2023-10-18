import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import f from "./Footer.module.css";
import { FaFacebook, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className={f.start}>
      <Row className={f.group}>
        <Col className={f.name}>
          <div className={f.body}>
             <Link to="/" >
        <button className={f.btn}>SWISH RESORTS</button>
       </Link>
        <Link to="/"  >
        <button className={f.btn}> ABOUT</button>
      </Link>
        <Link to="/Amenities" >
        <button className={f.btn}>AMENITIES</button>
      </Link>
        <Link to="/Packages" >
        <button className={f.btn}>PACKAGES</button>
      </Link>
        <Link to="/Bookings" >
        <button className={f.btn}>BOOKINGS</button>
      </Link>
          </div>
        </Col>

        <Col className={f.lists}>
          <button className={f.btn}>Contact us</button>

          <p className={f.text}> +2348134067086 </p>
          <p className={f.text}> swishresorts@gmail.com</p>
          <div className={f.icons}>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <button className={f.icon}>
              <FaInstagram color="red" />
            </button>
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
        <button className={f.icon}>
              
              <FaTwitter color="rgb(3, 89, 96)" />
            </button>
      </a>
           
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <button className={f.icon}>
              
            <FaFacebook color="blue" />
          </button>
      </a>
      <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
      <button className={f.icon}>
              
              <FaGoogle color="green" />
            </button>
    </a>
            
          </div>
        </Col>
        <Col className={f.list}>
          <button className={f.btn}>Location</button>
          <p className={f.loc}>
            Plot 40&41, Ejioba Residential Layout, NTA Road, Off Airport Road,
            Oba-Ile, Akure, NIGERIA
          </p>
        </Col>
      </Row>
      <p className={f.rights}>Copyright @ 2023 Swish Resorts Nigeria</p>
    </div>
  );
};

export default Footer;
