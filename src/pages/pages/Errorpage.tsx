import React, { useEffect } from "react";
import styles from "../../style/Error.module.css";
import { useTitle } from "../../hooks/useTitle";
import WebSites from "../../components/footer/WebSites";
import { PiSmileyXEyesFill } from "react-icons/pi";

const ErrorPage: React.FC = () => {
  useTitle("404");
  useEffect(() => {
  }, []);
  return (
    <div
      id="page404-container"
      className={`${styles.container} w-full flex flex-col items-center justify-center lg:flex-row`}
    >
      <div>
        <div className={`mb-20 ${styles.error_context}`}>
          <h1 className={` ${styles.context} w-full  flex justify-center`}>
            <span>4</span>
            <PiSmileyXEyesFill
              style={{
                color: "#7a45c6",
                marginTop: "50px",
              }}
            />
            <span>4</span>
          </h1>

          <h2>Ooops, Page Not Found</h2>
          <p className={styles.text}>
            We can&apos;t seem to find the page you&apos;re looking for.
          </p>
          <div className={styles.search}>
            <input type="text" placeholder="Enter Keyword..." />
            <button></button>
          </div>
        </div>
        <div>
          <div className={`${styles.Web_sites} `}>
            <WebSites width={200} />
          </div>
          <h5>Copyright © 2024 AfsuBy Tohidur Hasan, All Rights Reserved</h5>
        </div>
        <div className={styles.bg}></div>
      </div>
    </div>
  );
};

export default ErrorPage;
