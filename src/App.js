import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Game from "./components/Game";

function App() {
  const [isStarted, setIsStarted] = useState(false);

  const handleStartGame = () => {
    setIsStarted(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-600 to-gray-900 p-4 text-white text-center">
      <h1 className="text-3xl text-center font-bold mb-4">Super Master Mind</h1>
      <p className="mb-12">
        Vous devrez retrouver une combinaison aléatoire de 5 couleurs en 12
        tours maximum !
      </p>
      <p>(Sauf toi Marie, arrête de gagner 😡)</p>
      {isStarted ? (
        <Game />
      ) : (
        <Button onClick={handleStartGame} text="Jouer !" />
      )}
    </div>
  );
}

export default App;
