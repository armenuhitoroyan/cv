import React from "react";
import styles from "../../style/Blog.module.css";

const Advice: React.FC = () => {
  return (
    <div
      className={`${styles.advice} flex justify-center items-center border-purple-300 rounded-2xl`}
    >
      <div
        className={`${styles.image_container} flex justify-center items-center`}
      >
        <img
          src="https://afsu.tohidur.com/img/quote-1.png"
          alt="Img not found!"
        />
      </div>
      <div
        className={`flex-box justify-center items center border-purple-300 rounded-2xl`}
      >
        <h4>
          “ If you've got an idea, start today. There's no better time than now
          to get going. That doesn't mean quit your job ”
        </h4>
        <span>Writing by Jackson Doe</span>
      </div>
    </div>
  );
};

export default Advice;
