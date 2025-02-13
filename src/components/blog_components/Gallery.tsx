import React from "react";
import styles from "../../style/Blog.module.css";

const Gallery: React.FC = () => {
  return (
    <div className={`${styles.card} mt-4`}>
      <h2 className={styles.cardTitle}>Gallery Photos</h2>
      <div className={styles.divider}></div>
      <div className="grid grid-cols-2 gap-4 mt-4">
        {[5, 6, 7, 8, 9, 10].map((num, index) => (
          <img
            style={{ borderRadius: "15px" }}
            key={index}
            className={styles.galleryImage}
            src={`https://afsu.tohidur.com/img/showcase-${num}.jpg`}
            alt="Image not found"
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
