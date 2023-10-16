import React from "react";
import Bar from "../component/Nav";
import Gallery from "../component/Gallery";
import Footer from "../component/Footer";
import p from "./Packages.module.css";
import { Link } from "react-router-dom";

const Packages = () => {
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
            <img src="/SWISH/hotel room.jpg" alt="" className={p.img}></img>
            <h3 className={p.name}>Royal Deluxe Room</h3>
            <button className={p.price}>N80,000/Night</button>
            <Link to="/Bookings"> <button className={p.book}>Book Now</button>
            </Link>
  
          </div>
          <div className={p.new}>
            <img src="/SWISH/hotel room 1.jpg" alt="" className={p.img}></img>
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
    </div>
  );
};

export default Packages;
