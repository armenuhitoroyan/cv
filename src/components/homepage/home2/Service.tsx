import React from "react";
import styles from "../../../style/Home2.module.css";
import { Cloud, Layers, PenTool, Smartphone } from "lucide-react";

import Services from "../../../assets/files/json/Services.json";
import { Service } from "../../../interfaces/Types";

// Icon-ների համապատասխանեցում
const iconsMap: { [key: string]: React.ElementType } = {
  Layers,
  PenTool,
  Smartphone,
  Cloud,
};

const services: Service[] = Services as Service[];

const OurServices: React.FC = () => {
  return (
    <section className={`w-full flex flex-col lg:flex-row justify-around`}>
      <div className={`${styles.services}`}>
        <div className="w-full flex flex-col gap-5 lg:flex-row justify-around">
          {services.map((service, index) => {
            const IconComponent = iconsMap[service.icon] || Cloud; // Default: Cloud

            return (
              <div key={index} className={styles.card}>
                <div className={styles.boxes}>
                  <div
                    className={styles.box1}
                    style={{ backgroundColor: service.bgColor }}
                  ></div>
                  <div
                    className={`flex justify-center items-center ${styles.box2}`}
                    style={{ backgroundColor: service.bgColor }}
                  >
                    <IconComponent />
                  </div>
                </div>
                <h4 className="text-center">{service.title}</h4>
                <div
                  className="!text-center"
                  style={{
                    width: "100%",
                    textAlign: "center",
                  }}
                >
                  <p className={styles.desc}>Something {service.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
