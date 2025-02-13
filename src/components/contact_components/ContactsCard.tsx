import React from "react";
import { FaPhone, FaVoicemail, FaLocationArrow } from "react-icons/fa";

import styles from "../../style/Contact.module.css";

import Data from "../../interface/Data";
import ContactCard from "./ContactCard";

const ContactsCard: React.FC = () => {
  const userdata: Data[] = [
    {
      icon: <FaPhone className={styles.fa_icon} />,
      title: "Phone Number",
      description: "+(123) 456 7890",
    },
    {
      icon: <FaVoicemail className={styles.fa_icon} />,
      title: "Email Address",
      description: "Admin@example.com",
    },
    {
      icon: <FaLocationArrow className={styles.fa_icon} />,
      title: "Office Location",
      description: "123 New York E Block 12670, Street 2101.",
    },
  ];

  return (
    <div
      className={`w-full flex flex-col items-center justify-center gap-10 lg:flex-row ${styles.contacts_container}`}
    >
      {userdata.map((data, index) => (
        <ContactCard
          key={index}
          icon={data.icon}
          title={data.title}
          description={data.description}
        />
      ))}
    </div>
  );
};

export default ContactsCard;
