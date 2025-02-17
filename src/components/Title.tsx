import React from "react";
import styles from "../style/Homepage.module.css";
import { TitleContainerProps } from "../interfaces/Types";

const TitleContainer: React.FC<TitleContainerProps> = ({
  title,
  description,
}) => {
  return (
    <div
      className={`w-full flex-col justify-center md:flex-colum ${styles.title}`}
    >
      <div>
        <img
          style={{ width: "50px", position: "static", margin: "0 auto" }}
          src="src/assets/images/dots-1.png"
          alt="dots-1"
        />
      </div>
      <h5 style={{ color: "#555", fontSize: "18px", fontWeight: "bold" }}>
        {title}
      </h5>
      <h2 style={{ color: "#000", fontSize: "50px", fontWeight: "bold" }}>
        {description}
      </h2>
    </div>
  );
};

export default TitleContainer;
