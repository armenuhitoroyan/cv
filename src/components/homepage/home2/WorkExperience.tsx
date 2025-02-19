import { useState } from "react";
import styles from "../../../style/Home2.module.css";
import TimeLineData from "../../../assets/files/json/TimeLineData.json";

const timelineData = TimeLineData;

const WorkExperience = () => {
  // Ստեղծում ենք state փոփոխական, որը պահում է ընթացիկ ակտիվ ինդեքսը (սկզբում՝ 0)
  const [activeIndex, setActiveIndex] = useState(0);

  // handlePrev ֆունկցիան անցնում է նախորդ տարրին
  const handlePrev = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex === 0 ? timelineData.length - 1 : prevIndex - 1) // Եթե ընթացիկ ինդեքսը 0 է, անցնում ենք վերջին տարրին  // Հակառակ դեպքում՝ իջեցնում ենք ինդեքսը 1-ով
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === timelineData.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div
      className={`${styles.timelineContainer} flex justify-between p-10 gap-20 lg:flex-rowd mt-10`}
    >
      <div className="flex justify-between lg:flex-row">
        <div className={`gap-10 ${styles.titles}`}>
          <h2 className={styles.header}>Professional Experience</h2>
          <h1 className={styles.title}>Work Experience</h1>
        </div>
        <div
          className={`flex flex-col justify-end gap-5 md:flex-row ${styles.next_preview_btn}`}
        >
          <button className={styles.navButton} onClick={handlePrev}>
            &lt;
          </button>
          <button className={styles.navButton} onClick={handleNext}>
            &gt;
          </button>
        </div>
      </div>
      <div className={styles.timeline}>
        <div className={styles.timelineLine}>
          {timelineData.map((item, index) => (
            <div
              key={index}
              className={`${styles.timelinePoint} ${
                index === activeIndex ? styles.active : ""
              }`}
            ></div>
          ))}
        </div>
        <div className={styles.contentContainer}>
          <div className={styles.contentCard}>
            <h3 className={styles.yearRange}>
              {timelineData[activeIndex].yearRange}
            </h3>
            <p className={styles.role}>{timelineData[activeIndex].role}</p>
            <h4 className={styles.company}>
              {timelineData[activeIndex].company}
            </h4>
            <p className={styles.description}>
              {timelineData[activeIndex].description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
