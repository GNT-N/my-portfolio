"use client";
import './skill.css';
import React from "react";
import Skill_Bars from "./skill_bars";
import { useEffect, useState } from 'react';
import { Navigation } from "../components/nav";


const Skill_Data = [
    { label: "HTML5", pourcentage: "90%", couleur: "#DD1E2F" },
    { label: "CSS3", pourcentage: "80%", couleur: "#EBB035" },
    { label: "Javascript", pourcentage: "70%", couleur: "#218559" },
    { label: "mySQL", pourcentage: "60%", couleur: "#06A2CB" },
    { label: "PHP", pourcentage: "50%", couleur: "#AB4DD2" },
];

const logos = [
    'html5',
    'css3',
    'javascript',
    'php',
    'bootstrap',
    'chrome',
    'firefox',
    'github',
    'jquery',
    'laragon',
    'next-js',
    'node-js',
    'npm',
    'react',
    'safari',
    'sublime',
    'symfony',
    'terminal',
    'twig',
    'vercel',
    'vscode',
    'webpack',
  ];
  
  export default function Skills() {
    // const [occupiedPositions, setOccupiedPositions] = useState<{ top: number; left: number }[]>([]);
  
    // useEffect(() => {
    //     if (typeof window !== 'undefined') {
    //       const images = document.querySelectorAll<HTMLImageElement>('.fade-in');
  
    //   images.forEach((image, index) => {
    //     const position = getRandomPosition(occupiedPositions);
    //     occupiedPositions.push(position);
  
    //     if (image.style) {
    //       image.style.top = `${position.top}px`;
    //       image.style.left = `${position.left}px`;
    //     }
  
    //     setTimeout(() => {
    //       image.classList.add('active');
    //     }, 200 * index);
    //   });
    // }}, []);

    // const getRandomPosition = (occupied: { top: number; left: number }[]) => {
    //     let position: { top: number; left: number };
    //         const logoSize = 100;
    //         const viewportWidth = window.innerWidth - logoSize;
    //         const viewportHeight = window.innerHeight - logoSize;

    //     do {
    //         position = {
    //             top: getRandomValue(80, viewportHeight),
    //             left: getRandomValue(0, viewportWidth),
    //         };
    //     } while (isPositionOccupied(position, occupied));

    //     return position;
    // };

    // const isPositionOccupied = (position: { top: number; left: number }, occupied: { top: number; left: number }[]) => {
    //     const minDistance = 150;

    //     for (const occupiedPosition of occupied) {
    //         const dx = position.left - occupiedPosition.left;
    //         const dy = position.top - occupiedPosition.top;
    //         const distance = Math.sqrt(dx * dx + dy * dy);

    //         if (distance < minDistance) {
    //             return true;
    //         }
    //     }
    //     return false;
    // };

    // const getRandomValue = (min: number, max: number) => {
    //     return Math.floor(Math.random() * (max - min + 1)) + min;
    // };
    
    
    return (
		<div className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
            <Navigation />
            <div className="container flex items-center justify-center min-h-screen">

                <section>
                    <div
                    className="absolute w-2/6 h-auto rounded-xl skillbars"
                    style={{
                        top: '40%',
                        left: '50%',
                        background: '#1d1d1d',
                        border: '1px solid white',
                        transform: 'translate(-50%, -50%)',
                        zIndex: 2,
                    }}
                    
                    >
                        <Skill_Bars competences={Skill_Data} />
                    </div>
                </section>

                {/* <section>
                {logos.map((logo, index) => (
                    <img
                        key={index}
                        src={`/${logo}.svg`}
                        alt={`Logo ${logo}`}
                        className="fade-in logo"
                        style={{
                            width: '70px',
                            height: '70px',
                            top: `${getRandomValue(0, 100)}%`,
                            left: `${getRandomValue(0, 100)}%`,
                        }}
                    />
                ))}
                </section> */}

            </div>
        </div>
    );
}