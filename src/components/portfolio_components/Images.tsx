import React from "react";

import RotatingImage from "../RotatingImage";
import styles from "../../style/Portfolio.module.css"

interface ImageProps {
  image: string;
  image2: string;
  image3: string;
}

const Images: React.FC<ImageProps> = ({ image, image2, image3 }) => {
  return (
    <div>
      <div className={`flex flex-col justify-center lg:flex-row ${styles.images}`}>
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
