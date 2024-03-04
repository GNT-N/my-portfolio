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
        {/* ---------------------------------------------------------------------------------------- */}

        <div style={{ position: "relative" }}>
            <img
                className="carousel-img"
                src="/images/china1.jpg"
                alt="images 2"
            />
            <div className="centered-label">Travel</div>
        </div>

        <div style={{ position: "relative" }}>
            <img
                className="carousel-img"
                src="/images/china2.jpg"
                alt="images 3"
            />
            {/* <div className="centered-label">Hobbies</div> */}
        </div>

        <div style={{ position: "relative" }}>
            <img
                className="carousel-img"
                src="/images/china3.jpg"
                alt="images 4"
            />
            {/* <div className="centered-label">Label 4</div> */}
        </div>

        <div style={{ position: "relative" }}>
            <img
                className="carousel-img"
                src="/images/Vietnam4.jpg"
                alt="Vietnam image"
            />
            {/* <div className="centered-label">Hobbies</div> */}
        </div>

        <div style={{ position: "relative" }}>
            <img
                className="carousel-img"
                src="/images/Vietnam5.jpg"
                alt="Vietnam image"
            />
            {/* <div className="centered-label">Hobbies</div> */}
        </div>

        <div style={{ position: "relative" }}>
            <img
                className="carousel-img"
                src="/images/Vietnam6.jpg"
                alt="Vietnam image"
            />
            {/* <div className="centered-label">Hobbies</div> */}
        </div>

        <div style={{ position: "relative" }}>
            <img
                className="carousel-img"
                src="/images/Vietnam8.jpg"
                alt="Vietnam image"
            />
            {/* <div className="centered-label">Hobbies</div> */}
        </div>

        <div style={{ position: "relative" }}>
            <img
                className="carousel-img"
                src="/images/Vietnam9.jpg"
                alt="Vietnam image"
            />
            {/* <div className="centered-label">Hobbies</div> */}
        </div>

        <div style={{ position: "relative" }}>
            <img
                className="carousel-img"
                src="/images/Boudah.jpg"
                alt="images 3"
            />
            {/* <div className="centered-label">Hobbies</div> */}
        </div>

        <div style={{ position: "relative" }}>
            <img
                className="carousel-img"
                src="/images/Tiger.jpg"
                alt="images 3"
            />
            {/* <div className="centered-label">Hobbies</div> */}
        </div>

        <div style={{ position: "relative" }}>
            <img
                className="carousel-img"
                src="/images/Plovdiv1.jpg"
                alt="Plovdiv image"
            />
            {/* <div className="centered-label">Hobbies</div> */}
        </div>

        <div style={{ position: "relative" }}>
            <img
                className="carousel-img"
                src="/images/Plovdiv2.jpg"
                alt="Plovdiv image"
            />
            {/* <div className="centered-label">Hobbies</div> */}
        </div>

        {/* ---------------------------------------------------------------------------------------- */}

        <div style={{ position: "relative" }}>
            <img
                className="carousel-img"
                src="/images/china2.jpg"
                alt="images 3"
            />
            <div className="centered-label">Hobbies</div>
        </div>

        <div style={{ position: "relative" }}>
            <img
                className="carousel-img"
                src="/images/Turntable2.jpg"
                alt="Turntable image"
            />
            {/* <div className="centered-label">Label 4</div> */}
        </div>

        <div style={{ position: "relative" }}>
            <img
                className="carousel-img"
                src="/images/Tattoo.jpg"
                alt="Tattoo image"
            />
            {/* <div className="centered-label">Label 4</div> */}
        </div>

        <div style={{ position: "relative" }}>
            <img
                className="carousel-img"
                src="/images/BMWS3.jpg"
                alt="BMW image"
            />
            {/* <div className="centered-label">Label 4</div> */}
        </div>

        <div style={{ position: "relative" }}>
            <img
                className="carousel-img"
                src="/images/S1000RR.jpg"
                alt="Moto image"
            />
            {/* <div className="centered-label">Label 4</div> */}
        </div>

        {/* ---------------------------------------------------------------------------------------- */}

        <div style={{ position: "relative" }}>
            <img
                className="carousel-img"
                src="/images/Gamer.jpg"
                alt="Gaming"
            />
            <div className="centered-label">Gaming</div>
        </div>

        <div style={{ position: "relative" }}>
            <img
                className="carousel-img"
                src="/images/Fallout.jpg"
                alt="Fallout images"
            />
            {/* <div className="centered-label">Label 4</div> */}
        </div>

        <div style={{ position: "relative" }}>
            <img
                className="carousel-img"
                src="/images/Cyberpunk2077.jpg"
                alt="Cyberpunk2077 images"
            />
            {/* <div className="centered-label">Label 4</div> */}
        </div>

        <div style={{ position: "relative" }}>
            <img
                className="carousel-img"
                src="/images/Warzone.jpg"
                alt="Warzone images"
            />
            {/* <div className="centered-label">Label 4</div> */}
        </div>

        {/* ---------------------------------------------------------------------------------------- */}
    </Carousel>
);

export default fade;
