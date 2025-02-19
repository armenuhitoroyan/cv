import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../contact/Card";
import { FaLocationArrow, FaPhone, FaVoicemail } from "react-icons/fa";
import styles from "../../style/Contact.module.css";

interface Contact {
  title: string;
  description: string;
  icon: string; // icon-ի անունը որպես տող
  id: string;
}

// Icon-ների map-ավորում
const iconsMap: { [key: string]: React.ElementType } = {
  FaPhone: FaPhone,
  FaVoicemail: FaVoicemail,
  FaLocationArrow: FaLocationArrow,
};

const ContactList: React.FC = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios
      .get<Contact[]>("http://localhost:3000/contacts")
      .then((resp) => {
        setContacts(resp.data);
      })
      .catch((error) => {
        setError(error.message);
      });
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div
      className={`w-full flex flex-col items-center justify-center gap-10 lg:flex-row ${styles.contacts_container}`}
    >
      {contacts.map((contact, index) => {
        // Ստանում ենք ճիշտ իկոնը `iconsMap`-ից
        const IconComponent = iconsMap[contact.icon];

        return (
          <Card
            key={index}
            icon={IconComponent ? <IconComponent /> : null} // Եթե իկոնը գոյություն չունի, ցույց տալ null
            title={contact.title}
            description={contact.description}
          />
        );
      })}
    </div>
  );
};

export default ContactList;
