// Հետևորդների քանակը հաշվող Component

import { CountFollwersProps } from "../../../interfaces/Types";
import styles from "../../../style/HeaderH1.module.css";

const CountFollwers: React.FC<CountFollwersProps> = ({
  count,
  title,
  text,
}) => {
  return (
    <div
      className={`${styles.follows_box} w-full  flex-col items-center  lg:flex-row`}
    >
      <h2 className="font-bold ">
        {count}
        {title}
      </h2>
      <p className="text-black !text-center">{text}</p>
    </div>
  );
};

export default CountFollwers;
