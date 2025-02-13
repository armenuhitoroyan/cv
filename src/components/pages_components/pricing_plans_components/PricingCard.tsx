import React from "react";
import styles from "../../../style/Home2.module.css";

interface PricingCardProps {
  widthTop?: number;
  widthBottom?: number;
  height?: number;
  marginLeft?: string;
  marginTop?: string;
  btnHeight?: number;
}

const PricingCard: React.FC<PricingCardProps> = ({
  marginLeft,
  marginTop,
  widthBottom,
  widthTop,
  height,
  btnHeight,
}) => {
  return (
    <div className="w-full flex justify-start items-center min-h-screen p-4">
      <div
        style={{ width: `${widthBottom}%` }}
        className=" flex-col lg:flex-col max-w-4xl w-full gap-4"
      >
        {/* Purple Card */}
        <div className="  bg-indigo-900 rounded-3xl p-8 text-white">
          <h2 className="text-2xl font-semibold mb-2">Premium Package</h2>
          <div className="flex items-baseline mb-8">
            <span className="text-5xl font-bold">$350</span>
            <span className="ml-2 text-gray-300">/ month</span>
          </div>
          <div className="flex items-center mb-4">
            <svg
              className="w-8 h-8 text-purple-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
          </div>
        </div>

        {/* White Card */}
        <div
          style={{
            marginTop: `${marginTop}`,
            width: `${widthTop}%`,
            marginLeft: `${marginLeft}`,
            height: `${height}px`,
          }}
          className="w-full bg-white rounded-3xl p-8 shadow-lg"
        >
          <div className="space-y-6">
            <div className="flex items-center">
              <div className="h-2 w-2 rounded-full bg-purple-500 mr-4"></div>
              <span
                style={{ fontSize: "14px" }}
                className="text-lg font-medium"
              >
                Website Design
              </span>
            </div>
            <div className="flex items-center">
              <div className="h-2 w-2 rounded-full bg-purple-500 mr-4"></div>
              <span
                style={{ fontSize: "14px" }}
                className="text-lg font-medium"
              >
                Graphic Designing
              </span>
            </div>
            <div className="flex items-center">
              <div className="h-2 w-2 rounded-full bg-purple-500 mr-4"></div>
              <span
                style={{ fontSize: "14px" }}
                className="text-lg font-medium"
              >
                Web Development
              </span>
            </div>
            <div className="flex items-center">
              <div className="h-2 w-2 rounded-full bg-purple-500 mr-4"></div>
              <span
                style={{ fontSize: "14px" }}
                className="text-lg font-medium"
              >
                Business Consulting
              </span>
            </div>
            <button
              style={{ height: `${btnHeight}px` }}
              className={`w-full  py-3 px-6  font-medium border-2 border-purple-600 rounded-full hover:bg-purple-600 hover:text-white transition-colors duration-300 mt-6 ${styles.select_btn}`}
            >
              Select Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
