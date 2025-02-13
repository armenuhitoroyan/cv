import React from "react";

import styles from "../../style/Portfolio.module.css";
import ProviderComponent from "./ProviderComponent";

const AboutPortfolio: React.FC = () => {
  return (
    <div className={`${styles.flexRow} flex flex-col lg:flex-col`}>
      <h2 className={`${styles.heading} text-2xl font-bold`}>Description</h2>
      <h6 className={`${styles.descriptionText} text-gray-400 mt-6`}>
        Lorem ipsum dolor sit amet co adipiscing elit sed do eusmoori sit amet
        co adipiscing elit sed do eusm t ut labore ilms Lorem ipsumolor sit amet
        co adipiscing elit sed do eusm odcididunt ut lausm od cididL orem ipsum
        dolor sit amet co adipiscing elit sed do eusmoori sit amet co adipiscing
        elit sed do eusmt ut labore ilms Lorem ipsumolor sit amet co adipisc od
        cididun ut labore ut labore ilms Lorem ipsum ori sit amet co adipiscing
        elit sed do eusm odcididunt ut lisum dolor sit amet co adipiscing elit
        sed do eus orem ipsum dolor sit amet co adipiscing elit sed do eusmoori
        sit amet co adipiscing elit sed do eusmt moori sit ang.Lorem ipsumolor
        sit amet co adipisc.
      </h6>
      <h6 className={`${styles.descriptionText} text-gray-400`}>
        <br />
        ed do eusm odcididunt ut lausm od cididunt eu sm od cididunt ut labore
        ut labore ilms ilLorem ipsum ri sit amet co adipiscing elit sed do eusm
        odcididunt ut ling elitsed do eusm od cididunt ut labore ilmu nt ut
        labore ut labore ilms. od cididLorem ipsum dolor sit amet co adipiscing
        elit sed do eusmoori sit a met co adipiscing elit sed.
      </h6>

      <div className={`${styles.providr_box}`}>
        <ProviderComponent />
      </div>
    </div>
  );
};

export default AboutPortfolio;
