import React from "react";
import colors from "../utils/colors";

const GuessRow = ({ guess, round }) => {
    const getColorClass = (colorCode) => {
        const foundColor = colors.filter((col) => col.code === colorCode);
        console.log(
            "🚀 ~ file: GuessRow.jsx:7 ~ getColorClass ~ foundColor",
            foundColor
        );
        return foundColor[0].color;
    };

    return (
        <div className="flex mb-4 items-center">
            <div className="mr-4">mp bp</div>
            <div className="flex gap-1 mr-4">
                {guess &&
                    guess.map((colorCode) => (
                        <div
                            className={`h-8 w-8 rounded-full border border-black ${getColorClass(
                                colorCode
                            )}`}
                        ></div>
                    ))}
            </div>
            <div>{round}</div>
        </div>
    );
};

export default GuessRow;
