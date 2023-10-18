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
            <img src="/images/gamer.jpg" alt="Flag EN" />
            <div className="centered-label">Gaming</div>
        </div>
        <div style={{ position: "relative" }}>
            <img src="/images/china1.jpg" alt="Flag FR" />
            <div className="centered-label">Travel</div>
        </div>
        <div style={{ position: "relative" }}>
            <img src="/images/china2.jpg" alt="Flag VN" />
            <div className="centered-label">Discovery</div>
        </div>
        <div style={{ position: "relative" }}>
            <img src="/images/china3.jpg" alt="Flag VN" />
            {/* <div className="centered-label">Label 4</div> */}
        </div>
    </Carousel>
);

export default fade;
