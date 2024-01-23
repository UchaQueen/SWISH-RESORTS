import React from "react";
import a from "../pages/Amenities.module.css";

import Bar from "../component/Nav";
import {
  FaCar,
  FaConciergeBell,
  FaUserAlt,
  FaUtensils,
  FaWifi,
} from "react-icons/fa";
import { PiCoffee } from "react-icons/pi";
import Gallery from "../component/Gallery";
import Footer from "../component/Footer";
const Amenities = () => {
  return (
    <div>
      <Bar />
      <div className={a.home}>
        <h1 className={a.h1}>Amenities</h1>
        <p className={a.msg}>Providing hospitality the right way</p>
      </div>
      <div className={a.container}>
        <div className={a.card}>
          <div>
            <FaConciergeBell className={a.icon} />
            <h5 className={a.text}>Reception </h5>
          </div>

          <div>
            <FaUserAlt className={a.icon} />
            <h5 className={a.text}>service </h5>
          </div>
          <div>
            <PiCoffee className={a.icon} />
            <h5 className={a.text}> VIP Lounge </h5>
          </div>
          <div>
            <FaUtensils className={a.icon} />
            <h5 className={a.text}>Restuarant</h5>
          </div>
          <div>
            <FaCar className={a.icon} />
            <h5 className={a.text}>24*7 Shuttle </h5>
          </div>
          <div>
            <FaWifi className={a.icon} />
            <h5 className={a.text}>Free WI-FI </h5>
          </div>
        </div>
      </div>
      <div className={a.container}>
        <div className={a.cover}>
          <div className={a.new}>
            <img src="/SWISH/reception.webp" alt="" className={a.img}></img>
            <p className={a.imgtext}>Reception</p>
          </div>
          <div className={a.new}>
            <img src="/SWISH/game room.webp" alt="" className={a.img}></img>
            <p className={a.imgtext}>Game Room</p>
          </div>
          <div className={a.new}>
            <img src="/SWISH/laundry 2.webp" alt="" className={a.img}></img>
            <p className={a.imgtext}>Laundry</p>
          </div>
          <div className={a.new}>
            <img src="/SWISH/food 2.webp" alt="" className={a.img}></img>
            <p className={a.imgtext}>Restuarant</p>
          </div>
        </div>
      </div>
      <br></br>

      <div className={a.container}>
        <div className={a.cover}>
          
        <div className={a.new}>
        <img src="/SWISH/hotel room 1.webp" alt="" className={a.img}></img>
        <p className={a.imgtexts}>Room</p>
      </div>
          <div className={a.new}>
            <img src="/SWISH/bar.webp" alt="" className={a.img}></img>
            <p className={a.imgtexts}>Bar</p>
          </div>
          <div className={a.new}>
            <img src="/SWISH/spa.webp" alt="" className={a.img}></img>
            <p className={a.imgtexts}>Spa</p>
          </div>
          <div className={a.new}>
            <img src="/SWISH/gym.webp" alt="" className={a.img}></img>
            <p className={a.imgtexts}>Gym</p>
          </div>
        </div>
      </div>
      <br></br>

      <Gallery />
      <Footer />
    </div>
  );
};

export default Amenities;
