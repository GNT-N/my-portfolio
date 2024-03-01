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
        {/* ------------------------------------------------------------------------------------------- */}

        <div style={{ position: "relative", width: "100%", height: "100%" }}>
            <img
                className="carousel-img"
                src="/images/gamer.jpg"
                alt="Gaming"
                style={{ objectFit: "cover", width: "100%", height: "auto" }}
            />
            <div className="centered-label">Gaming</div>
        </div>

        <div style={{ position: "relative", width: "100%", height: "100%" }}>
            <img
                style={{ objectFit: "cover", width: "100%", height: "auto" }}
                className="carousel-img"
                src="/images/Cyberpunk2077.jpg"
                alt="Cyberpunk2077 images"
            />
        </div>

        <div style={{ position: "relative", width: "100%", height: "100%" }}>
            <img
                style={{ objectFit: "cover", width: "100%", height: "auto" }}
                className="carousel-img"
                src="/images/Warzone.jpg"
                alt="Warzone images"
            />
        </div>

        {/* ------------------------------------------------------------------------------------------- */}

        <div style={{ position: "relative", width: "100%", height: "100%" }}>
            <img
                style={{ objectFit: "cover", width: "100%", height: "auto" }}
                className="carousel-img"
                src="/images/china1.jpg"
                alt="images 2"
            />
            <div className="centered-label">Travel</div>
        </div>

        <div style={{ position: "relative", width: "100%", height: "100%" }}>
            <img
                style={{ objectFit: "cover", width: "100%", height: "auto" }}
                className="carousel-img"
                src="/images/boudah.jpg"
                alt="Warzone images"
            />
        </div>

        <div style={{ position: "relative", width: "100%", height: "100%" }}>
            <img
                style={{ objectFit: "cover", width: "100%", height: "auto" }}
                className="carousel-img"
                src="/images/plage.jpg"
                alt="Warzone images"
            />
        </div>

        {/* ------------------------------------------------------------------------------------------- */}

        <div style={{ position: "relative", width: "100%", height: "100%" }}>
            <img
                style={{ objectFit: "cover", width: "100%", height: "auto" }}
                className="carousel-img"
                src="/images/china2.jpg"
                alt="images 3"
            />
            <div className="centered-label">Discovery</div>
        </div>

        <div style={{ position: "relative", width: "100%", height: "100%" }}>
            <img
                style={{ objectFit: "cover", width: "100%", height: "auto" }}
                className="carousel-img"
                src="/images/china3.jpg"
                alt="images 4"
            />
        </div>
    </Carousel>
);

export default fade;
