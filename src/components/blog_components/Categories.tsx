import React from "react";
import styles from "../../style/Blog.module.css";
import Category from "./Category";

const Categories: React.FC = () => {
  return (
    <div className={`${styles.card} mt-4`}>
      <h2 className={styles.cardTitle}>Categories</h2>
      <div className={styles.divider}></div>
      {[
        "Graphic Design",
        "UI/UX Design",
        "Creative Studio",
        "Mobile Application",
      ].map((category, index) => (
        <div key={index} className="mt-4">
          <Category linkRef={category} refNumber="10" />
        </div>
      ))}
    </div>
  );
};

export default Categories;
