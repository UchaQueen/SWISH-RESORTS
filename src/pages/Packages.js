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
  const[second, setSecond] = useState(false);
  const[third, setThird] = useState(false);
  const[fourth, setFourth] = useState(false);
  const[fifth, setFifth] = useState(false);
  const[sixth, setSixth] = useState(false);

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
     
 
  }
  function handleSecond(breakpoint) {
    setFullscreen(breakpoint);
    setSecond(true);
     
 
  }
  function handleThird(breakpoint) {
    setFullscreen(breakpoint);
    setThird(true);
     
 
  }
  function handleFourth(breakpoint) {
    setFullscreen(breakpoint);
    setFourth(true);
     
 
  }
  function handleFifth(breakpoint) {
    setFullscreen(breakpoint);
    setFifth(true);
     
 
  }
  function handleSixth(breakpoint) {
    setFullscreen(breakpoint);
    setSixth(true);
     
 
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
          {values.map((v) => (
            <img src="/SWISH/hotel room.webp" alt="" className={p.img} onClick={() => handleShow(v)}/>
          ))}
            
            <h3 className={p.name}>Royal Deluxe Room</h3>
            <button className={p.price}>N80,000/Night</button>
            <Link to="/Bookings"> <button className={p.book}>Book Now</button>
            </Link>
  
          </div>
          <div className={p.new}>
          {values.map((v) => (
            <img src="/SWISH/hotel room 1.webp" alt="" className={p.img} onClick={() => handleSecond(v)}/>
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
            {values.map((v) => (
              <img src="/SWISH/room 3.webp" alt="" className={p.img} onClick={() => handleThird(v)}/>
            ))}
              <h3 className={p.name}>Exclusive Deluxe Room</h3>
              <button className={p.price}>N50,000/Night</button>
              <Link to="/Bookings"> <button className={p.book}>Book Now</button>
              </Link>
  
            </div>
            <div className={p.new}>
            {values.map((v) => (
              <img src="/SWISH/hotel room 2.webp" alt="" className={p.img} onClick={() => handleFourth(v)}/>
            ))}
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
            {values.map((v) => (
              <img src="/SWISH/room 3.webp" alt="" className={p.img} onClick={() => handleFifth(v)}/>
          ))}
              <h4 className={p.name}>Double Bed Master Room</h4>
              <button className={p.price}>N45,000/Night</button>
              <Link to="/Bookings"> <button className={p.book}>Book Now</button>
              </Link>
  
            </div>

            <div className={p.new}>
            {values.map((v) => (
              <img src="/SWISH/hotel room 2 beds.webp" alt="" className={p.img} onClick={() => handleSixth(v)}/>
          ))}
            
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
      {/*  royal deluxe */}
      <Modal  className={m.mbg} show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title className={m.tittle}>ROYAL DELUXE ROOM </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <div className={m.container}>
      <div className={m.cover}> 
     
      <img  className={m.img} src="/SWISH/hotel room.webp" alt="room"></img>
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

      </ul>
      </div>
      </div>
      </Modal.Body>
    </Modal>
     {/*  Superior Deluxe Room*/}
      <Modal  className={m.mbg} show={second} fullscreen={fullscreen} onHide={() => setSecond(false)}>
      <Modal.Header closeButton>
        <Modal.Title className={m.tittle}>SUPERIOR DELUXE ROOM </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <div className={m.container}>
      <div className={m.cover}> 
     
      <img  className={m.img} src="/SWISH/hotel room 1.webp" alt="room"></img>
      </div>
      <div className={m.aesthetics}>
      <h2>Room Aesthetics</h2>
      <ul >
      <li>Mini-Master bed</li>
      <li>LG 62inches Television</li>
      <li>Bath-tub</li>
      <li>Mini-Office</li>
      </ul>
      </div>
      </div>
      </Modal.Body>
    </Modal>
     {/* Exclusive Deluxe Room */}
      <Modal  className={m.mbg} show={third} fullscreen={fullscreen} onHide={() => setThird(false)}>
      <Modal.Header closeButton>
        <Modal.Title className={m.tittle}>EXCLUSIVE DELUXE ROOM </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <div className={m.container}>
      <div className={m.cover}> 
     
      <img  className={m.img} src="/SWISH/hotel room 3.webp" alt="room"></img>
      </div>
      <div className={m.aesthetics}>
      <h2>Room Aesthetics</h2>
      <ul >
      <li>Mini-Master bed</li>
      <li>LG 62inches Television</li>
      <li>Bath-tub</li>
      <li>Mini-Office</li>
      </ul>
      </div>
      </div>
      </Modal.Body>
    </Modal>
     {/*  Standard Deluxe Room */}
      <Modal  className={m.mbg} show={fourth} fullscreen={fullscreen} onHide={() => setFourth(false)}>
      <Modal.Header closeButton>
        <Modal.Title className={m.tittle}>STANDARD DELUXE ROOM </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <div className={m.container}>
      <div className={m.cover}> 
     
      <img  className={m.img} src="/SWISH/hotel room 2.webp" alt="room"></img>
      </div>
      <div className={m.aesthetics}>
      <h2>Room Aesthetics</h2>
      <ul >
      <li>Master bed</li>
      <li>LG 42inches Television</li>
      <li>Shower</li>
      </ul>
      </div>
      </div>
      </Modal.Body>
    </Modal>
     {/*  double master bed */}
      <Modal  className={m.mbg} show={fifth} fullscreen={fullscreen} onHide={() => setFifth(false)}>
      <Modal.Header closeButton>
        <Modal.Title className={m.tittle}>DOUBLE MASTER BED </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <div className={m.container}>
      <div className={m.cover}> 
     
      <img  className={m.img} src="/SWISH/room 3.webp" alt="room"></img>
      </div>
      <div className={m.aesthetics}>
      <h2>Room Aesthetics</h2>
      <ul >
      <li>Master bed</li>
      <li>LG 42inches Television</li>
      <li>Shower</li>
      <li>Large and Medium Towels</li>    
      <li>Mini-Office</li>
      </ul>
      </div>
      </div>
      </Modal.Body>
    </Modal>
     {/*  double standard bed */}
      <Modal  className={m.mbg} show={sixth} fullscreen={fullscreen} onHide={() => setSixth(false)}>
      <Modal.Header closeButton>
        <Modal.Title className={m.tittle}>DOUBLE STANDARD BED </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <div className={m.container}>
      <div className={m.cover}> 
     
      <img  className={m.img} src="/SWISH/hotel room 2 beds.webp" alt="room"></img>
      </div>
      <div className={m.aesthetics}>
      <h2>Room Aesthetics</h2>
      <ul >
      <li>Master bed</li>
      <li>LG 42inches Television</li>
      <li>Shower</li>
    
      </ul>
      </div>
      </div>
      </Modal.Body>
    </Modal>
    </div>
  );
};

export default Packages;
