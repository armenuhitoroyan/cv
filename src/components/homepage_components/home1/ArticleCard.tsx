import React from "react";
import styles from "../../../style/Homepage.module.css";
import AnimatedButton from "./AnimatedButton";

interface ArticleCardProps {
  image: string;
  commentBadge: string | number;
  dateAndUser: string;
  title: string;
  description: string;
}

const ArticleCard: React.FC<ArticleCardProps> = ({
  image,
  commentBadge,
  dateAndUser,
  title,
  description,
}) => {
  return (
    <div
      style={{ textAlign: "center" }}
      className={`${styles.article_card_container} absolute`}
    >
      <div className={styles.image_container}>
        <img src={image} alt="Article" />
        <div className={styles.comment_badge}>{commentBadge}</div>
      </div>
      <div className={styles.content}>
        <p>{dateAndUser}</p>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <AnimatedButton />
    </div>
  );
};

export default ArticleCard;
