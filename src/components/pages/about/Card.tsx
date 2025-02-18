import React, { useEffect, useState } from "react";
import styles from "../../../style/About.module.css";
import { SkillCardProps } from "../../../interfaces/Types";

// Քարտի width-ը դասավորությունից կախված փոխելու համար

const Card: React.FC<SkillCardProps> = ({
  skill,
  start,
  end,
  duration,
  isGridLayout,
}) => {
  const [progress, setProgress] = useState(start);

  useEffect(() => {
    // Հաշվում ենք յուրաքանչյուր քայլի տևողությունը
    const stepTime = duration / (end - start);

    // Սկսում ենք start-ից
    let currentProgress = start;

    // Ստեղծում ենք ինտերվալ, որը կթարմացնի progress-ը
    const interval = setInterval(() => {
      if (currentProgress < end) {
        currentProgress++; // Ավելացնում ենք ընթացիկ արժեքը
        setProgress(currentProgress); // Թարմացնում ենք state-ը
      } else {
        clearInterval(interval); // Երբ հասնում ենք "end"-ին, կանգնեցնում ենք ինտերվալը
      }
    }, stepTime); // Յուրաքանչյուր քայլը կատարվում է "stepTime" ժամանակային ինտերվալում

    // Վերադարձի ֆունկցիան մաքրում է ինտերվալը, երբ կոմպոնենտը ապամոնտաժվում է
    return () => clearInterval(interval);
  }, [start, end, duration]); // Կախվածությունը ապահովում է, որ useEffect-ը կվերակատարվի, երբ "start", "end" կամ "duration" փոխվի

  return (
    <div
      className={`${styles.skill_card} ${
        isGridLayout ? styles.grid_layout : styles.inline_layout // 1 կամ 2 տողով ցուցադրելու համար
      }`}
    >
      <div style={{ width: "100%" }}>
        <div style={{ width: "100%", height: "50px" }} className="flex gap-10">
          <h2 style={{ width: "35%" }} className="text-3xl font-bold mb-10">
            {progress}%
          </h2>
          <p style={{ width: "65%" }}>{skill}</p>
        </div>
        <div>
          <div
            className={styles.skills_progress}
            style={{ width: `${progress}%`, background: "#6928e6" }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Card;
