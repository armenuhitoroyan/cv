import styles from "../../../style/HeaderH1.module.css";

const Animation: React.FC = () => (
  <div className={`${styles.animation_container}`}>
    <img
      className={`${styles.shaps_logo}`}
      src="src/assets/images/shaps.png"
      alt="Shaps"
    />
  </div>
);

export default Animation;
