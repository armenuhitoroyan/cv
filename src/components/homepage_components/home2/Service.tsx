import React from "react";
import styles from "../../../style/Home2.module.css";
import { Cloud, Layers, PenTool, Smartphone } from "lucide-react";

interface Service {
  title: string;
  description: string;
  icon: React.ElementType;
  bgColor: string;
}

const services: Service[] = [
  {
    title: "Graphics Design",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    icon: Layers,
    bgColor: "#6de643",
  },
  {
    title: "Design Tools",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    icon: PenTool,
    bgColor: "#f39b01",
  },
  {
    title: "Stunning Design",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    icon: Smartphone,
    bgColor: "#e643ae",
  },
  {
    title: "Project Management",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    icon: Cloud,
    bgColor: "#436de6",
  },
];

const OurServices: React.FC = () => {
  return (
    <section className={`w-full flex flex-col lg:flex-row justify-around`}>
      <div className={`${styles.services}`}>
        <div className="w-full flex flex-col gap-5 lg:flex-row justify-around">
          {services.map((service, index) => (
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
                  <div>
                    <service.icon />
                  </div>
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
