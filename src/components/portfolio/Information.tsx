import React from "react";
import styles from "../../style/Portfolio.module.css";
import { CalendarIcon, InfoIcon, LayersIcon, TagIcon } from "lucide-react";
import Download from "../form/Download";
import { InfoProps } from "../../interfaces/Types";

const Information: React.FC<InfoProps> = ({
  client,
  category,
  dateStart,
  dateEnd,
  resources,
}) => {
  return (
    <div className={`${styles.card}  w-full  flex-col rounded-2xl lg:flex-col`}>
      <div className="space-y-6 flex flex-col lg:flex-col">
        {/* Client */}
        <div className="flex items-start space-x-4">
          <InfoIcon
            style={{ color: "#6928e6" }}
            className="w-10 h-10 flex-shrink-0"
          />
          <div className="flex flex-col">
            <p className="font-bold">CLIENT:</p>
            <p className="text-gray-400">{client}</p>
          </div>
        </div>
        <hr className="bg-gray" />

        {/* Category */}
        <div className="flex items-start space-x-4">
          <TagIcon
            style={{ color: "#6928e6" }}
            className="flex-shrink-0 w-10 h-10"
          />
          <div className="flex flex-col">
            <p className="font-bold">CATEGORY:</p>
            <p className="text-gray-400">{category}</p>
          </div>
        </div>
        <hr className="bg-gray" />

        {/* Date */}
        <div className="flex items-start space-x-4">
          <CalendarIcon
            style={{ color: "#6928e6" }}
            className="flex-shrink-0 w-10 h-10"
          />
          <div className="flex flex-col">
            <p className="font-bold">DATE:</p>
            <p className="text-gray-400">
              START: {dateStart} END: {dateEnd}
            </p>
          </div>
        </div>
        <hr className="bg-gray" />

        {/* Resources */}
        <div className="flex items-start space-x-4">
          <LayersIcon
            style={{ color: "#6928e6" }}
            className="flex-shrink-0 w-10 h-10"
          />
          <div className="flex flex-col">
            <p className="font-bold">RESOURCES:</p>
            <p className="text-gray-400">{resources}</p>
          </div>
        </div>
        <hr className="bg-gray" />
      </div>

      <div className="mt-6 text-center !bg-white">
        <Download
          text="Download CV"
          href="./assets/files/Armenuhi Toroyan CV.pdf"
          download="Armenuhi Toroyan CV.pdf"
          color="#6928e6"
          width="200px"
        />
      </div>
    </div>
  );
};

export default Information;
