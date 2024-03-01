import React, { useEffect, useState } from "react";

const listItems = [
    "Rigor",
    "Autonomy",
    "Teamwork",
    "Listening skills",
    "High stress tolerance",
    "Great adaptability",
];

const SkillText = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % listItems.length);
        }, 1200);

        return () => clearInterval(interval);
    }, []);

    return (
        <section id="skilltext">
            <div className="carrosuel_text">
                <div className="carousel-container text-white font-bold">
                    {listItems.map((item, index) => (
                        <div
                            key={index}
                            className={`carousel-item ${
                                index === activeIndex ? "active" : ""
                            }`}
                        >
                            <span className="s1">{item}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SkillText;
