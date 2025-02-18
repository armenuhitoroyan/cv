import Contacts from "../../components/Contacts";
import Footer from "../../components/footer/Footer";
import UserForm from "../../components/form/UserForm";
import InfoCard from "../../components/homepage/home1/InfoCard";
import Works from "../../components/homepage/home1/Works";
import Card from "../../components/homepage/home3/Card";
import ServicesComponent from "../../components/services/Services";
import Skills from "../../components/Skills";
import TitleContainer from "../../components/Title";
import { HiMiniEnvelope, HiMiniMapPin, HiPhone } from "react-icons/hi2";
import { useTitle } from "../../hooks/useTitle";
import Header3 from "../../components/header/HeaderH3";
import styles from "../../style/Home3.module.css";

const Home3: React.FC = () => {
  useTitle("Home 3");
  return (
    <div className={styles.home3}>
      <Header3 />
      <div className={styles.box}>
        <div className="mt-10">
          <TitleContainer title="Who I am" description="About My Resume" />
        </div>
        <div className="flex flex-col px-10 lg:flex-row pt-1">
          <div className={styles.contct_box}>
            <Contacts />
          </div>

          <div className="w-full flex justify-start flex-col items-center">
            <img
              className="rounded-xl"
              src="https://afsu.tohidur.com/img/girl.png"
              alt="Profile"
            />
          </div>
        </div>
        <div className={`mt-10 px-10 ${styles.skill_box}`}>
          <Skills isGridLayout={false} />
        </div>
        <div className="mt-20">
          <TitleContainer title="What We Do" description="Our Services" />
        </div>
        <ServicesComponent />

        <div style={{ marginBlock: "50px" }}>
          <TitleContainer title="Testimonials" description="Client’s Reviews" />
        </div>
        <div className="flex flex-col justify-center items-center gap-10 pl-10 pr-10 lg:flex-row">
          <Card
            icon="https://afsu.tohidur.com/img/quote-1.png"
            author=" Edison Cavani"
            byAuthor="Writing by Jackson Doe"
            description=" We help our clients from the definition of their strategy to the
          realization of their digital ecosystem. At the heart of our approach
          is the constant search for the juncture between aesthetic."
          />
          <Card
            icon="https://afsu.tohidur.com/img/quote-1.png"
            author=" Edison Cavani"
            byAuthor="Writing by Jackson Doe"
            description=" We help our clients from the definition of their strategy to the
          realization of their digital ecosystem. At the heart of our approach
          is the constant search for the juncture between aesthetic."
          />
        </div>

        <div className="mt-10">
          <TitleContainer
            title="Collection of my project"
            description="Work Showcase"
          />
        </div>
        <div className="p-10">
          <Works />
        </div>
        <div
          className={`flex flex-col lg:flex-row mt-10 mb-10 p-10 pl-0 ${styles.contacts_box}`}
        >
          <div
            style={{ width: "100%" }}
            className={`${styles.info_card} gap-5 pt-12`}
          >
            <div>
              <InfoCard
                Icon={HiPhone}
                title="Phone No"
                text="+(123) 456 7890"
              />
            </div>
            <div className="mt-5">
              <InfoCard
                Icon={HiMiniEnvelope}
                title="Email Address"
                text="username@domain.com"
              />
            </div>
            <div className="mt-5">
              <InfoCard
                Icon={HiMiniMapPin}
                title="Location"
                text="Block Street No 2101 USA"
              />
            </div>
          </div>
          <div
            className={styles.contacts_with}
            style={{
              width: "100%",
              backgroundImage: "url(https://afsu.tohidur.com/img/blur-1.png)",
              borderRadius: "35px",
            }}
          >
            <UserForm />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home3;
