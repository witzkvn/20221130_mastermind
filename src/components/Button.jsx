import React from "react";

const Button = ({ onClick, text }) => {
  return (
    <button onClick={onClick} className="btn btn-primary">
      {text}
    </button>
  );
};

export default Button;
