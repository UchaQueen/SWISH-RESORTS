import React from "react";
import Carousel from "react-bootstrap/Carousel";
import c from "../component/Carousel.module.css";
import { Link } from "react-router-dom";
const Slide = () => {
  return (
    <div className={c.display}>
      <Carousel indicator={false} controls={false} slide={false}>
        <Carousel.Item>
          <img className={c.welcome} src="/SWISH/POOL.webp" alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className={c.welcome} src="/SWISH/hotel room 2.webp" alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className={c.welcome} src="/SWISH/hall.webp" alt="Second slide" />
        </Carousel.Item>
        
      </Carousel>
      
       <div className={c.div}>
       <h2 className={c.text}>Discover the perfect balance of harmony and comfort.</h2>
       <p className={c.pa}>We are focused on providing our clients with the highest level of quality and excellent customer support</p>
       <Link to="/Bookings">  <button className={c.btn}>For more enquires</button>
       </Link>
    
       </div>
     
    </div> 
  );
};

export default Slide;
