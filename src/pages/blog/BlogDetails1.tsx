import React from "react";
import styles from "../../style/Blog.module.css";
// import HeaderAll from "../../components/header/HeaderAll";
import bgImage from "../../assets/images/fog.png";
import Footer from "../../components/footer/Footer";
import { useTitle } from "../../hooks/useTitle";
import AboutAuthor from "../../components/blog_components/AboutAuthor";
import RecentNews from "../../components/blog_components/News";
import Categories from "../../components/blog_components/Categories";
import Link from "../../components/blog_components/Links";
import Gallery from "../../components/blog_components/Gallery";
import EnterEmail from "../../components/blog_components/EnterEmail";
import Advice from "../../components/blog_components/AdviceComponent";
import RotatingImage from "../../components/RotatingImage";
import DesignPages from "../../components/blog_components/DesignPagesComponent";
import PostedCard from "../../components/blog_components/blog_details_component/PostedCard";
import AboutAuthorCard from "../../components/blog_components/blog_details_component/AboutAuthor";
import AddComment from "../../components/blog_components/blog_details_component/AddCommentComponent";
import UserForm from "../../components/form/UserForm";
import Header from "../../components/header/Header";

const BlogDetails1: React.FC = () => {
  useTitle("Blog Details 1");
  return (
    <div className={`${styles.container}`}>
      <div className={styles.menu}>
        <Header title="Blog Details" ref="blog-details-1" img={bgImage} />
      </div>

      <div
        className={`w-full  flex flex-col gap-5  justify-center lg:flex-row ${styles.content} ${styles.box}`}
      >
        <div
          className={` ${styles.left_container} ${styles.blog_container} flex justify-start items-center mt-15`}
        >
          <div className={`${styles.blog_content}  flex-col  md:flex-row`}>
            <AboutAuthor
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

            <Advice />

            <p
              style={{ fontWeight: "normal !important" }}
              className={`text-gray-500 ${styles.blog_p}`}
            >
              lotsie roll dragée bonbon croisnt. Chupa chups loream sesame snaps
              jelly tiramiipsum dolor sit amet sou ffl liquorice oat cake
              biscuit jesms tiramisu jelly dash Caramels chocolatsweet roll
              tart. lotsie roll dragée b onbon croisnt. Chupa chups loream
              sesame snaps jelly tiramiipsum dolor sit amet sou ffl liquorice
              oat a ake biscuit jesms tiramisu jelly dash Caramelsn t. Chupa
              chups loream sesame snaps jelly tiramiipsum a olor sit amet souffl
              liquorice oat cake biscuit jesms tiramis.
            </p>

            <div className="mt-10">
              <ul>
                <li>Motivation and encouragement from time to time</li>
                <li>1000 motivational quotes in the database</li>
                <li>
                  If you don’t need either of these at the moment, you certainly
                  have friends
                </li>
                <li>You and help uplift your day.</li>
                <li>
                  Provide a motivational quote for you as you place your head on
                  the pillow
                </li>
              </ul>
            </div>

            <div className="mt-15">
              <div className="flex gap-5">
                <RotatingImage
                  src="https://afsu.tohidur.com/img/profile-2.jpg"
                  width="60%"
                  height="400px"
                />
                <RotatingImage
                  src="https://afsu.tohidur.com/img/profile-3.jpg"
                  width="40%"
                  height="400px"
                />
              </div>

              <div className="mt-10">
                <RotatingImage
                  src="https://afsu.tohidur.com/img/profile-4.jpg"
                  width="100%"
                  height="400px"
                />
              </div>
            </div>

            <div className="mt-10">
              <p
                style={{ fontWeight: "normal !important" }}
                className={`${styles.blog_p} text-gray-500`}
              >
                Tighten your grip, Tarkin, the more star systems will slip
                through your fingers.Still, got a lot of spirit what do you
                think? What!? I don’t know what you’re talking about. I am a
                member of the Imperidiplomatic mission to Alderaan good is a
                reward if you aint tas around to use it Besides, attackin
                station ain’t my idea of cou rage. It’s more like suicide.
              </p>

              <div className="flex flex-col gap-5 lg:flex-row">
                <p
                  style={{ fontWeight: "normal !important" }}
                  className={`${styles.blog_p} text-gray-500`}
                >
                  ipsum dolor sit amet soufflé. I love liquorice oat cake
                  biscuit tiramisu jelly danish Caramels its chorice sw eet roll
                  tart. Jelly fruitcake tart caramels marzipan. Brownie I love
                  chocolate that bar sesliquorice. I love to otsie roll dragée
                  bonbon croisnt. Chupa chups lo ream sesame snaps jelly
                  tiramiipsum dolor sit am et souffl liquorice oat cake biscuit
                  jesms tiramisu jelly dash Caramels chocolatsweet roll tart.
                  Jelly-o fruitc ake tart caramels marzipan.
                </p>

                <img
                  className={`rounded-xl mt-20 ${styles.blog6img}`}
                  src="https://afsu.tohidur.com/img/blog-6.jpg"
                  alt="Image not found"
                />
              </div>
            </div>

            <div className="mt-10">
              <DesignPages />
            </div>
            <div
              className={`${styles.posted_card} flex flex-col justify-center items-center gap-10 lg:flex-row`}
            >
              <div>
                <PostedCard
                  text="Whether you get knocked..."
                  content="Previous Post"
                />
              </div>

              <div>
                <PostedCard
                  text="It’s whether you get up..."
                  content="Next Post"
                />
              </div>
            </div>

            <AboutAuthorCard
              img="https://afsu.tohidur.com/img/blog-7.jpg"
              name="About Author"
              role="Graphic Designer"
              aboutAuthor="Lorem ipsum dolor sit amet, consectetur adipis Vivamus sceler neque in Nam vitae urnasodales neque in faucibus."
            />

            <h2 className={`${styles.title_comment} text-2xl mt-10 mb-5`}>
              01 Comments
            </h2>
            <div className={`${styles.add_comment} mb-10`}>
              <AddComment
                img="https://afsu.tohidur.com/img/comment-1.jpg"
                name="Nolwar Disoza"
                date="10 months ago"
                aboutAuthor="Lorem ipsum dolor sit amet, consectetur adipis Vivamus sceler neque in Nam vitae urnasodales neque in faucibus."
                onButtonClick={() => {}}
              />
            </div>

            <div className="mb-10">
              <UserForm />
            </div>
          </div>
        </div>
        {/* Part 2 */}
        <div className={`${styles.right_container} mt-10`}>
          <div className={`w-full ${styles.categories}`}>
            {/* Recent News */}
            <RecentNews folder="recent-news" />

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

export default BlogDetails1;
