import React from "react";
import Bar from "../component/Nav";
import Gallery from "../component/Gallery";
import Footer from "../component/Footer";
import p from "./Packages.module.css";
import { Link } from "react-router-dom";
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import m from "../component/modal.module.css"

const Packages = () => {
  const values = [true];
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
    
  }
  return (
    <div>
    
      <Bar />
      <div className={p.home}>
        <h1>Packages</h1>
        <p className={p.msg}>Available Rooms</p>
      </div>
      <div className={p.container}>
        <div className={p.cover}>
          <div className={p.new}>
          {values.map((v, idx) => (
            <img src="/SWISH/hotel room.jpg" alt="" className={p.img} onClick={() => handleShow(v)}/>
          ))}
            
            <h3 className={p.name}>Royal Deluxe Room</h3>
            <button className={p.price}>N80,000/Night</button>
            <Link to="/Bookings"> <button className={p.book}>Book Now</button>
            </Link>
  
          </div>
          <div className={p.new}>
          {values.map((v, idx) => (
            <img src="/SWISH/hotel room 1.jpg" alt="" className={p.img} onClick={() => handleShow(v)}/>
          ))}
                   
            <h3 className={p.name}>Superior Deluxe Room</h3>
            <button className={p.price}>N60,000/Night</button>
            <Link to="/Bookings"> <button className={p.book}>Book Now</button>
            </Link>
  
          </div>
        </div>
        <div className={p.container}>
          <div className={p.cover}>
            <div className={p.new}>
              <img src="/SWISH/hotel room 3.jpg" alt="" className={p.img}></img>
              <h3 className={p.name}>Exclusive Deluxe Room</h3>
              <button className={p.price}>N50,000/Night</button>
              <Link to="/Bookings"> <button className={p.book}>Book Now</button>
              </Link>
  
            </div>
            <div className={p.new}>
              <img src="/SWISH/hotel room 2.jpg" alt="" className={p.img}></img>
              <h3 className={p.name}>Standard Deluxe Room</h3>
              <button className={p.price}>N30,000/Night</button> 
              <Link to="/Bookings"> <button className={p.book}>Book Now</button>
              </Link>
  
            </div>
          </div>
        </div>
        <div className={p.container}>
          <div className={p.cover}>
            <div className={p.new}>
              <img src="/SWISH/room 3.jpg" alt="" className={p.img}></img>
              <h4 className={p.name}>Double Bed Master Room</h4>
              <button className={p.price}>N45,000/Night</button>
              <Link to="/Bookings"> <button className={p.book}>Book Now</button>
              </Link>
  
            </div>

            <div className={p.new}>
              <img src="/SWISH/hotel room 2 beds.jpg" alt="" className={p.img}></img>
              <h4 className={p.name}>Double Bed standard Room</h4>
              <button className={p.price}>N25,000/Night</button>
              <Link to="/Bookings"> <button className={p.book}>Book Now</button>
              </Link>
  
            </div>
          </div>
        </div>
      </div>
      <Gallery />
      <Footer />
      <Modal  className={m.mbg} show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title className={m.tittle}>ROYAL DELUXE ROOM </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <div className={m.container}>
      <div className={m.cover}> 
     
      <img  className={m.img} src="/SWISH/hotel room.jpg" alt="room"></img>
      </div>
      <div className={m.aesthetics}>
      <h2>Room Aesthetics</h2>
      <ul >
      <li>Master bed</li>
      <li>LG 85inches Television</li>
      <li>Bath-tub</li>
      <li>Large and Medium Towels</li>
      <li>Safe</li>
      <li>Courtesy tray</li>
      <li>Full length mirror</li>
      <li>Office</li>
      <li>Lighting</li>
      <li>Office</li>
      </ul>
      </div>
      </div>
      </Modal.Body>
    </Modal>
    </div>
  );
};

export default Packages;
