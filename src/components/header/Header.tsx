import styles from "../../style/Header.module.css";
import { Link } from "react-router-dom";
import { HeaderProps } from "../../interfaces/Types";
import ParticleBackground from "./ParticleBackground";

const Header: React.FC<HeaderProps> = ({ title, img, ref }) => {
  return (
    <div
      className={styles.header}
      style={{
        background: `url(${img})`,
        position: "relative",
      }}
    >
      {/* Ավելացնել մասնիկներ միայն header-ի ներսում */}
      <div
        style={{ height: "150px", width: "100%", position: "relative" }}
        className={styles.particlesWrapper}
      >
        <ParticleBackground />
      </div>

      <h2 className="mt-20 absolute">{title}</h2>
      <div
        className={`flex-col items-center mt-25 absolute justify-center lg:flex-row ${styles.list}`}
      >
        <ul className="flex gap-10 justify-center mt-5">
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to={`/${ref}`}>{title}</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
