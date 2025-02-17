import React from "react";
import styles from "../../style/Blog.module.css";
import { CategoryProps } from "../../interfaces/Types";


const Category: React.FC<CategoryProps> = ({ linkRef, refNumber }) => {
  return (
    <div
      className={`w-full flex  items-center justify-between ${styles.categories} ${styles.link} `}
    >
      <a className="!text-black" href={linkRef}>
        {linkRef}
      </a>
      {/* Corrected `href` */}
      <span>{refNumber}</span>
    </div>
  );
};

export default Category;
