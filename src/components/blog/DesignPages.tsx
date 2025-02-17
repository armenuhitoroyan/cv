import React from "react";
import styles from "../../style/Blog.module.css";

const BlogPageCircle: React.FC<{ bgColor: string; icon: string }> = ({
  bgColor,
  icon,
}) => {
  return (
    <div className={`${styles.page_icon} `} style={{ background: bgColor }}>
      <i className={icon} style={{ color: "white", fontSize: "20px" }}></i>
    </div>
  );
};

const DesignPages: React.FC = () => {
  return (
    <div
      className={`w-full flex  items-center gap-5 p-5 justify-between lg:flex-row ${styles.design_container}`}
    >
      <div className=" flex items-center  gap-1 lg:flex-row">
        <span>Posted In:</span>
        <a href="#" rel="noopener noreferrer" className="posted-link">
          {` Graphic Designer, `}
        </a>
        <a href="#" rel="noopener noreferrer" className="posted-link">
          Website Design
        </a>
      </div>
      <div className=" flex   lg:flex-row">
        <BlogPageCircle bgColor="#2052c5" icon="fa-brands fa-facebook-f" />
        <BlogPageCircle
          bgColor="linear-gradient(to right, #2b009a, #da001b, #ff1600, #ff7b00, #fff700)"
          icon="fa-brands fa-instagram"
        />
        <BlogPageCircle bgColor="#2f98e1" icon="fa-brands fa-twitter" />
      </div>
    </div>
  );
};

export default DesignPages;
