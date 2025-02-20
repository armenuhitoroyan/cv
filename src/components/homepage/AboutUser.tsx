import React from "react";
import styles from "../../style/Home4.module.css";
import { AboutUserProps } from "../../interfaces/Types";

export const AboutUser: React.FC<AboutUserProps> = ({ color, onClick }) => {
  return (
    <div className={styles.user_container}>
      <div className="!text-left">
        <h2
          className="text-3xl font-bold"
          style={{
            WebkitTextStroke: `1px ${color}`,
            marginLeft: "0px",
          }}
        >
          HELLO I AM
        </h2>
      </div>
      <h1 className="text-3xl font-bold">Tohidur Hasan</h1>
      <p style={{ color: color }}>
        Graphic Designer, HTML Coder, PHP Programmer and Project Manager
      </p>
      <div
        className={`w-full flex  lg:flex-row justify-between items-center ${styles.freelance_context}`}
      >
        <button
          onClick={() => onClick}
          className="bg-white text-purple-900 font-bold py-2 px-1 rounded-full "
        >
          Start consulting
        </button>
        <ul className="!mt-10">
          <li>Available for Freelance</li>
        </ul>
      </div>
    </div>
  );
};

export default AboutUser;
