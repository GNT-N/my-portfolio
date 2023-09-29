import './skill_bars.css';
import React, { useEffect, useState } from "react";

interface skill_bars {
  label: string;
  pourcentage: string;
  couleur: string;
}

const Skill_Bars: React.FC<{ competences: skill_bars[] }> = ({ competences }) => {
  const [barWidths, setBarWidths] = useState<string[]>([]);

  useEffect(() => {
    const widths = competences.map((competence) => competence.pourcentage);
    setBarWidths(widths);
  }, [competences]);

  return (
    <div>
      {competences.map((competence, index) => (
        <div className="skillbar-clearfix" key={index}>
          <div
            className="skillbar-bar"
            style={{ background: competence.couleur, width: barWidths[index] }}
          >
            <div className="skillbar-content">
              <div className="skillbar-title" style={{ background: competence.couleur }}>
                <span>{competence.label}</span>
              </div>
              <div className="skill-bar-percent">{competence.pourcentage}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skill_Bars;