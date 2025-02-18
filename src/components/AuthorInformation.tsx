import React from "react";
import styles from "../style/About.module.css";
import Skills from "./Skills";
import Pages from "./pages/about/Pages";
import Contacts from "./Contacts";

const AuthorInfo: React.FC = () => {
  return (
    <div
      className={`${styles.container_content} w-full  flex-col items-center justify-center lg:flex-row`}
    >
      <div className=" flex flex-col items-center justify-center lg:flex-row">
        <div
          className={`${styles.about_me}   flex-col items-center  lg:flex-row`}
        >
          <div>
            <h2>About Me</h2>
          </div>
          <div>
            <p>I like creating a cool design project.</p>
          </div>
          <div className="flex flex-col items-center justify-start  lg:flex-row">
            <div
              className={` ${styles.pages_content} flex  mt-10 flex-col items-center justify-start  lg:flex-row`}
            >
              <div
                className={`${styles.button}  flex flex-col justify-start items-center`}
              >
                <button className="bg-white font-bold py-2 px-4 rounded-full  hover:bg-gray-100 transition">
                  Select Now
                </button>
              </div>
              <div className={` ${styles.pages}`}>
                <Pages size="40px" />
              </div>
            </div>
          </div>
        </div>

        <div
          className={`w-full flex-col items-center justify-center lg:flex-row ${styles.about_worker}`}
        >
          <div>
            <p style={{ color: "#808080" }}>
              Vestibulum vitae lorim tellus nec dui dictum lorim viverra ac,
              place uilm rat Lorse ipsom uilme umes acdictm Vesti itae lorim
              tellus nec dui dictum lorim viverra a eros ac, pl rat Lorse ipsom
              lorimes aul erdum. erdum. Vestibulum vi rat Lorse ipsom lorimes
              aul erdum. erdum.
            </p>
          </div>
          <div className="mt-10" style={{ marginLeft: "5%" }}>
            <img
              src="https://afsu.tohidur.com/img/sine.png"
              alt="Image not found"
            />
          </div>
        </div>
      </div>

      <div
        className={`w-full flex flex-col lg:flex-row items-center justify-center mt-5`}
      >
        <div className={`flex-1  mt-14 ${styles.contacts}`}>
          <Contacts />
        </div>
        <div className="flex-1" style={{ width: "100%" }}>
          <Skills isGridLayout={true} />
        </div>
      </div>
    </div>
  );
};

export default AuthorInfo;
