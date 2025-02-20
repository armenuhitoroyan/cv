import { AboutUser } from "../../components/homepage/AboutUser";
import Card from "../../components/homepage/ProfileCard";
import { Sidebar } from "../../components/homepage/Sidebar";
import { useTitle } from "../../hooks/useTitle";
import Home4Props from "../../interfaces/Types";
import styles from "../../style/Home4.module.css";

const Home4: React.FC<Home4Props> = ({ color, backgroundColor, title }) => {
  useTitle(title);
  return (
    <div
      style={{ backgroundColor: backgroundColor, width: "100%" }}
      className={`${styles.container} w-full flex flex-col lg:flex-row  `}
    >
      <div className={`flex flex-col !p-0 lg:flex-row ${styles.container_box}`}>
        <div className="!m-0">
          <Sidebar color={color} />
        </div>
        <div className={styles.about_user}>
          <AboutUser onClick={console.log("Something")} color={color} />
        </div>
        <div className={styles.card_container}>
          <Card />
        </div>
      </div>
    </div>
  );
};

export default Home4;
