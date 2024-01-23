import React from "react";
import g from "../component/Gallery.module.css";
import Carousel from "react-bootstrap/Carousel";

const Gallery = () => {
  return (
    <div>
      <h5 className={g.h}>Gallery</h5>
      <p className={g.p}>...... A peck into our world</p>
      <Carousel interval={3000} className={g.caro}>
        <Carousel.Item>
          <div className={g.card}>
            <div className={g.new}>
              <img src="/SWISH/le-bristol.webp" alt="" className={g.img}></img>
            </div>
            <div className={g.new}>
              <img src="/SWISH/POOL.webp" alt="" className={g.img}></img>
            </div>
            <div className={g.new}>
              <img src="/SWISH/FOOD.webp" alt="" className={g.img}></img>
            </div>
            <div className={g.new}>
              <img
                src="/SWISH/bar.webp" alt="" className={g.img}
              ></img>
            </div>
            <div className={g.new}>
              <img src="/SWISH/RESTUARANT-1.webp" alt="" className={g.img}></img>
            </div>

            <div className={g.new}>
              <img src="/SWISH/RESTUARANT.webp" alt="" className={g.img}></img>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className={g.card}>
            <div className={g.new}>
              <img src="/SWISH/hot 2.jpg" alt="" className={g.img}></img>
            </div>
            <div className={g.new}>
              <img src="/SWISH/food 2.jpg" alt="" className={g.img}></img>
            </div>
            <div className={g.new}>
              <img src="/SWISH/pool 1.jpg" alt="" className={g.img}></img>
            </div>
            <div className={g.new}>
              <img src="/SWISH/hall.jpg" alt="" className={g.img}></img>
            </div>
            <div className={g.new}>
              <img src="/SWISH/spa.jpg" alt="" className={g.img}></img>
            </div>

            <div className={g.new}>
              <img src="/SWISH/RESTUARANT 2.jpg" alt="" className={g.img}></img>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Gallery;
