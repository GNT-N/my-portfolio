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
          <div className="skill-bar">
            <div className="skill-fill" style={{ width: "90%" }}>
              HTML - 90%
            </div>
          </div>
          <div className="skill-bar">
            <div className="skill-fill" style={{ width: "80%" }}>
              HTML - 80%
            </div>
          </div>
          <div className="skill-bar">
            <div className="skill-fill" style={{ width: "70%" }}>
              HTML - 70%
            </div>
          </div>
          <div className="skill-bar">
            <div className="skill-fill" style={{ width: "60%" }}>
              HTML - 60%
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
