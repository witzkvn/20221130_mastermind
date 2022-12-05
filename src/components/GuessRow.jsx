import React from "react";
import colors from "../utils/colors";
import ColorsRow from "./ColorsRow";

const GuessRow = ({ guess, round, wellPlacedCount, misplacedCount }) => {
  return (
    <div className="card bg-base-300 ">
      <div className="card-body flex-row justify-between items-center">
        <div className="w-10 h-10 flex justify-center items-center bg-gray-800 rounded-lg">
          <div className="tooltip" data-tip="Numéro du tour">
            <div className="cursor-pointer">{round}</div>
          </div>
        </div>

        {guess && <ColorsRow guessColors={guess.guessColors} />}

        <div className="w-12 h-12 flex flex-col justify-center items-center bg-gray-800 rounded-lg ">
          <div className="tooltip" data-tip="Nombre de bien placés">
            <div className="cursor-pointer badge bg-black text-white font-bold">
              {wellPlacedCount}
            </div>
          </div>
          <div className="tooltip" data-tip="Nombre de mal placés">
            <div className="cursor-pointer badge bg-white text-black font-bold">
              {misplacedCount}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuessRow;
