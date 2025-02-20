import React from "react";
import styles from "../../style/Contact.module.css";

import bgImage from "../../assets/images/home-2.jpg";
import { useTitle } from "../../hooks/useTitle";

import Footer from "../../components/footer/Footer";
import Map from "../../components/contact/Map";
import Carousel from "../../components/Carousel";

import UserForm from "../../components/form/UserForm";
import Header from "../../components/header/Header";
import ContactList from "../../components/contact/Contacts";

const Contact: React.FC = () => {
  useTitle("Contact Us");

  return (
    <div className={`flex-col items-center justify-center ${styles.container}`}>
      <Header title="Contact" ref="concat" img={bgImage} />
      <div className={styles.box}>
        <ContactList />
        <div className={`flex items-center justify-center ${styles.map}`}></div>
        <div
          style={{ width: "100%" }}
          className="w-full  flex-col items-center justify-center lg:flex-row"
        >
          <div
            className={`w-full  flex-col items-center justify-center lg:flex-row ${styles.hading}`}
          >
            <div className="w-full flex flex-col items-center justify-center">
              <p>Have Question Contact Us?</p>
            </div>
            <div className="w-full flex flex-col items-center justify-center">
              <h2 className="align-center">
                Love to Hear From You, Get in Touch!
              </h2>
            </div>
          </div>
          <div className={`w-full flex flex-col  ${styles.info}`}>
            <UserForm />
          </div>
        </div>
        <Map />
        <Carousel />
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
};

export default Contact;
