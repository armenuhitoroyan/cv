import React from "react";
import styles from "../../style/Home3.module.css";
import { DataCard } from "../../interfaces/Types";

const Card: React.FC<DataCard> = ({ description, icon, author, byAuthor }) => {
  return (
    <div
      className={`flex flex-col justify-center items-center gap-10 lg:flex-row ${styles.card_box}`}
    >
      <div
        className={`${styles.advice}  justify-center items-center border-purple-300 rounded-2xl`}
      >
        <h4>{description}</h4>
        <div className="flex justify-center items-center">
          <div
            className={`${styles.image_container} flex justify-center items-center`}
          >
            <img src={icon} alt="Img not found!" />
          </div>
          <div
            className={`flex-box justify-center items center border-purple-300 rounded-2xl`}
          >
            <h2 className="text-black font-bold">{author}</h2>

            <span>{byAuthor}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
