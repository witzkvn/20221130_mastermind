import React, { useEffect, useState } from "react";
import Button from "./Button";
import ColorButton from "./ColorButton";
import GuessRow from "./GuessRow";

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
    // generate random combinaison
    const getColorValue = (colorCode, index) => {
        console.log("CALL guessUpdate");
        const guessCopy = [...guessCombinaison];
        guessCopy[index] = colorCode;

        setGuessCombinaison(guessCopy);
    };

    useEffect(() => {
        console.log(prevGuess);
    }, [prevGuess]);

    const playRound = () => {
        setPrevGuess((prev) => [guessCombinaison, ...prev]);
        setRound((prev) => prev + 1);
    };

    return (
        <div>
            <div className="rounded-md bg-white p-4 mb-4">
                <p className="mb-4 text-black">Tour {round}/12</p>
                <div className="flex gap-2 justify-center mb-4">
                    <ColorButton
                        getColorValue={getColorValue}
                        buttonIndex={0}
                    />
                    <ColorButton
                        getColorValue={getColorValue}
                        buttonIndex={1}
                    />
                    <ColorButton
                        getColorValue={getColorValue}
                        buttonIndex={2}
                    />
                    <ColorButton
                        getColorValue={getColorValue}
                        buttonIndex={3}
                    />
                    <ColorButton
                        getColorValue={getColorValue}
                        buttonIndex={4}
                    />
                </div>
                <Button text="Valider combinaison" onClick={playRound} />
            </div>
            <div>
                {prevGuess &&
                    prevGuess.map((guess, index) => (
                        <GuessRow guess={guess} round={index + 1} />
                    ))}
            </div>
        </div>
    );
};

export default Game;
