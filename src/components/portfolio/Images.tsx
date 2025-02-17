import React from "react";

import RotatingImage from "../RotatingImage";
import styles from "../../style/Portfolio.module.css";
import { ImageProps } from "../../interfaces/Types";

const Images: React.FC<ImageProps> = ({ image, image2, image3 }) => {
  return (
    <div>
      <div
        className={`flex flex-col justify-center lg:flex-row ${styles.images}`}
      >
        {[image, image2, image3].map((image, index) => (
          <div key={index} style={{ marginInline: index > 0 ? "20px" : "0" }}>
            <RotatingImage
              src={`https://afsu.tohidur.com/img/${image}.jpg`}
              width={`auto`}
              height={`60vh`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Images;
