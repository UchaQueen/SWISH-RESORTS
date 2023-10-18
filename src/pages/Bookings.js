import React, { useRef }from "react";
import Bar from "../component/Nav";
import Gallery from "../component/Gallery";
import Footer from "../component/Footer";
import b from "./Bookings.module.css";
import { Link } from "@react-email/link";

const Bookings = () => {
  const formRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Information sent, you will be contacted very shortly. Thanks for your patronage ");
    formRef.current.reset();
  };
  return (
    <div>
      <Bar />
      <div className={b.container}>
        <h2 className={b.queries}>Ask For Queries</h2>

        <div className={b.inputcover}>

        <form ref={formRef} onSubmit={handleSubmit}>
          <input type="text" placeholder="Name*" required></input>
          <br></br>
          <br></br>
          <input type="email" placeholder="Email*" required></input>
          <br></br>
          <br></br>
          <textarea type="text" placeholder="message" required></textarea>
          <br></br>
          <br></br>
          <button value="submit" type="submut" className={b.btn}>
            SEND
          </button>
          </form>
        </div>
        
      </div>
      
      <div className={b.cover}>
        <h2>Ask Your Queries</h2>
        <h5 className={b.text}>call us on Telephone</h5>

        <a href="tel:+2348134067086" className={b.num}>
          <h5 className={b.text}>+2348134067086</h5>
        </a>
        <a href="tel:+2348135818098" className={b.num}>
          <h5 className={b.text}>+2348135818098</h5>
        </a>
        <h5 className={b.text}>Or</h5>
        
        <Link href="https://mail.google.com/mail/?view=cm&fs=1&to=swishresorts@example.com&su=SUBJECT&body=BODY&bcc=swish resorts@example.com" >
          
        
        <button className={b.book}>email: swishresort@gmail.com</button>
      </Link>
        
        <br></br><br></br>
        <Link href="https://mail.google.com/mail/?view=cm&fs=1&to=swishresorts@example.com&su=SUBJECT&body=BODY&bcc=swish resorts@example.com">
          
          <button className={b.book}>MAKE A BOOKING</button>
        </Link>
      </div>
      <Gallery />
      <Footer />
    </div>
  );
};

export default Bookings;
