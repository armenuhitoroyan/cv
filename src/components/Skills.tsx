import { LayoutProps } from "../interfaces/Types";
import styles from "../style/About.module.css";
import Card from "./pages/about/Card";

const Skills: React.FC<LayoutProps> = ({ isGridLayout }) => {
  const skills = [
    { start: 4, percentage: 50, skill: "Graphic Design" },
    { start: 18, percentage: 75, skill: "Development" },
    { start: 7, percentage: 38, skill: "Marketing Ideas" },
    { start: 10, percentage: 63, skill: "Web Management" },
  ];

  return (
    <div
      className={`${isGridLayout ? styles.grid_layout : styles.inline_layout}`}
    >
      {skills.map((item, index) => (
        <Card
          key={index}
          percentage={item.percentage}
          skill={item.skill}
          start={item.start}
          end={item.percentage}
          duration={1}
          label={item.skill}
          isGridLayout={isGridLayout}
        />
      ))}
    </div>
  );
};

export default Skills;
