import React from "react";
import styles from "../style/About.module.css";

type ResumeProps = {
  year: string;
  info: string;
  cardTitle: string;
  description: string;
};

const Resume: React.FC<ResumeProps> = ({
  year,
  info,
  cardTitle,
  description,
}) => {
  return (
    <div className={styles.timeline}>
      <div className={styles.timeline_item}>
        <span className={styles.timeline_year}>{year}</span>
        <h3 className="text-3xl font-bold underline">{info}</h3>
        <div className={styles.timeline_content}>
          <h4 className="text-3xl font-bold underline">{cardTitle}</h4>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

type ResumeComponentProps = {
  firstTitle: string;
  secondTitle: string;
};

const ResumeComponent: React.FC<ResumeComponentProps> = ({
  firstTitle,
  secondTitle,
}) => {
  return (
    <div
      className={` w-full flex flex-col items-center justify-center lg:flex-row ${styles.timeline_container}`}
    >
      <div className={styles.timeline_section}>
        <h2 className="text-3xl font-bold underline">{firstTitle}</h2>
        <div className={styles.timeline}>
          <Resume
            year="2012 to 2014"
            info="Bachelor Degree"
            cardTitle="University of Studies"
            description="Lorem ipsum indolor st amet, cmetc ur adips locing elit, sedi dinm indolo sum indolor st ailmes."
          />
          <Resume
            year="2010 to 2012"
            info="Master Degree"
            cardTitle="University of South Education"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
          />
          <Resume
            year="2008 to 2010"
            info="Advanced Post Graduate"
            cardTitle="University of South Education"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
          />
        </div>
      </div>

      <div className={styles.timeline_section}>
        <h2 className="text-3xl font-bold underline">{secondTitle}</h2>
        <div className={styles.timeline}>
          <Resume
            year="2018 to Present"
            info="Graphic Designer / Web Designer"
            cardTitle="Company"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
          />
          <Resume
            year="2016 to 2018"
            info="Junior UI/UX Designer"
            cardTitle="Company"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
          />
          <Resume
            year="2004 to 2016"
            info="Senior UI/UX Designer"
            cardTitle="Company"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
          />
        </div>
      </div>
    </div>
  );
};

export default ResumeComponent;
