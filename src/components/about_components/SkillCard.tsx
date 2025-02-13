import React, { useEffect, useState } from "react";
import styles from "../../style/About.module.css";

interface SkillCardProps {
  start: number;
  end: number;
  duration: number; // in milliseconds
  label: string;
  percentage: number;
  skill: string;
  isGridLayout: boolean; // True -> Grid layout, False -> Inline layout
}

// Քարտի width-ը կախված դասավորությունից կախված փոխելու համար

const SkillCard: React.FC<SkillCardProps> = ({
  skill,
  start,
  end,
  duration,
  isGridLayout,
}) => {
  const [progress, setProgress] = useState(start);

  useEffect(() => {
    const stepTime = duration / (end - start);
    let currentProgress = start;

    const interval = setInterval(() => {
      if (currentProgress < end) {
        currentProgress++;
        setProgress(currentProgress);
      } else {
        clearInterval(interval);
      }
    }, stepTime);

    return () => clearInterval(interval);
  }, [start, end, duration]);

  return (
    <div
      className={`${styles.skill_card} ${
        isGridLayout ? styles.grid_layout : styles.inline_layout
      }`}
    >
      <h2 className="text-3xl font-bold">{progress}%</h2>
      <p>{skill}</p>
      <div style={{ width: "100%", height: "100%" }}>
        <div
          className={styles.skills_progress}
          style={{ width: `${progress}%`, background: "#6928e6" }}
        ></div>
      </div>
    </div>
  );
};

export default SkillCard;
