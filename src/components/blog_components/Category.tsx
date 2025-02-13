import React from "react";
import styles from "../../style/Blog.module.css";

interface CategoryProps {
  linkRef: string;
  refNumber: string | number;
}

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
