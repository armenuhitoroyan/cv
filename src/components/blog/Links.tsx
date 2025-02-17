import React from "react";
import styles from "../../style/Blog.module.css";

const Links: React.FC = () => {
  return (
    <div className={`${styles.card} mt-4`}>
      <h2 className={styles.cardTitle}>Meta Links</h2>
      <div className={styles.divider}></div>
      {/* Meta Links */}
      {["Log in", "Entries RSS", "Comments RSS", "WordPress.org"].map(
        (link, index) => (
          <div key={index} className="mt-4">
            <a style={{ color: "black" }} href="#">
              {link}
            </a>
          </div>
        )
      )}
    </div>
  );
};

export default Links;
