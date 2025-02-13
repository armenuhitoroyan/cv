import React from "react";
import styles from "../../style/Blog.module.css";

interface NewsProps {
  img: string;
  date: string;
  title: string;
}

const News: React.FC<NewsProps> = ({ img, date, title }) => {
  return (
    <div
      className={`flex flex-col justify-between md:flex-row ${styles.news_container}`}
    >
      <div>
        <img src={img} alt="Blog News" />
      </div>
      <div className="ml-5">
        <h4>{date}</h4>
        <a href="#" className="">
          {title}
        </a>
      </div>
    </div>
  );
};

interface FolderProps {
  folder: string;
}

const RecentNews: React.FC<FolderProps> = ({ folder }) => {
  return (
    <div className={`${styles.card} mt-4`}>
      <h2 className={styles.cardTitle}>Recent News</h2>
      <div className={styles.divider}></div>
      {[1, 2, 3, 4].map((_, index) => (
        <News
          key={index}
          img={`https://afsu.tohidur.com/img/${folder}-${index + 1}.jpg`}
          date="December 5, 2023"
          title="Interview Photographer Mark Seliger"
        />
      ))}
    </div>
  );
};

export default RecentNews;
