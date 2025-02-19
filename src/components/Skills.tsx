import { LayoutProps } from "../interfaces/Types";
import styles from "../style/About.module.css";
import Card from "./pages/about/Card";
import Knowledges from "../assets/files/json/Skills.json";

const Skills: React.FC<LayoutProps> = ({ isGridLayout }) => {
  const skills = Knowledges;

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
