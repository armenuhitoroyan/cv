import React from "react";
import styles from "../../../style/Home4.module.css";
import { IoHomeOutline } from "react-icons/io5";
import {
  SlUser,
  SlGraduation,
  SlBriefcase,
  SlEnvelopeOpen,
  SlCursor,
} from "react-icons/sl";
import { FaRegFolder } from "react-icons/fa";
import Home4Props from "../../../interface/Home4Props";

export const Sidebar: React.FC<Home4Props> = ({ color }) => {
  return (
    <div
     
      className={`w-full flex flex-col items-center justify-center lg:flex-col ${styles.sidebar}`}
    >
      <div className="logo">
        <img src={`src/assets/images/logo-black.png`} alt="Logo" />
      </div>
      <div style={{ height: "70px" }}></div>
      <nav className="w-full flex flex-col lg:flex-col items-center justify-center gap-5 ">
        <a href={`/`}>
          <IoHomeOutline className={`${styles.icon}`} style={{ color }} />
        </a>
        <a href="/about">
          <SlUser className={`sl-user ${styles.icon}`} style={{ color }} />
        </a>
        <a href="#">
          <SlGraduation
            className={`sl-graduation ${styles.icon}`}
            style={{ color }}
          />
        </a>
        <a href="/portfolio">
          <SlBriefcase
            className={`sl-briefcase ${styles.icon}`}
            style={{ color }}
          />
        </a>
        <a href="#">
          <FaRegFolder
            className={`fa-reg-folder ${styles.icon}`}
            style={{ color }}
          />
        </a>
        <a href="/contact">
          <SlEnvelopeOpen
            className={`sl-envelop-open ${styles.icon}`}
            style={{ color }}
          />
        </a>
      </nav>

      <div className={`${styles.icon_container} mt-15`}>
        <SlCursor className="sl-cursor" style={{ color }} />
      </div>
    </div>
  );
};

export default Sidebar;
