import React from "react";

const PrevNextComponent: React.FC = () => {
  return (
    <div className="flex justify-between items-center w-full bg-gray-200 h-20 rounded-3xl">
      <a
        style={{ marginInlineStart: "15px" }}
        className="w-10 h-20 border border-gray-200 rounded-lg bg-white"
        href="#"
      ></a>
      <div className="flex justify-between items-center w-full">
        <span
          style={{ marginInlineStart: "15px" }}
          className="text-black font-bold"
        >
          Prev-work
        </span>
        <span
          style={{ marginInlineEnd: "15px" }}
          className="text-black font-bold"
        >
          Next-work
        </span>
      </div>
      <a
        style={{ marginInlineEnd: "15px" }}
        className="w-10 h-20 border border-gray-200 rounded-lg bg-white"
        href="#"
      ></a>
    </div>
  );
};

export default PrevNextComponent;
