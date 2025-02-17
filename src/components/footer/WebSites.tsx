import React from "react";
import styles from "../../style/Footer.module.css";
import ListPages from "./ListPages";
import { WebPagesProps } from "../../interfaces/Types";

const WebSites: React.FC<WebPagesProps> = ({ width }) => {
  return (
    <div className="flex justify-center flex-row ">
      <ul
        className={`flex justify-center gap-5 flex-row lg:gap-10 ${styles.border}`}
        style={{ width: `${width}%` }}
      >
        <ListPages
          imageName="fa-brands fa-facebook-f"
          webName="Facebook"
          bgColor="#6928e6"
          href="#"
        />
        <ListPages
          imageName="fa-brands fa-twitter"
          webName="Twitter"
          bgColor="#4fa6ff"
          href="#"
        />
        <ListPages
          imageName="fa-brands fa-vimeo-v"
          webName="Vimeo"
          bgColor="#ff006c"
          href="#"
        />
        <ListPages
          imageName="fa-brands fa-linkedin-in"
          webName="LinkedIn"
          bgColor="#6928e6"
          href="#"
        />
      </ul>
    </div>
  );
};

export default WebSites;
