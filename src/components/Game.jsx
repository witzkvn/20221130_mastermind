import React, { useCallback, useEffect, useState } from "react";
import Button from "./Button";
import ColorButton from "./ColorButton";
import GuessRow from "./GuessRow";
import aleatNumberBetween from "../utils/aleatNumberBetween";
import ColorsRow from "./ColorsRow";

const Game = () => {
  const [round, setRound] = useState(1);
  const [prevGuess, setPrevGuess] = useState([]);
  const [guessCombinaison, setGuessCombinaison] = useState([
    "0",
    "0",
    "0",
    "0",
    "0",
  ]);
  const [solCombinaison, setSolCombinaison] = useState([]);
  const [solCountCombinaison, setSolCountCombinaison] = useState({});
  const [isWin, setIsWin] = useState(false);
  const [isLost, setIsLost] = useState(false);

  // generate random combinaison
  const getColorValue = (colorCode, index) => {
    const guessCopy = [...guessCombinaison];
    guessCopy[index] = colorCode;

    setGuessCombinaison(guessCopy);
  };

  const startNewGame = useCallback(() => {
    const newSolution = generateSolution();
    console.log("I see you cheating 👀 but here you go :", newSolution);
    setSolCombinaison(newSolution);

    const count = {};
    for (const element of newSolution) {
      if (count[element]) {
        count[element] += 1;
      } else {
        count[element] = 1;
      }
    }
    setSolCountCombinaison(count);
  }, []);

  useEffect(() => {
    startNewGame();
  }, [startNewGame]);

  const generateSolution = () => {
    const solArray = [];
    for (let i = 0; i < 5; i++) {
      solArray[i] = aleatNumberBetween(0, 8);
    }
    return solArray;
  };

  const playRound = () => {
    const [wellPlacedCount, misplacedCount] = calculateMatching();
    setPrevGuess((prev) => [
      { wellPlacedCount, misplacedCount, guessColors: guessCombinaison },
      ...prev,
    ]);

    if (wellPlacedCount === 5) {
      setIsWin(true);
      return;
    }

    if (round === 12) {
      setIsLost(true);
    }

    setRound((prev) => prev + 1);
  };

  const calculateMatching = () => {
    const result = solCombinaison.map((el) => undefined);

    const count = {};
    let wellPlacedCount = 0;
    let misplacedCount = 0;

    // do good first
    for (let i = 0; i < solCombinaison.length; i++) {
      if (guessCombinaison[i] === solCombinaison[i]) {
        if (count[guessCombinaison[i]]) {
          count[guessCombinaison[i]] += 1;
        } else {
          count[guessCombinaison[i]] = 1;
        }

        result[i] = true; // set different of undefined to skip in the misplaced verification
        wellPlacedCount++;
      }
    }

    // do misplaced then
    for (let i = 0; i < solCombinaison.length; i++) {
      if (result[i] !== undefined) continue;

      const isValueCountFull =
        count[guessCombinaison[i]] >= solCountCombinaison[guessCombinaison[i]];

      if (solCombinaison.includes(guessCombinaison[i]) && !isValueCountFull) {
        misplacedCount++;
      }

      if (count[guessCombinaison[i]]) {
        count[guessCombinaison[i]] += 1;
      } else {
        count[guessCombinaison[i]] = 1;
      }
    }

    return [wellPlacedCount, misplacedCount];
  };

  const resetGame = () => {
    setRound(1);
    setPrevGuess([]);
    setGuessCombinaison(["0", "0", "0", "0", "0"]);
    setSolCombinaison([]);
    setSolCountCombinaison({});
    setIsWin(false);
    setIsLost(false);
    startNewGame();
  };

  return (
    <>
      <div
        className={`card mb-4 ${
          isWin
            ? "bg-emerald-800 text-white"
            : isLost
            ? "bg-rose-800 text-white"
            : "bg-base-200"
        }`}
      >
        <div className="card-body items-center p-4 md:p-6">
          {isWin ? (
            <>
              <p className="text-3xl">🎉🎉🎉</p>
              <h2 className="card-title text-3xl">Félicitations !</h2>
              <p>Vous avez trouvé la bonne combinaison en</p>
              <p className="font-bold text-black text-3xl mb-6">
                {round} tour{round > 1 ? "s" : ""}
              </p>
              <div className="mb-6 flex justify-center">
                <ColorsRow guessColors={solCombinaison} />
              </div>
              <Button text="Rejouer ?" onClick={resetGame} />
            </>
          ) : isLost ? (
            <>
              <p className="text-3xl">😔😔😔</p>
              <h2 className="card-title text-3xl">Vous avez perdu ...</h2>
              <p>Vous n'avez pas trouvé la combinaison gagnante en 12 tours.</p>
              <p className="mb-6">La solution était :</p>
              <div className="mb-6 flex justify-center">
                <ColorsRow guessColors={solCombinaison} />
              </div>
              <Button text="Rejouer ?" onClick={resetGame} />
            </>
          ) : (
            <>
              <p className="card-title mb-8">Tour {round}/12</p>
              <div className="flex gap-2 justify-center mb-8">
                <ColorButton getColorValue={getColorValue} buttonIndex={0} />
                <ColorButton getColorValue={getColorValue} buttonIndex={1} />
                <ColorButton getColorValue={getColorValue} buttonIndex={2} />
                <ColorButton getColorValue={getColorValue} buttonIndex={3} />
                <ColorButton getColorValue={getColorValue} buttonIndex={4} />
              </div>
              <Button text="Valider la combinaison" onClick={playRound} />
            </>
          )}
        </div>
      </div>
      {prevGuess && prevGuess.length > 0 && (
        <div className="card bg-base-200">
          <div className="card-body p-4 md:p-6">
            {prevGuess.map((guess, index) => (
              <GuessRow
                key={index}
                guess={guess}
                round={prevGuess.length - index}
                wellPlacedCount={guess.wellPlacedCount}
                misplacedCount={guess.misplacedCount}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Game;
