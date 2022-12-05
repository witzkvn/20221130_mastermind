import React from "react";
import colors from "../utils/colors";
import ColorsRow from "./ColorsRow";

const GuessRow = ({ guess, round, wellPlacedCount, misplacedCount }) => {
  return (
    <div className="flex mb-2 items-center justify-between border-2 border-black rounded-md bg-white">
      <div className="mr-4 border-r-2 border-black">
        <div className="bg-black h-6 w-6 flex justify-center items-center font-bold">
          {wellPlacedCount}
        </div>
        <div className="bg-white text-black h-6 w-6 flex justify-center items-center font-bold">
          {misplacedCount}
        </div>
      </div>

      {guess && <ColorsRow guessColors={guess.guessColors} />}
      <div className="px-4 border-l-2 border-black text-black font-bold">
        {round}
      </div>
    </div>
  );
};

export default GuessRow;
