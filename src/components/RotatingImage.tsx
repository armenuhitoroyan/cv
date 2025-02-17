import React from "react";
import styles from "../style/Services.module.css";
import { RotatingImageProps } from "../interfaces/Types";

const RotatingImage: React.FC<RotatingImageProps> = ({
  src,
  width = "100%",
  height = "100%",
}) => {
  return (
    <div
      style={{
        width: width,
        height: height,
      }}
      className={`w-full flex items-center justify-center ${styles.image_container}`}
    >
      <img
        src={src}
        alt="Paper Pouch Mockup"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
    </div>
  );
};

export default RotatingImage;
