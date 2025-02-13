import React from "react";
import styles from "../../style/Services.module.css";

import bgImage from "../../assets/images/fog.png";
import Footer from "../../components/footer/Footer";
import RotatingImage from "../../components/RotatingImage";
import Header from "../../components/header/Header";
import { useTitle } from "../../hooks/useTitle";

const ServicesDetails: React.FC = () => {
  useTitle("Services Details");
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <Header title="Services Details" ref="services-details" img={bgImage} />
      </div>
      <div className={`${styles.context}`}>
        <div
          className={`w-full flex flex-col items-center justify-center gap-10 lg:flex-row`}
        >
          <div className={styles.text_container}>
            <h3>Stunning Design</h3>
            <p>
              lotsie roll dragée bonbon croisnt. Chupa chups loream sesame snaps
              jelly tiramiipsum dolor sit amet sou ffl liquorice oat cake
              biscuit jesms tiramisu jelly dash Caramels chocolatsweet roll
              tart. lotsie roll dragée b onbon croisnt. Chupa chups loream
              sesame snaps jelly tiramiipsum dolor sit amet sou ffl liquorice
              oat a ake biscuit jesms tiramisu jelly dash Caramelsn t. Chupa
              chups loream sesame snaps jelly tiramiipsum a olor sit amet souffl
              liquorice oat cake biscuit jesms ls chocolatsweet roll tart.
              lotsie roll dragée b onbon croisnt. Chupa chups l tiramis.
            </p>
          </div>
          <div className={styles.rules}>
            <h3>Service Benefits</h3>

            <ul>
              <li>
                <span>Motivation and encouragement from time to time</span>
              </li>
              <li>
                <span>1000 motivational quotes in the database</span>
              </li>
              <li>
                <span>
                  If you don’t need either of these at the moment, you certainly
                  have friends
                </span>
              </li>
              <li>
                <span>You and help uplift your day.</span>
              </li>
              <li>
                <span>
                  Provide a motivational quote for you as you place your head on
                  the pillow
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex justify-cebter items-center p-10">
          <img
            className="rounded-xl"
            src="https://afsu.tohidur.com/img/services-1.jpg"
            alt="Image not found"
          />
        </div>
        <div
          className={`w-full flex-col items-center pl-14 pr-14 justify-center text-start ml-5% lg:flex-row ${styles.info}`}
        >
          <h3 className="text-4xl font-bold">Service Moto</h3>
          <p className="mt-2 mb-6">
            lotsie roll dragée bonbon croisnt. Chupa chups loream sesame snaps
            jelly tiramiipsum dolor sit amet sou ffl liquorice oat cake biscuit
            jesms tiramisu jelly dash Caramels chocolatsweet roll tart. lotsie
            roll dragée b onbon croisnt. Chupa chups loream sesame snaps jelly
            tiramiipsum dolor sit amet sou ffl liquorice oat a ake biscuit jesms
            tiramisu jelly dash Caramelsn t. Chupa chups loream sesame snaps
            jelly tiramiipsum a olor sit amet souffl liquorice oat cake biscuit
            jesms ls chocolatsweet roll tart. lotsie roll dragée b onbon
            croisnt. Chupa chups l tiramis.
          </p>
        </div>
        <div
          className={`${styles.image_context} w-full flex flex-col items-center justify-center lg:flex-row`}
        >
          <div className={`${styles.rules} mt-20 mb-20`}>
            <h3>Service Benefits</h3>

            <ul>
              <li>
                <span>Motivation and encouragement from time to time</span>
              </li>
              <li>
                <span>1000 motivational quotes in the database</span>
              </li>
              <li>
                <span>
                  If you don’t need either of these at the moment, you certainly
                  have friends
                </span>
              </li>
              <li>
                <span>You and help uplift your day.</span>
              </li>
              <li>
                <span>
                  Provide a motivational quote for you as you place your head on
                  the pillow
                </span>
              </li>
            </ul>
          </div>
          <div className={`mt-20 ${styles.work_img}`}>
            <RotatingImage
              src={`https://afsu.tohidur.com/img/services-2.jpg`}
              width={`500px`}
              height={`35vh`}
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ServicesDetails;
