import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.css";

const fade = () => (
    <Carousel
        // animationHandler="fade"
        autoPlay={true}
        interval={3000}
        infiniteLoop={true}
        showStatus={false}
        showThumbs={false}
        // axis="vertical"
    >
        <div style={{ position: "relative" }}>
            <img src="/images/gamer.jpg" alt="images 1" />
            <div className="centered-label">Gaming</div>
        </div>
        <div style={{ position: "relative" }}>
            <img src="/images/china1.jpg" alt="images 2" />
            <div className="centered-label">Travel</div>
        </div>
        <div style={{ position: "relative" }}>
            <img src="/images/china2.jpg" alt="images 3" />
            <div className="centered-label">Discovery</div>
        </div>
        <div style={{ position: "relative" }}>
            <img src="/images/china3.jpg" alt="images 4" />
            {/* <div className="centered-label">Label 4</div> */}
        </div>
    </Carousel>
);

export default fade;
