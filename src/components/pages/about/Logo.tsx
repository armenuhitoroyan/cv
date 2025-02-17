import React from "react";
import styles from "../../../style/About.module.css";
import { LogoProps } from "../../../interfaces/Types";

const Logo: React.FC<LogoProps> = ({ backgroundColor, size, className }) => {
  return (
    <div
      className={styles.logo}
      style={{ background: backgroundColor, width: size, height: size }}
    >
      <a
        className="w-full items-center justify-center"
        href="#"
        target="_blank"
        rel="noopener noreferrer"
      ></a>
      <i className={className} aria-hidden="true"></i>
    </div>
  );
};

export default Logo;
