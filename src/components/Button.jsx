import React from "react";

const Button = ({ onClick, text }) => {
    return (
        <button
            onClick={onClick}
            className="bg-blue-500 hover:bg-blue-400 font-bold py-2 px-8 border-b-4 border-blue-700 hover:border-blue-500 rounded"
        >
            {text}
        </button>
    );
};

export default Button;
