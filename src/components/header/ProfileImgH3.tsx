import { useEffect, useState } from "react";
import dots from "../../assets/images/dots-1.png";
import profileImg from "../../assets/images/home-img-3.png";
import styles from "../../style/HeaderH3.module.css";

const ProfileImg3: React.FC = () => {
  const [reverse, setReverse] = useState(false);

  // 11 վրկ պտտվում է, 2 վայրկյան դադար

  useEffect(() => {
    const interval = setInterval(() => {
      setReverse((prev) => !prev);
    }, 11000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex justify-center items-center w-full top-40">
      {/*  Հետնապատկերում պտտվող փոքր նկար */}
      <img
        className={`${styles.dots} ${
          reverse ? "reverse" : ""
        } -z-10 left-1/2 transform -translate-x-1/2  w-3/4 sm:w-2/3 md:w-1/2`}
        src={dots}
        alt="Dots"
      />

      {/* Պրոֆիլի նկարը */}
      <img className={`${styles.user_img}`} src={profileImg} alt="User" />
    </div>
  );
};

export default ProfileImg3;
