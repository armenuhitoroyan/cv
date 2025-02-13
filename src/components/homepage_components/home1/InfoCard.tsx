import React from "react";
import styles from "../../../style/Homepage.module.css"


type InfoCardProps = {
  IconComponent?: React.FC<React.SVGProps<SVGSVGElement>>;
  title: string;
  text: string;
};

const InfoCard: React.FC<InfoCardProps> = ({ IconComponent, title, text }) => {
  return (
    <div
      style={{ border: "3px solid #7b2ff7" }}
      // className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center gap-x-4"
      className={`p-10 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex flex-col sm:flex-row items-center gap-x-10 ${styles.infocard}`}
    >
      <div
        style={{ background: "#7b2ff7", width: "70px", height: "70px" }}
        className="shrink-0 flex items-center justify-center rounded-xl"
      >
        {IconComponent && <IconComponent style={{ color: "#fff" }} />}
      </div>
      <div>
        <div className="text-xl font-medium text-black">{title}</div>
        <p style={{ fontSize: "15px" }} className="text-slate-500">
          {text}
        </p>
      </div>
    </div>
  );
};

export default InfoCard;
