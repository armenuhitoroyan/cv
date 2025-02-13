import React from "react";
import styles from "../../style/Portfolio.module.css";
import bgImage from "../../assets/images/fog.png";
import Footer from "../../components/footer/Footer";

import PrevNextComponent from "../../components/portfolio_components/PrevNextComponent";
import AboutPortfolio from "../../components/portfolio_components/AboutPortfolio";

import BrandCard from "../../components/portfolio_components/BrandCard";
import RotatingImage from "../../components/RotatingImage";
import Header from "../../components/header/Header";
import { useTitle } from "../../hooks/useTitle";

const Portfolio2: React.FC = () => {
  useTitle("Portfolio Details 1");
  return (
    <div>
      <div className={styles.menu}>
        <Header title="Our Portfolio" ref="portfolio-details" img={bgImage} />
        <div className="flex flex-col lg:flex-row gap-5 pl-15 pr-15 pt-15">
          <div className={styles.leftContent}>
            {/* Description */}
            <span className="font-bold text-gray-400">
              Photography, Design, Ideas
            </span>
            <h2
              style={{ marginTop: "25px" }}
              className={`font-bold  ${styles.heading}`}
            >
              Brand Consistency
            </h2>

            <div className=" text-start ">
              <BrandCard
                client="COMPANY"
                category="Portfolio, Photos"
                dateStart="December 10, 2021"
                dateEnd="June 12, 2025"
                resources="PSD Document, Vector File, Document"
                downloadLink="./assets/files/Armenuhi Toroyan CV.pdf"
              />
            </div>
            <AboutPortfolio />
          </div>
          <div className={`${styles.rightContent} ${styles.right_part}`}>
            <div>
              <div>
                <RotatingImage src="https://afsu.tohidur.com/img/showcase-2.jpg" />
              </div>

              <div className="mt-10">
                <RotatingImage src="https://afsu.tohidur.com/img/showcase-3.jpg" />
              </div>
            </div>

            <div className="w-full flex  mt-10">
              <div style={{ width: "100%" }} className="flex-col md:flex-col">
                <div className="flex justify-center md-flex-row">
                  <div style={{ width: "100%" }}>
                    <RotatingImage src="https://afsu.tohidur.com/img/showcase-5.jpg" />
                  </div>
                  <div className="mx-2">
                    <RotatingImage src="https://afsu.tohidur.com/img/showcase-4.jpg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Preview Next */}
      <div className="mt-85 mb-12 mr-15 ml-15">
        <PrevNextComponent />
      </div>
      <Footer />
    </div>
  );
};

export default Portfolio2;
