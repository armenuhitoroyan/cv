import React from "react";
import styles from "../../style/Home4.module.css";
import Download from "../form/Download";

export const Card: React.FC = () => {
  return (
    <div
      className={`w-full  flex-col items-center justify-center ${styles.card}`}
    >
      <div className={styles.image_container}>
        <div>
          <img src="src/assets/images/630.png" alt="Profile" />
        </div>
      </div>
      <div>
        <h3>Tohidur Hasan</h3>
        <p className={styles.role}>
          Graphic Designer, HTML Coder, and Project Manager
        </p>
        <div className={`${styles.button} flex justify-center`}>
          <Download
            text="Download CV"
            href="/files/Armenuhi Toroyan CV.pdf"
            download="Armenuhi Toroyan CV.pdf"
            color="#white"
            width="300px"
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
