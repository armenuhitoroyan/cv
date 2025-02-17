import AboutUser from "../homepage/home4/AboutUser";

import styles from "../../style/HeaderH3.module.css";
import { Circle } from "lucide-react";
import ProfileImg3 from "./ProfileImgH3";

const Header3: React.FC = ({}) => {
  return (
    <div className={`flex flex-col lg:flex-row ${styles.container}`}>
      <div style={{ width: "65%" }}>
        <div className="flex">
          <AboutUser color="black" onClick={console.log("About User")} />
          <h3 className={styles.a_text}>A</h3>
        </div>
        <div className={`${styles.circles} flex gap-2`}>
          <div className="">
            <Circle className="w-[50px] h-[50px] text-gray-500" />
          </div>
          <div className="">
            <Circle className="w-[50px] h-[50px] text-gray-500" />
          </div>
          <div className="">
            <Circle className="w-[50px] h-[50px] text-gray-500" />
          </div>
        </div>
      </div>

      <div style={{ width: "35%" }}>
        <ProfileImg3 />
      </div>
    </div>
  );
};

export default Header3;
