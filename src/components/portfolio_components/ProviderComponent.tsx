// Provider Container
import React from "react";
import styles from "../../style/Portfolio.module.css";

const ProviderComponent: React.FC = () => {
  return (
    <div className={styles.provider_container}>
      <h2 className="text-2xl font-bold text-start ml-10 text-black">
        What we provider
      </h2>
      <ul>
        <li className="text-gray-800 text-start ml-10 mt-5">
          Dedication to client satisfaction
        </li>
        <li className="text-gray-800 text-start ml-10 mt-5">
          Teamwork and collabration
        </li>
        <li className="text-gray-800 text-start ml-10 mt-5">
          Being leader in our profession
        </li>
        <li className="text-gray-800 text-start ml-10 mt-5">
          Teamwork and collabration
        </li>
        <li className="text-gray-800 text-start ml-10 mt-5">
          Pride in our works and excellences
        </li>
      </ul>
    </div>
  );
};

export default ProviderComponent;
