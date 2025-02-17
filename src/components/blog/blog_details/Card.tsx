import React from "react";
import styles from "../../../style/Blog.module.css";
import { PostedCardProps } from "../../../interfaces/Types";

const Card: React.FC<PostedCardProps> = ({
  text,
  content,
  textAlign = "left",
}) => {
  return (
    <div
      className={styles.card}
      style={{
        textAlign,
        border: "1px solid lightgray",
        background: "transparent",
      }}
    >
      <h2>{text}</h2>
      <a href="#">{content}</a>
    </div>
  );
};

export default Card;
