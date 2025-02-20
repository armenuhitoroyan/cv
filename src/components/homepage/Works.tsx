import React from "react";
import { useState } from "react";
import RotatingImage from "../RotatingImage";
import Designs from "../../assets/files/json/Designs.json";
import Categories from "../../assets/files/json/Categories.json";

export const Works: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredImages = Designs.filter((image) => {
    if (activeCategory === "all") return true; // ցույց տա բոլոր նկարները
    if (activeCategory === "design") return image.category === "showcase"; // միայն showcase ֆոլդըրի նկարները
    if (activeCategory === "branding") return image.id === 1 || image.id === 3; // 1-ին և 3-րդ նկարները
    if (activeCategory === "development")
      return image.id === 2 || image.id === 8; // 2-րդ և 8-րդ
    if (activeCategory === "ui/ux") return image.category === "showcase"; // միայն showcase ֆոլդըրի նկարները
    return false;
  });
  return (
    <div>
      {/* Radio input-ներ */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-6 ">
        {Categories.map((category) => (
          <label
            key={category.id}
            className="flex  items-center gap-2 cursor-pointer"
          >
            <input
              type="radio"
              name="category"
              value={category.id}
              checked={activeCategory === category.id}
              onChange={(e) => setActiveCategory(e.target.value)}
              className="hidden peer"
            />
            <div
              className={`w-6 h-6 rounded-full border-2 ${
                activeCategory === category.id
                  ? "bg-purple-600 border-purple-600"
                  : "bg-gray-200 border-gray-400"
              } peer-checked:ring-2 peer-checked:ring-purple-600`}
            ></div>
            <span className="text-gray-800">{category.label}</span>
          </label>
        ))}
      </div>
      {/* Նկարներ */}
      <div className={`grid grid-cols-1 lg:grid-cols-3 gap-4 `}>
        {filteredImages.map((image) => (
          <div key={image.id} className="text-center">
            <RotatingImage
              src={`https://afsu.tohidur.com/img/${image.src}.jpg`}
              width={`100%`}
              height={`auto`}
            />
            <div style={{ textAlign: "start" }}>
              <h3 className="text-lg text-gray-300 font-semibold mt-4 mb-4">
                <a
                  href="#"
                  className="text-black text-3xl font-bold  hover:underline hover:text-black"
                >
                  {image.title}
                </a>
              </h3>
              <h6
                style={{ margin: "0 auto" }}
                className="text-gray-600 text-sm"
              >
                {image.description}
              </h6>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Works;
