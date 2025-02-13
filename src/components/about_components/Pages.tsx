import React from "react";
import styles from "../../style/About.module.css"
import Logos from "./Logos";

interface PagesProps {
  size: string;
}

const Pages: React.FC<PagesProps> = ({ size }) => {
  return (
    <div
      className={`w-full  flex md:flex-row justify-center items-center ${styles.page_element}`}
    >
      <div>
        <Logos
          size={size}
          backgroundColor="#2052c5"
          className="fa-brands fa-facebook-f"
        />
      </div>
      <div>
        <Logos
          size={size}
          className="fa-brands fa-instagram"
          backgroundColor="linear-gradient(to right, #2b009a, #da001b, #ff1600, #ff7b00, #fff700)"
        />
      </div>
      <div>
        <Logos
          size={size}
          backgroundColor="#2f98e1"
          className="fa-brands fa-twitter"
        />
      </div>
    </div>
  );
};

export default Pages;
