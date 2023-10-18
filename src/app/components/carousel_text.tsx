import React, { useEffect, useState } from "react";

const listItems = [
    "Rigueur",
    "Autonomie",
    "Travail d'équipe",
    "Sens de l'écoute",
    "Forte résistance au stress",
    "Grande capacité d'adaptation",
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
                <div className="carousel-container text-zinc-400">
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
