import React from "react";
import colors from "../utils/colors";

const ColorsRow = ({ guessColors }) => {
  const getColorClass = (colorCode) => {
    const foundColor = colors.filter((col) => col.code === colorCode);
    return foundColor[0].color;
  };

  return (
    <div className="flex gap-1 mr-4">
      {guessColors &&
        guessColors.map((colorCode, index) => (
          <div
            key={index}
            className={`h-8 w-8 rounded-full border border-black ${getColorClass(
              colorCode
            )}`}
          ></div>
        ))}
    </div>
  );
};

export default ColorsRow;
