import React, { useState, useEffect } from "react";

interface SkillData<T> {
  logos: string[];
  skillBarsRef: T | null;
}

function GridLogos<T>({ logos, skillBarsRef }: SkillData<T>) {
  const [logoPositions, setLogoPositions] = useState<
    { left: number; top: number }[]
  >([]);

  useEffect(() => {
    const isMobile = window.innerWidth < 900;

    if (!isMobile) {
      const margin = 100;

      const generateRandomPosition = () => {
        const zoneWidth = 900; // Largeur de la zone d'exclusion
        const zoneHeight = 650; // Hauteur de la zone d'exclusion

        const zoneX = (window.innerWidth - zoneWidth) / 2;
        const zoneY = (window.innerHeight - zoneHeight) / 2;

        let left, top;

        do {
          left = Math.random() * (window.innerWidth - 2 * margin) + margin;
          top = Math.random() * (window.innerHeight - 2 * margin) + margin;
        } while (
          left > zoneX &&
          left < zoneX + zoneWidth &&
          top > zoneY &&
          top < zoneY + zoneHeight
        );

        return { left, top };
      };

      const isOverlapping = (
        pos1: { left: number; top: number },
        pos2: { left: number; top: number }
      ) => {
        const distance = Math.sqrt(
          Math.pow(pos1.left - pos2.left, 2) + Math.pow(pos1.top - pos2.top, 2)
        );
        return distance < 90;
      };

      const newPositions: React.SetStateAction<
        { left: number; top: number }[]
      > = [];

      logos.forEach(() => {
        let position: { left: number; top: number };
        do {
          position = generateRandomPosition();
        } while (newPositions.some((p) => isOverlapping(p, position)));

        newPositions.push(position);
      });

      setLogoPositions(newPositions);

      let logoIndex = 0;
      const interval = setInterval(() => {
        if (logoIndex < logos.length) {
          const logoElement = document.getElementById(`logo-${logoIndex}`);
          if (logoElement) {
            logoElement.classList.add("logo-fade-in");
          }
          logoIndex++;
        } else {
          clearInterval(interval);
        }
      }, 100);
    }
  }, [logos]);

  return (
    <div className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
      <div
        style={{
          display: "grid",
          placeItems: "center",
          width: "100vw",
          height: "100vh",
          position: "relative",
        }}
      >
        <div className="grid grid-cols-10 gap-4">
          {logos.map((logo, index) => (
            <div
              id={`logo-${index}`}
              className="logo-container"
              style={{
                position: "absolute",
                left: logoPositions[index]?.left + "px",
                top: logoPositions[index]?.top + "px",
                transform: "translate(-50%, -50%)",
              }}
              key={index}
            >
              <img
                src={`/logos/${logo}.svg`}
                alt={logo}
                style={{
                  width: "50px",
                  height: "50px",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default GridLogos;
