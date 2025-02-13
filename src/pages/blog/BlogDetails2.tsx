import React from "react";
import styles from "../../style/Blog.module.css";
import bgImage from "../../assets/images/blog-detail.jpg";
import Footer from "../../components/footer/Footer";
import { useTitle } from "../../hooks/useTitle";
import Advice from "../../components/blog_components/AdviceComponent";
import RotatingImage from "../../components/RotatingImage";
import DesignPages from "../../components/blog_components/DesignPagesComponent";
import PostedCard from "../../components/blog_components/blog_details_component/PostedCard";
import AboutAuthorCard from "../../components/blog_components/blog_details_component/AboutAuthor";
import AddComment from "../../components/blog_components/blog_details_component/AddCommentComponent";
import UserForm from "../../components/form/UserForm";
import Header from "../../components/header/Header";

const BlogDetails2: React.FC = () => {
  useTitle("Blog Details 2");
  return (
    <div className={`${styles.container}`}>
      <div className={styles.menu}>
        <Header title="Blog Details 2" ref="blog-details-2" img={bgImage} />
      </div>

      <div className="w-full  flex flex-col gap-5 justify-center lg:flex-row ">
        <div
          className={`  ${styles.blog_container} flex justify-start items-center mt-15`}
        >
          <div className={`${styles.blog_content}  flex-col  lg:flex-row`}>
            <div>
              <img
                className="rounded-xl"
                src="https://afsu.tohidur.com/img/blog-two-1.jpg"
                alt="Image not found"
              />
            </div>
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
              02 Comments
            </h2>
            <div className={`${styles.add_comment} mb-10`}>
              <AddComment
                img="https://afsu.tohidur.com/img/comment-1.jpg"
                name="Nolwar Disoza"
                date="10 months ago"
                aboutAuthor="Lorem ipsum dolor sit amet, consectetur adipis Vivamus sceler neque in Nam vitae urnasodales neque in faucibus."
                onButtonClick={() => {}}
              />
              <div
                className="mt-5 rounded-xl ml-20"
                style={{ border: "3px solid #973af1" }}
              >
                <AddComment
                  img="https://afsu.tohidur.com/img/comment-2.jpg"
                  name="Thomas Walkar"
                  date="10 months ago"
                  aboutAuthor="Lorem ipsum dolor sit amet, consectetur adipis Vivamus sceler neque in Nam vitae urnasodales neque in faucibus."
                  onButtonClick={() => {}}
                />
              </div>
            </div>

            <div className="mt-10 mb-10">
              <UserForm />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BlogDetails2;
