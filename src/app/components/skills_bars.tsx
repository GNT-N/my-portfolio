import React, { useEffect, useRef } from "react";

interface SkillBarProps {
  percentage: number;
  label: string;
}

const SkillBar: React.FC<SkillBarProps> = ({ percentage, label }) => {
  const skillBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (skillBarRef.current) {
      skillBarRef.current.style.width = `${percentage}%`;
    }
  }, [percentage]);

  return (
    <div className="skill-bar">
      <div className="skill-fill" ref={skillBarRef}>
        {label} - {percentage}%
      </div>
    </div>
  );
};

export default SkillBar;
