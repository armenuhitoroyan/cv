import AuthorInfo from "../../components/AuthorInformation";
import Footer from "../../components/footer/Footer";
import UserForm from "../../components/form/UserForm";
import ArticleCard from "../../components/homepage_components/home1/ArticleCard";
import InfoCard from "../../components/homepage_components/home1/InfoCard";
import Works from "../../components/homepage_components/home1/Works";
import ResumeComponent from "../../components/ResumeComponent";
import ServicesComponent from "../../components/service_components/Services";
import { HiMiniEnvelope, HiMiniMapPin, HiPhone } from "react-icons/hi2";
import TitleContainer from "../../components/Title";
import { useTitle } from "../../hooks/useTitle";
import Header1 from "../../components/header/HeaderH1";
import styles from "../../style/Homepage.module.css";

const Homepage: React.FC = () => {
  useTitle("Home");
  return (
    <div className={styles.homepage}>
      <div>
        <Header1 />
      </div>
      <div className={styles.context}>
        <div className="mt-15">
          <AuthorInfo />
        </div>
        <div className="mt-20">
          <TitleContainer title="What We Do" description="Our Services" />
        </div>
        <ServicesComponent />

        <div className="mt-20">
          <TitleContainer
            title="Professional Experience"
            description="My Resume"
          />
        </div>
        <div className="mt-10">
          <ResumeComponent firstTitle="Education" secondTitle="Experience" />
        </div>
        <div className="mt-10">
          <TitleContainer
            title="Collection of my project"
            description="Work Showcase"
          />
        </div>
        <div className="pr-10 pl-10">
          <Works />
        </div>
        <div className="mt-20 mb-20">
          <button className="mt-10">Load more</button>
        </div>
        <TitleContainer title="News & Blog" description="Recent Articles" />
        <div
          className={` ${styles.resent_articles} flex flex-col freelance-available justify-center items-center gap-10 lg:flex-row`}
        >
          <ArticleCard
            image="https://afsu.tohidur.com/img/blog-1.jpg"
            commentBadge="12"
            dateAndUser="December 5, 2023 | John Smith"
            title="Interview Photographer Mark Seliger"
            description="Duis sed odio sit amet nibh vulputate cursus a sit Using an interactive app amet nibh roach."
          />
          <ArticleCard
            image="https://afsu.tohidur.com/img/blog-2.jpg"
            commentBadge="22"
            dateAndUser="December 5, 2023 | John Smith"
            title="Professionals with a Global Mindset"
            description="Duis sed odio sit amet nibh vulputate cursus a sit Using an interactive app amet nibh roach."
          />
          <ArticleCard
            image="https://afsu.tohidur.com/img/blog-3.jpg"
            commentBadge="12"
            dateAndUser="December 5, 2023 | John Smith"
            title="Reimagine, Restructure and Renew Business"
            description="Duis sed odio sit amet nibh vulputate cursus a sit Using an interactive app amet nibh roach."
          />
        </div>

        <div className="flex flex-col lg:flex-row mt-10 mb-10 p-10 pl-0 ">
          <div className={`gap-5 pt-12 ${styles.contact_with}`}>
            <div>
              <InfoCard
                IconComponent={HiPhone}
                title="Phone No"
                text="+(123) 456 7890"
              />
            </div>
            <div className="mt-5">
              <InfoCard
                IconComponent={HiMiniEnvelope}
                title="Email Address"
                text="username@domain.com"
              />
            </div>
            <div className="mt-5">
              <InfoCard
                IconComponent={HiMiniMapPin}
                title="Location"
                text="Block Street No 2101 USA"
              />
            </div>
          </div>
          <div
            className={`${styles.contacts_form} p-10`}
            style={{
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

export default Homepage;
