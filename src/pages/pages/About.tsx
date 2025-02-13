import React from "react";
import styles from "../../style/About.module.css";
import bgImage from "../../assets/images/fog.png";
import Footer from "../../components/footer/Footer";
import Carousel from "../../components/Carousel";
import AuthorInfo from "../../components/AuthorInformation";
import ResumeComponent from "../../components/ResumeComponent";
import Header from "../../components/header/Header";
import { useTitle } from "../../hooks/useTitle";

const About: React.FC = () => {
  useTitle("About");
  return (
    <div>
      <div className={styles.menu}>
        <Header title="About" ref="about" img={bgImage} />
      </div>
      <div className={styles.box}>
        <div className={styles.content}>
          <AuthorInfo />
        </div>
        <ResumeComponent firstTitle="Education" secondTitle="Experience" />
        <Carousel />
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
};

export default About;
