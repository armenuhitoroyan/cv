import React from "react";
import styles from "../../style/Portfolio.module.css";
import bgImage from "../../assets/images/fog.png";
import Footer from "../../components/footer/Footer";
import PrevNextComponent from "../../components/portfolio_components/PrevNextComponent";
import RotatingImage from "../../components/RotatingImage";
import Information from "../../components/portfolio_components/Information";

import AboutPortfolio from "../../components/portfolio_components/AboutPortfolio";
import Header from "../../components/header/Header";
import { useTitle } from "../../hooks/useTitle";

const Portfolio3: React.FC = () => {
  useTitle("Portfolio Details 2");
  return (
    <div className={styles.menu}>
      <Header title="Our Portfolio" ref="portfolio-details-2" img={bgImage} />
      <div className={styles.box}>
        {/* Images */}

        <div className="flex justify-cebter items-center mt-10 pl-10 pr-10">
          <img
            className="rounded-xl"
            src="https://afsu.tohidur.com/img/services-1.jpg"
            alt="Image not found"
          />
        </div>

        <div className="flex flex-col lg:flex-row gap-5 pl-15 pr-15 pt-15">
          <div
            style={{ width: "50%" }}
            className={`${styles.rightContent} ${styles.right_part}`}
          >
            {/* Card */}
            <span className="text-gray-400 !text-left font-bold">
              Photography, Design, Ideas
            </span>
            <h3 className={`${styles.heading} !text-left `}>
              Brand Consistency
            </h3>
            <div className=" text-start ">
              <Information
                client="COMPANY"
                category="PORTFOLIO, PHOTOS, AGENCY"
                dateStart="December 10, 2021"
                dateEnd="June 12, 2025"
                resources="PSD Document, Vector File, Document"
                downloadLink="./assets/files/Armenuhi Toroyan CV.pdf"
              />
            </div>
          </div>
          <div className={styles.leftContent}>
            {/* Description */}
            <AboutPortfolio />
          </div>
        </div>

        <div className="w-full flex flex-col lg:flex-row p-5">
          <div className=" flex-col md:flex-col">
            <div
              className={`flex flex-col justify-center pt-20 lg:flex-row mb-15 gap-5 ${styles.portfolio_images}`}
            >
              <div className={`${styles.left}`}>
                <RotatingImage src="https://afsu.tohidur.com/img/showcase-1.jpg" />
              </div>
              <div className={`${styles.right}`}>
                <RotatingImage src="https://afsu.tohidur.com/img/showcase-4.jpg" />
              </div>
            </div>
            <div className={`${styles.img_box} ml-15`}>
              <RotatingImage src="https://afsu.tohidur.com/img/showcase-5.jpg" />
            </div>
          </div>
          <div className={`${styles.rightContent} ${styles.right_part} mt-15 `}>
            <RotatingImage src="https://afsu.tohidur.com/img/showcase-6.jpg" />
          </div>
        </div>

        {/* Preview Next */}
        <div className="mt-12 mb-12 pr-20 pl-20">
          <PrevNextComponent />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Portfolio3;
