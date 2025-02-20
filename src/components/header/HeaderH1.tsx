import AboutUser from "../homepage/AboutUser";
import ProfileImg from "./ProfileImg";
import styles from "../../style/HeaderH1.module.css";

const Header1: React.FC = () => {
  return (
    <div className={`flex flex-col lg:flex-row ${styles.container}`}>
      <div className={styles.about_user}>
        <AboutUser color="white" onClick={console.log("About User")} />
      </div>
      <div className={styles.profile}>
        <ProfileImg />
      </div>
    </div>
  );
};

export default Header1;
