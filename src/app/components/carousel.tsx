import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.css";

const fade = () => (
  <Carousel
    animationHandler="fade"
    autoPlay={true}
    interval={3000}
    infiniteLoop={true}
    showStatus={false}
    showThumbs={false}
    showIndicators={false}
  >
    <div>
      <img src="/flags/flag-en.svg" alt="Flag EN" />
    </div>
    <div>
      <img src="/flags/flag-fr.svg" alt="Flag FR" />
    </div>
    <div>
      <img src="/flags/flag-vn.svg" alt="Flag VN" />
    </div>
  </Carousel>
);

export default fade;
