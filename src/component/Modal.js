
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import m from "../component/modal.module.css"

function Example() {
  const values = [true];
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }

  return (
    <>
      {values.map((v, idx) => (
        <Button key={idx} className={m.btn} onClick={() => handleShow(v)}>
          Book Now
          {typeof v === 'string' && `below ${v.split('-')[0]}`}
        </Button>
      ))}
      <Modal  className={m.mbg} show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title className={m.tittle}>ROYAL DELUXE ROOM </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className={m.container}>
        <div className={m.cover}> 
      
        <img  className={m.img} src="/SWISH/hotel room.jpg" alt=""></img>
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
    </>
  );
}

export default Example;