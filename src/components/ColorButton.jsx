import React, { useState, useEffect } from "react";
import colors from "../utils/colors";

const ColorButton = ({ getColorValue, buttonIndex }) => {
    const [colorIndex, setColorIndex] = useState(0);
    const [selectedColor, setSelectedColor] = useState(colors[0]);

    useEffect(() => {
        setSelectedColor(colors[colorIndex]);
    }, [colorIndex]);

    const updateIndex = () => {
        let newIndex = colorIndex;

        if (colorIndex === colors.length - 1) {
            newIndex = 0;
        } else {
            newIndex = colorIndex + 1;
        }

        const newColor = colors[newIndex];
        setColorIndex(newIndex);
        setSelectedColor(newColor);
        getColorValue(newColor.code, buttonIndex);
    };

    return (
        <div className="flex flex-col items-center">
            <div
                className={`h-12 w-12 rounded-full border border-black  ${
                    selectedColor ? selectedColor.color : "bg-red-600"
                }`}
            ></div>

            <div className="cursor-pointer" onClick={updateIndex}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="black"
                    className="w-10 h-10 "
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                </svg>
            </div>
        </div>
    );
};

export default ColorButton;
