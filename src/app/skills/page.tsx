"use client";
import React, { useEffect, useRef } from "react";
import { Navigation } from "../components/nav";
import Grid_logos from "../components/grid_logos";

const logos = [
  "html5",
  "css3",
  "javascript",
  "php",
  "twig",
  "sql",
  "typescript",
  "bootstrap",
  "jquery",
  "tailwind",
  "symfony",
  "react",
  "npm",
  "node-js",
  "next-js",
  "webpack",
  "chrome",
  "firefox",
  "safari",
  "github",
  "vercel",
  "laragon",
  "terminal",
  "vscode",
  "sublime",
  "canva",
  "trello",
  "figma",
  "discord",
  "google-meet",
  "google-drive",
  "google-logo-docs",
];

export default function Skills() {
  const skillBarsRef = useRef<null | DOMRect>(null);

  useEffect(() => {
    const skillbarsDiv = document.querySelector(".skillbars");
    if (skillbarsDiv) {
      skillBarsRef.current = skillbarsDiv.getBoundingClientRect();
    }
  }, []);

  return (
    <div className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
      <Navigation />
      <Grid_logos logos={logos} skillBarsRef={skillBarsRef} />
      <div className="skills-bars">
        <div className="m-5 rounded-lg">
          <p className="text-center text-zinc-400">
            <b>Languages</b>
          </p>
          <div className="skill-bar">
            <div className="skill-fill" style={{ width: "100%" }}>
              HTML
            </div>
          </div>
          <div className="skill-bar">
            <div className="skill-fill" style={{ width: "90%" }}>
              CSS
            </div>
          </div>
          <div className="skill-bar">
            <div className="skill-fill" style={{ width: "70%" }}>
              JavaScript
            </div>
          </div>
          <div className="skill-bar">
            <div className="skill-fill" style={{ width: "60%" }}>
              PHP
            </div>
          </div>
          <p className="text-center text-zinc-400">
            <b>Frameworks</b>
          </p>
          <div className="skill-bar">
            <div className="skill-fill" style={{ width: "90%" }}>
              Bootstrap
            </div>
          </div>
          <div className="skill-bar">
            <div className="skill-fill" style={{ width: "80%" }}>
              Tailwind
            </div>
          </div>
          <div className="skill-bar">
            <div className="skill-fill" style={{ width: "70%" }}>
              Jquery
            </div>
          </div>
          <div className="skill-bar">
            <div className="skill-fill" style={{ width: "70%" }}>
              REACT
            </div>
          </div>
          <div className="skill-bar">
            <div className="skill-fill" style={{ width: "70%" }}>
              NextJS
            </div>
          </div>
          <div className="skill-bar">
            <div className="skill-fill" style={{ width: "60%" }}>
              Symfony
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
