import { Loader } from "lucide-react";
import { useRequest } from "../hooks/useRequest";
import { LayoutProps, SkillCardProps } from "../interfaces/Types";
import styles from "../style/About.module.css";
import Card from "./pages/about/Card";

const Skills: React.FC<LayoutProps> = ({ isGridLayout }) => {
  const { data, error, loading } = useRequest<SkillCardProps>({
    url: "skills", // API հասցեն․․․
  });

  if (loading) {
    return (
      <div className="flex justify-center">
        <Loader />
      </div>
    );
  }

  if (error) {
    return <div className="text-3xl">No data</div>;
  }

  return (
    <div
      className={`${isGridLayout ? styles.grid_layout : styles.inline_layout}`}
    >
      {data.map((item, index) => (
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
