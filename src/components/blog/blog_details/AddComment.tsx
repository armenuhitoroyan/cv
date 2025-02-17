import React from "react";
import styles from "../../../style/Blog.module.css";
import { CommentProps } from "../../../interfaces/Types";

const AddComment: React.FC<CommentProps> = ({
  name,
  img,
  date,
  aboutAuthor,
  onButtonClick,
}) => {
  return (
    <div className={`flex p-7 gap-5 ${styles.comment}`}>
      <img src={img} alt={`${img} not found!`} />
      <div className="flex-1">
        <div className={`flex justify-between items-start ${styles.user_name}`}>
          <div className="flex flex-col gap-2 mt-7 lg:flex-row">
            <h2 className="text-2xl">{name}</h2>
            <span className="mt-1">{date}</span>
          </div>
          <button
            style={{ width: "70px", height: "30px", background: "#973af1" }}
            className="flex justify-center items-center !mb-5"
            onClick={onButtonClick}
          >
            <span className="text-white">Reply</span>
          </button>
        </div>
        <div>
          <h6>{aboutAuthor}</h6>
        </div>
      </div>
    </div>
  );
};

export default AddComment;
