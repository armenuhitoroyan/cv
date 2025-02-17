import React from "react";
import styles from "../../style/Portfolio.module.css";
import bgImage from "../../assets/images/fog.png";
import Footer from "../../components/footer/Footer";
import PrevNextComponent from "../../components/portfolio/PrevNext";
import RotatingImage from "../../components/RotatingImage";
import ProviderComponent from "../../components/portfolio/Provider";
import Images from "../../components/portfolio/Images";
import Information from "../../components/portfolio/Information";
import Header from "../../components/header/Header";
import { useTitle } from "../../hooks/useTitle";

const Portfolio: React.FC = () => {
  useTitle("Portfolio");
  return (
    <div className={styles.menu}>
      <Header title="Our Portfolio" ref="portfolio" img={bgImage} />

      {/* Images */}
      <div className={styles.box}>
        <div className="flex justify-center items-center mt-20">
          <img
            className="rounded-2xl"
            src="https://afsu.tohidur.com/img/profile-pag-1.jpg"
            alt="Image not found"
          />
        </div>

        <div className="flex flex-col lg:flex-row mt-10">
          <div className={styles.leftContent}>
            {/* Description */}
            <div className={`${styles.flexRow} flex flex-col lg:flex-col`}>
              <h2 className={`text-3xl font-bold ${styles.heading}`}>
                Description
              </h2>
              <h6 className={`${styles.descriptionText} text-gray-400`}>
                Lorem ipsum dolor sit amet co adipiscing elit sed do eusmoori
                sit amet co adipiscing elit sed do eusm t ut labore ilms Lorem
                ipsumolor sit amet co adipiscing elit sed do eusm odcididunt ut
                lausm od cididL orem ipsum dolor sit amet co adipiscing elit sed
                do eusmoori sit amet co adipiscing elit sed do eusmt ut labore
                ilms Lorem ipsumolor sit amet co adipisc od cididun ut labore ut
                labore ilms Lorem ipsum ori sit amet co adipiscing elit sed do
                eusm odcididunt ut lisum dolor sit amet co adipiscing elit sed
                do eus orem ipsum dolor sit amet co adipiscing elit sed do
                eusmoori sit amet co adipiscing elit sed do eusmt moori sit
                ang.Lorem ipsumolor sit amet co adipisc.
              </h6>
              <h6 className={`${styles.descriptionText} text-gray-400`}>
                <br />
                ed do eusm odcididunt ut lausm od cididunt eu sm od cididunt ut
                labore ut labore ilms ilLorem ipsum ri sit amet co adipiscing
                elit sed do eusm odcididunt ut ling elitsed do eusm od cididunt
                ut labore ilmu nt ut labore ut labore ilms. od cididLorem ipsum
                dolor sit amet co adipiscing elit sed do eusmoori sit a met co
                adipiscing elit sed.
              </h6>
            </div>
          </div>
          <div className={styles.rightContent}>
            {/* Card */}
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
        </div>

        <div className={`${styles.imgs}`}>
          <Images
            image="profile-pag-2"
            image2="profile-pag-4"
            image3="profile-pag-6"
          />
          <div className="mt-10">
            <Images
              image="profile-pag-3"
              image2="profile-pag-5"
              image3="profile-pag-7"
            />
          </div>
        </div>

        {/*  What they provide  */}
        <div className="mt-10">
          <div className={`flex  flex-col lg:flex-row  ${styles.provider_box}`}>
            <div className={styles.provider}>
              <ProviderComponent />
            </div>
            <div className={`pr-20 ${styles.provuder_image}`}>
              <RotatingImage
                src={`https://afsu.tohidur.com/img/profile-pag-8.jpg`}
                width={`100%`}
              />
            </div>
          </div>
        </div>

        {/* Preview Next */}
        <div className="mb-10 mt-10">
          <PrevNextComponent />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Portfolio;
