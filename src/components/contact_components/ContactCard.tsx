import React from "react";
import styles from "../../style/Contact.module.css";

type ContactCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const ContactCard: React.FC<ContactCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className={`${styles.contact_item} flex-col items-center p-5`}>
      <div>
        <div></div>
        <div className={`${styles.icon}`}>{icon}</div>
      </div>

      <a href="#" className={`${styles.contact_title} mt-5`}>
        {title}
      </a>
      <div>
        <p className={`${styles.contact_description} `}>{description}</p>
      </div>
    </div>
  );
};

export default ContactCard;
