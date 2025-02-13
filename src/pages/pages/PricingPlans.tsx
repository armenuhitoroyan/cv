import React from "react";
import styles from "../../style/PricingPlans.module.css";
// import HeaderAll from "../../components/header/HeaderAll";
import bgImage from "../../assets/images/fog.png";
import Footer from "../../components/footer/Footer";
import PricingCard from "../../components/pages_components/pricing_plans_components/PricingCard";
import TitleContainer from "../../components/Title";
import { useTitle } from "../../hooks/useTitle";
import Header from "../../components/header/Header";

const PricingPlans: React.FC = () => {
  useTitle("Pricing Plans");
  return (
    <div style={{ backgroundColor: "orange" }}>
      <div className={styles.menu}>
        {/* <HeaderAll title="Pricing Plans" ref="pricing-plans" img={bgImage} /> */}
        <Header title="Pricing Plans" ref="pricing-plans" img={bgImage} />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-4">
        <PricingCard
          marginTop="-40px"
          marginLeft="5%"
          widthBottom={100}
          widthTop={90}
        />
        <PricingCard
          marginTop="-40px"
          marginLeft="5%"
          widthBottom={100}
          widthTop={90}
        />
        <PricingCard
          marginTop="-40px"
          marginLeft="5%"
          widthBottom={100}
          widthTop={90}
        />
      </div>
      <div
        style={{ backgroundImage: `url(${bgImage})` }}
        className={`w-full  flex-col lg:flex-col gap-5 mt-10 justify-around items-center ${styles.creative}`}
      >
        <h2>Let's Create Something Creative Together</h2>
        <p>We can't wait to hear from making something beautiful and new!</p>
        <button className="bg-purple-500 text-black  font-bold py-2 px-4 rounded-full hover:bg-gray-100 transition">
          Start Consulting
        </button>
      </div>
      <div style={{ marginBlock: "50px" }}>
        <TitleContainer
          title="Student Pricing Plans"
          description="Assignments Packages"
        />
      </div>
      <div className="flex flex-col justify-center items-center lg:flex-row">
        <div style={{ width: "100%" }}>
          <PricingCard
            marginLeft="70%"
            marginTop="-30%"
            widthBottom={60}
            widthTop={70}
            height={350}
            btnHeight={70}
          />
        </div>
        <div style={{ width: "100%" }}>
          <PricingCard
            marginLeft="70%"
            marginTop="-30%"
            widthBottom={60}
            widthTop={70}
            height={350}
            btnHeight={70}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PricingPlans;
