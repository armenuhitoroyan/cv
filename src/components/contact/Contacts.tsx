import React from "react";

import Card from "./Card";
import { FaLocationArrow, FaPhone, FaVoicemail } from "react-icons/fa";
import styles from "../../style/Contact.module.css";
import { ContactCardProps } from "../../interfaces/Types";
import { useRequest } from "../../hooks/useRequest";
import Loader from "../Loading";

// Icon-ների map-ավորում
const iconsMap: { [key: string]: React.ElementType } = {
  FaPhone: FaPhone,
  FaVoicemail: FaVoicemail,
  FaLocationArrow: FaLocationArrow,
};

const ContactList: React.FC = () => {
  const { data, error, loading } = useRequest<ContactCardProps>({
    url: "contacts", // API հասցեն․․․
  });

  if (loading) {
    return (
      <div>
        <Loader />
      </div>
    );
  }

  if (error) {
    return <div>No data</div>;
  }

  return (
    <div
      className={`w-full flex flex-col items-center justify-center gap-10 lg:flex-row ${styles.contacts_container}`}
    >
      {data.map((contact, index) => {
        // Ստանում ենք ճիշտ իկոնը `iconsMap`-ից
        const IconComponent = iconsMap[contact.icon];

        return (
          <Card
            key={index}
            icon={IconComponent ? <IconComponent /> : null} // Եթե icon-ը գոյություն չունի, ցույց տալ null
            title={contact.title}
            description={contact.description}
          />
        );
      })}
    </div>
  );
};

export default ContactList;
