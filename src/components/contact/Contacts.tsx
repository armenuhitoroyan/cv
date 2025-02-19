import React from "react";
import { FaPhone, FaVoicemail, FaLocationArrow } from "react-icons/fa";
import ContactsData from "../../assets/files/json/contacts.json";

import styles from "../../style/Contact.module.css";

import Data from "../../interfaces/Data";
import Card from "./Card";

// Icon-ների map-ավորում
const iconsMap: { [key: string]: React.ElementType } = {
  FaPhone,
  FaVoicemail,
  FaLocationArrow,
};

const Contacts: React.FC = () => {
  // JSON ֆայլից icon-ի անունները փոխում ենք իրական icon-ներով
  const userdata: Data[] = ContactsData.map((data) => ({
    ...data,
    icon: iconsMap[data.icon] || FaPhone, // Default icon: FaPhone
  }));

  return (
    <div
      className={`w-full flex flex-col items-center justify-center gap-10 lg:flex-row ${styles.contacts_container}`}
    >
      {userdata.map((data, index) => (
        <Card
          key={index}
          icon={<data.icon className={styles.fa_icon} />} // Այստեղ icon-ը JSX է դարձված
          title={data.title}
          description={data.description}
        />
      ))}
    </div>
  );
};

export default Contacts;
