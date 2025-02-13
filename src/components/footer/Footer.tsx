import React from "react";
import styles from "../../style/Footer.module.css";
import logo from "../../assets/images/afsu-logo.png";
import WebSites from "./WebSites";
const Footer: React.FC = () => {
  return (
    <footer
      className={`w-screen flex-col flex justify-center md:flex-column ${styles.container}`}
    >
      <div className=" flex-col flex justify-center md:flex-row">
        <img
          className="w-16 md:w-32 lg:w-48 flex flex-col items-center justify-between"
          src={logo}
          alt="Logo"
        />
      </div>
      <div className=" flex-col flex justify-center md:flex-row">
        <p className={styles.p}>
          Duis sed odio sit amet nibh vulputate cursus a sit amet mauris Morbi
          accumsan ipsuy a odio tincdunt ilmauctor Class aptent taciti sociosqu
          ads Etiam.
        </p>
      </div>
      <div className=" flex-col flex justify-center md:flex-row">
        <WebSites width={200} />
      </div>

      <div className=" flex-col flex justify-center md:flex-row">
        <h6>Copyright © 2024 AfsuBy Tohidur Hasan, All Rights Reserved</h6>
      </div>
    </footer>
  );
};

export default Footer;
