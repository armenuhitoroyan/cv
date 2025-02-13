import React from "react";
import styles from "../../style/Blog.module.css";

interface AboutAuthorProps {
  title?: string;
  imageUrl: string;
  avatarUrl: string;
  date: string;
  authorName: string;
  text: string;
  buttonText: string;
  onButtonClick: () => void;
}

const AboutAuthor: React.FC<AboutAuthorProps> = ({
  title,
  imageUrl,
  avatarUrl,
  date,
  authorName,
  text,
  buttonText,
  onButtonClick,
}) => {
  return (
    <div className={`${styles.about_blog}`}>
      <img
        className="rounded-xl mt-10 mb-10"
        src={imageUrl}
        alt="Image not found!"
      />

      <div className={`flex items-center gap-10 ${styles.user_introduce}`}>
        <span className="font-bold">{date}</span>
        <img className="rounded-full" src={avatarUrl} alt="Image not found!" />
        <h6 className="mb-10">{authorName}</h6>
      </div>

      <h3>{title}</h3>

      <p
        style={{
          margin: "0px",
        }}
        className="text-gray-500"
      >
        {text}
      </p>
      <button
        className="bg-white text-violet-950 font-bold py-2 px-4 rounded-xl hover:bg-gray-100 transition"
        onClick={onButtonClick}
      >
        {buttonText}
      </button>
    </div>
  );
};

export default AboutAuthor;
