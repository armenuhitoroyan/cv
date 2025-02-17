import React from "react";

import styles from "../../style/Footer.module.css";
import { ListPagesProps } from "../../interfaces/Types";

const ListPages: React.FC<ListPagesProps> = ({
  imageName,
  webName,
  bgColor,
  href,
}) => {
  return (
    <li className="w-full flex items-center lg:flex-row">
      <a
        className="magic-hover magic-hover__square w-full flex flex-col items-center lg:flex-row"
        href={href}
      >
        <div
          className={`w-full flex flex-col items-center justify-center lg:flex-row ${styles.container_div}`}
          style={{
            backgroundColor: bgColor,
          }}
        >
          <i className={`${imageName} ${styles.container_i}`}></i>
        </div>

        <h3 className="!text-xl">{`${webName} `}</h3>
      </a>
    </li>
  );
};

export default ListPages;
