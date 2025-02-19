import React from "react";
import styles from "../style/About.module.css";
import { UserInfoProps } from "../interfaces/Types";
import Information from "../assets/files/json/Information.json";

const UserInfo: React.FC<UserInfoProps> = ({
  data,
  responseData,
  style,
  classname,
}) => {
  return (
    <li
      style={style}
      className={`${styles.table} flex justify-center items-center`}
    >
      <h6>
        {data}
        <span
          style={{
            color: "red !important",
            fontSize: "20px",
          }}
          className={classname}
        >
          {responseData}
        </span>
      </h6>
    </li>
  );
};

const Contacts: React.FC = () => {
  return (
    <div
      className={` w-full flex-col items-center  md:flex-row ${styles.contact_box}`}
    >
      <div className={` w-full flex flex-col items-center  lg:flex-row`}>
        <ul
          className="!mb-90"
          style={{
            width: "100%",
            height: "100px",
          }}
        >
          {Information &&
            Information.map((item, index) => (
              <UserInfo
                key={index}
                data={item.data}
                responseData={item.responseData}
                style={{
                  backgroundColor: index % 2 === 0 ? "#f9f9f9" : "#edebeb",
                  padding: "1px",
                  borderRadius: "20px",
                }}
                classname="contact"
              />
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Contacts;
