import React from "react";
import styles from "../../style/Blog.module.css";
import bgImage from "../../assets/images/fog.png";
import Footer from "../../components/footer/Footer";
import Pagination from "../../components/Pagination";
import EnterEmail from "../../components/blog_components/EnterEmail";
import { useTitle } from "../../hooks/useTitle";
import Categories from "../../components/blog_components/Categories";

import Gallery from "../../components/blog_components/Gallery";
import Link from "../../components/blog_components/Links";
import RecentNews from "../../components/blog_components/News";
import AboutAuthor from "../../components/blog_components/AboutAuthor";
import Header from "../../components/header/Header";

const OurBlog: React.FC = () => {
  useTitle("Our Blog");
  return (
    <div className={`${styles.container}`}>
      <div className={styles.menu}>
        <Header title="Our Blog" ref="blog" img={bgImage} />
      </div>

      <div
        className={`w-full  flex flex-col gap-5  justify-center lg:flex-row ${styles.box}`}
      >
        <div
          className={` ${styles.blog_container} flex justify-start items-center mt-15`}
        >
          <div className={`${styles.blog_content}  flex-col  lg:flex-row`}>
            <AboutAuthor
              title="Professionals with a Global Mindset"
              imageUrl="https://afsu.tohidur.com/img/zoom-3.jpg"
              avatarUrl="https://afsu.tohidur.com/img/45.jpg"
              date="December 5, 2023"
              authorName="Willimes Marker"
              text="ipsum dolor sit amet soufflé. I love liquorice oat cake biscuit tiramisu jelly danish Caramels its chorice sw eet roll tart. Jelly fruitcake tart caramels marzipan. Brownie I love chocolate that bar sesliquorice. I love to otsie roll dragée bonbon croisnt. Chupa chups loream sesame snaps jelly tiramiipsum dolor sit amet sou ffl liquorice oat cake biscuit jesms tiramisu jelly dash Caramels chocolatsweet roll tart. Jelly-o fruitcake ta rt caramels marzipan Brownie I love chocolate bar. Cake I love liquorice n’t act so surprised, Your Highnes You weren’t on any mercy mison this time to this shp before me."
              buttonText="Select Now"
              onButtonClick={() => {
                console.log("https://afsu.tohidur.com/img/zoom-2.jpg");
              }}
            />

            <AboutAuthor
              title="Professionals with a Global Mindset"
              imageUrl="https://afsu.tohidur.com/img/zoom-1.jpg"
              avatarUrl="https://afsu.tohidur.com/img/45.jpg"
              date="December 5, 2023"
              authorName="Willimes Marker"
              text="ipsum dolor sit amet soufflé. I love liquorice oat cake biscuit tiramisu jelly danish Caramels its chorice sw eet roll tart. Jelly fruitcake tart caramels marzipan. Brownie I love chocolate that bar sesliquorice. I love to otsie roll dragée bonbon croisnt. Chupa chups loream sesame snaps jelly tiramiipsum dolor sit amet sou ffl liquorice oat cake biscuit jesms tiramisu jelly dash Caramels chocolatsweet roll tart. Jelly-o fruitcake ta rt caramels marzipan Brownie I love chocolate bar. Cake I love liquorice n’t act so surprised, Your Highnes You weren’t on any mercy mison this time to this shp before me."
              buttonText="Select Now"
              onButtonClick={() => {
                console.log("https://afsu.tohidur.com/img/zoom-2.jpg");
              }}
            />

            <AboutAuthor
              title="Professionals with a Global Mindset"
              imageUrl="https://afsu.tohidur.com/img/zoom-2.jpg"
              avatarUrl="https://afsu.tohidur.com/img/45.jpg"
              date="December 5, 2023"
              authorName="Willimes Marker"
              text="ipsum dolor sit amet soufflé. I love liquorice oat cake biscuit tiramisu jelly danish Caramels its chorice sw eet roll tart. Jelly fruitcake tart caramels marzipan. Brownie I love chocolate that bar sesliquorice. I love to otsie roll dragée bonbon croisnt. Chupa chups loream sesame snaps jelly tiramiipsum dolor sit amet sou ffl liquorice oat cake biscuit jesms tiramisu jelly dash Caramels chocolatsweet roll tart. Jelly-o fruitcake ta rt caramels marzipan Brownie I love chocolate bar. Cake I love liquorice n’t act so surprised, Your Highnes You weren’t on any mercy mison this time to this shp before me."
              buttonText="Select Now"
              onButtonClick={() => {
                console.log("https://afsu.tohidur.com/img/zoom-2.jpg");
              }}
            />

            <AboutAuthor
              title="Professionals with a Global Mindset"
              imageUrl="https://afsu.tohidur.com/img/profile-1.jpg"
              avatarUrl="https://afsu.tohidur.com/img/45.jpg"
              date="December 5, 2023"
              authorName="Willimes Marker"
              text="ipsum dolor sit amet soufflé. I love liquorice oat cake biscuit tiramisu jelly danish Caramels its chorice sw eet roll tart. Jelly fruitcake tart caramels marzipan. Brownie I love chocolate that bar sesliquorice. I love to otsie roll dragée bonbon croisnt. Chupa chups loream sesame snaps jelly tiramiipsum dolor sit amet sou ffl liquorice oat cake biscuit jesms tiramisu jelly dash Caramels chocolatsweet roll tart. Jelly-o fruitcake ta rt caramels marzipan Brownie I love chocolate bar. Cake I love liquorice n’t act so surprised, Your Highnes You weren’t on any mercy mison this time to this shp before me."
              buttonText="Select Now"
              onButtonClick={() => {
                console.log("https://afsu.tohidur.com/img/zoom-2.jpg");
              }}
            />

            <AboutAuthor
              title="Professionals with a Global Mindset"
              imageUrl="https://afsu.tohidur.com/img/zoom-2.jpg"
              avatarUrl="https://afsu.tohidur.com/img/45.jpg"
              date="December 5, 2023"
              authorName="Willimes Marker"
              text="ipsum dolor sit amet soufflé. I love liquorice oat cake biscuit tiramisu jelly danish Caramels its chorice sw eet roll tart. Jelly fruitcake tart caramels marzipan. Brownie I love chocolate that bar sesliquorice. I love to otsie roll dragée bonbon croisnt. Chupa chups loream sesame snaps jelly tiramiipsum dolor sit amet sou ffl liquorice oat cake biscuit jesms tiramisu jelly dash Caramels chocolatsweet roll tart. Jelly-o fruitcake ta rt caramels marzipan Brownie I love chocolate bar. Cake I love liquorice n’t act so surprised, Your Highnes You weren’t on any mercy mison this time to this shp before me."
              buttonText="Select Now"
              onButtonClick={() => {
                console.log("https://afsu.tohidur.com/img/zoom-2.jpg");
              }}
            />
            <Pagination />
          </div>
        </div>
        {/* Part 2 */}
        <div className={`${styles.right_container} mt-10`}>
          <div className={`w-full lg:w-2/5 ${styles.categories}`}>
            {/* Recent News */}
            <RecentNews folder="showcase" />

            {/* Categories */}
            <Categories />

            {/* Meta Links */}
            <Link />

            {/* Gallery Photos */}
            <Gallery />

            <EnterEmail />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default OurBlog;
