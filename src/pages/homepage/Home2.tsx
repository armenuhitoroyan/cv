import React from "react";
import styles from "../../style/Home2.module.css";
import OurServices from "../../components/homepage/Service";
import WorkExperience from "../../components/homepage/WorkExperience";
import { useTitle } from "../../hooks/useTitle";
import AboutUser from "../../components/homepage/AboutUser";
import TitleContainer from "../../components/Title";
import RotatingImage from "../../components/RotatingImage";
import bgImg from "../../assets/images/fog.png";
import Footer from "../../components/footer/Footer";
import Carousel from "../../components/Carousel";
import Card from "../../components/pages/pricing_plans/Card";
import PortfolioCarousel from "../../components/homepage/PortfolioCarousel";

const Home2: React.FC = () => {
  useTitle("Home 2");
  return (
    <div className={styles.container}>
      <div
        style={{ width: "100%" }}
        className={`w-full flex flex-col lg:flex-row items-start ${styles.box}`}
      >
        <div className={styles.user}>
          <AboutUser color="black" onClick={console.log("About User")} />
        </div>
        <div
          className={`w-full flex flex-col lg:flex-row justify-around ${styles.context}`}
        >
          <img src="https://afsu.tohidur.com/img/girl.png" alt="Profile" />
          <div className={styles.info}>
            <div>
              <h2>12 +</h2>
              <p className="!text-white">Years Working Experience</p>
            </div>
            <div></div>
            <div>
              <h2>10 k</h2>
              <p className="!text-white">Happy Satisfied Customers</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.home2_container}>
        <TitleContainer title="What we do" description="Our Services" />
        <OurServices />
        <TitleContainer
          title="Collection of my project"
          description="Work Showcase"
        />
        <div className="w-full flex-col lg:flex-col gap-5 items-center justify-around">
          <div className="w-full flex flex-col lg:flex-row gap-5 justify-around">
            <div style={{ width: "100%" }}>
              <RotatingImage
                src="https://afsu.tohidur.com/img/profile-home-img-1.jpg"
                width=""
                height=""
              />
              <div className={styles.skill_info}>
                <a href="#">Doerner Investigations</a>
                <p>Website Design, Branding</p>
              </div>
            </div>
            <div style={{ width: "100%" }}>
              <RotatingImage
                src="https://afsu.tohidur.com/img/profile-6.jpg"
                width=""
                height=""
              />
              <div className={styles.skill_info}>
                <a href="#">Creative Studio</a>
                <p>Website Design, Branding</p>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col lg:flex-row gap-5 justify-around">
            <div>
              <RotatingImage
                src="https://afsu.tohidur.com/img/profile-home-img-5.jpg"
                width=""
                height=""
              />
              <div className={styles.skill_info}>
                <a href="#">Web Mockup</a>
                <p>Studio, Branding</p>
              </div>
            </div>
            <div>
              <RotatingImage
                src="https://afsu.tohidur.com/img/profile-home-img-6.jpg"
                width=""
                height=""
              />
              <div className={styles.skill_info}>
                <a href="#">Illustrator Design</a>
                <p>Website Design, Branding</p>
              </div>
            </div>
            <div>
              <RotatingImage
                src="https://afsu.tohidur.com/img/profile-home-img-7.jpg"
                width=""
                height=""
              />

              <div className={styles.skill_info}>
                <a href="#">Vector Art</a>
                <p>Website Design, Branding</p>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col lg:flex-row gap-5 justify-around">
            <div>
              <RotatingImage
                src="https://afsu.tohidur.com/img/profile-home-img-3.jpg"
                width=""
                height=""
              />
              <div className={styles.skill_info}>
                <a href="#">Branding Identity</a>
                <p>Website Design, Branding</p>
              </div>
            </div>
            <div>
              <RotatingImage
                src="https://afsu.tohidur.com/img/profile-home-img-4.jpg"
                width=""
                height=""
              />
              <div className={styles.skill_info}>
                <a href="#">App UX UI Design</a>
                <p>Website Design, Branding</p>
              </div>
            </div>
          </div>
          <button className="bg-white mt-5 !mb-10 font-bold py-2 px-4 mb-10 rounded-full transition ">
            Load more
          </button>
        </div>
        <div
          style={{ backgroundImage: `url(${bgImg})` }}
          className={`w-full  flex-col lg:flex-col mt-10 gap-5 justify-around mt-10 items-center ${styles.creative}`}
        >
          <h2>Let's Create Something Creative Together</h2>
          <p className="!text-white">
            We can't wait to hear from making something beautiful and new!
          </p>
          <button className="bg-white text-black font-bold py-2 px-4 rounded-full hover:bg-gray-100 transition">
            Start Consulting
          </button>
        </div>
        <WorkExperience />
        <PortfolioCarousel />

        <div className="flex flex-col lg:flex-row">
          <div className={styles.pricing}>
            <p>Work Packages</p>
            <h2>Pricing Plans</h2>
            <p>
              Lorem ipm dolor amet, cons magm maiores Ipsa dolor sitmagnam
              maores. Lorem ipm dolor amet, cons magm maiores Ipsa dolor sitma.
            </p>
          </div>
          <div
            className={`grid grid-cols-1 lg:grid-cols-2 gap-6 p-4 ${styles.cards}`}
          >
            <Card
              marginTop="-40px"
              marginLeft="5%"
              widthBottom={100}
              widthTop={90}
            />
            <Card
              marginTop="-40px"
              marginLeft="5%"
              widthBottom={100}
              widthTop={90}
            />
          </div>
        </div>
        <Carousel />
      </div>

      <Footer />
    </div>
  );
};

export default Home2;
