import React from "react";
import Slide from "../component/Carousel";
import h from "../pages/Home.module.css";
import Footer from "../component/Footer";
import Gallery from "../component/Gallery";

import Bar from "../component/Nav";
import Example from "../component/Modal";



const Home = () => {
  return (
    <div className={h.man}>
  <Example/>
    <Bar/>
      <Slide />
      <div className={h.home}>
        <h1 className={h.about}>About us</h1>
        <p className={h.msg}>.... A home away from home</p>
      </div>
      <div className={h.cover}>
        <div>
          <img className={h.img} src="/SWISH/RESTUARANT 1.jpg" alt=""></img>
        </div>
        <div className={h.text}>
        <h3 className={h.new}>NEWLY OPENED in December 2022…</h3>
           <p className={h.np}>We welcome our guests to a secured
           environment with high standard services. Your convenience is our
           priority. Our kitchen is open for 24 hours with Nigerian Cuisine and
           Specialties. Restaurant, VIP Bar for your privacy. We offer you an
           environment for private conferences and airport shuttle service
           Specialties. Restaurant, VIP Bar for your privacy. We offer you an
           </p>
        </div>
      </div>
      <Gallery/>
     <Footer/>
    </div>
  );
};

export default Home;
