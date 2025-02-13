import React from "react";
import styles from "../../../style/Blog.module.css";

interface AboutAuthorProps {
  name: string;
  img: string;
  role: string;
  aboutAuthor: string;
}

const AboutAuthorCard: React.FC<AboutAuthorProps> = ({
  name,
  img,
  role,
  aboutAuthor,
}) => {
  return (
    <div
      className={` flex flex-col  p-7 gap-5 lg:flex-row ${styles.about_author_card}`}
      about-author
    >
      <img src={img} alt={`${img} not found!`} className="rounded-xl" />
      <div>
        <div className="flex flex-col  justify-start items-center gap-5 lg:flex-row ">
          <h2 className="text-2xl">{name}</h2>
          <p style={{ color: "white" }} className="!text-white">
            {role}
          </p>
        </div>
        <div>
          <h6>{aboutAuthor}</h6>
        </div>
      </div>
    </div>
  );
};

export default AboutAuthorCard;
