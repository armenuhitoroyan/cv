import { Circle } from "lucide-react";
import profileImg from "../../assets/images/630.png";
import Animation from "../homepage/AnimationOfIMGh1";
import CountFollowers from "../homepage/CountFollowers";
import styles from "../../style/HeaderH1.module.css";

const ProfileImg: React.FC = () => {
  return (
    <div
      className={`relative flex justify-center items-center w-full top-40 right-20  max-w-sm mx-auto`}
    >
      {/* Profile Image */}
      <img
        src={profileImg}
        alt="Profile"
        className="w-full h-auto rounded-full object-cover"
      />

      {/* Overlay Elements */}
      <div className={`absolute top-5 left-5 z-10 `}>
        <Circle className={`text-yellow-500 ${styles.circle}`} />
      </div>
      <div className="absolute bottom-0 right-0 sm:right-2 md:right-4 z-20">
        <Animation />
      </div>
      <div
        className={`absolute  mt-50 left-0 sm:left-2 lg:left-4 z-20 ${styles.followers}`}
      >
        <CountFollowers title="K" text="Happy Satisfied Customer" count={10} />
      </div>
    </div>
  );
};

export default ProfileImg;
