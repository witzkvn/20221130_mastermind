import React from "react";
import colors from "../utils/colors";

const ColorsRow = ({ guessColors }) => {
  const getColorClass = (colorCode) => {
    const foundColor = colors.filter((col) => col.code === colorCode);
    return foundColor[0].color;
  };

  return (
    <div className="flex justify-center gap-1">
      {guessColors &&
        guessColors.map((colorCode, index) => (
          <div
            key={index}
            className={`h-7 w-7 md:h-10 md:w-10 rounded-full ${getColorClass(
              colorCode
            )}`}
          ></div>
        ))}
    </div>
  );
};

export default ColorsRow;
