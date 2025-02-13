import { AboutUser } from "../../components/homepage_components/home4/AboutUser";
import ProfileCard from "../../components/homepage_components/home4/ProfileCard";
import { Sidebar } from "../../components/homepage_components/home4/Sidebar";
import { useTitle } from "../../hooks/useTitle";
import Home4Props from "../../interface/Home4Props";
import styles from "../../style/Home4.module.css";

const Home4: React.FC<Home4Props> = ({ color, backgroundColor, title }) => {
  useTitle(title);
  return (
    <div
      style={{ backgroundColor: backgroundColor, width: "100%" }}
      className={`${styles.container} w-full flex flex-col lg:flex-row  `}
    >
      <div className="flex !p-0">
        <div className="!m-0">
          <Sidebar color={color} />
        </div>
        <AboutUser onClick={console.log("Something")} color={color} />
        <ProfileCard />
      </div>
      {/* <div style={{ background: "red",  }}> */}
    </div>
  );
};

export default Home4;
