import React from "react";
import styles from "../../style/Services.module.css";
import bgImage from "../../assets/images/fog.png";
import Footer from "../../components/footer/Footer";
import ServicesComponent from "../../components/service_components/Services";
import Header from "../../components/header/Header";
import { useTitle } from "../../hooks/useTitle";

const Services: React.FC = () => {
  useTitle("Services");
  return (
    <div>
      <div className={styles.menu}></div>
      <Header title="Services" ref="services" img={bgImage} />
      <ServicesComponent />
      <Footer />
    </div>
  );
};

export default Services;
