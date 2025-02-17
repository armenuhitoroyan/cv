import React from "react";
import styles from "../../style/Portfolio.module.css";
import { CalendarIcon, InfoIcon, LayersIcon, TagIcon } from "lucide-react";
import Download from "../form/Download";
import { InformationCardProps } from "../../interfaces/Types";

const Card: React.FC<InformationCardProps> = ({
  client,
  category,
  dateStart,
  dateEnd,
  resources,
}) => {
  return (
    <div className={`${styles.card}  w-full  flex-col rounded-2xl md:flex-col`}>
      <div className="space-y-6">
        {/* Client, Category */}
        <div className="flex flex-col items-start gap-4 space-x-4 md:flex-row">
          <div className={styles.card_content}>
            <InfoIcon
              style={{ color: "#6928e6" }}
              className="w-10 h-10 flex-shrink-0"
            />
            <div className="flex flex-col">
              <p className="font-bold">CLIENT:</p>
              <p className="text-gray-400">{client}</p>
            </div>
          </div>
          <div className={styles.card_content}>
            <TagIcon
              style={{ color: "#6928e6" }}
              className="flex-shrink-0 w-10 h-10"
            />
            <div className="flex flex-col">
              <p className="font-bold">CATEGORY:</p>
              <p className="text-gray-400">{category}</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start gap-4 space-x-4 md:flex-row">
          <div className={styles.card_content}>
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
          <div className={styles.card_content}>
            <LayersIcon
              style={{ color: "#6928e6" }}
              className="flex-shrink-0 w-10 h-10"
            />
            <div className="flex flex-col">
              <p className="font-bold">RESOURCES:</p>
              <p className="text-gray-400">{resources}</p>
            </div>
          </div>
        </div>

        {/* Resources */}
      </div>

      <div className={`mt-10 text-center ${styles.download}`}>
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

export default Card;
