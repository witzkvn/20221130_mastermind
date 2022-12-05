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
    <div className="min-h-screen flex justify-center py-4 bg-gradient-to-br from-indigo-900 to-gray-700">
      <div className="card bg-base-300 shadow-xl text-center max-w-xl">
        <div className="card-body flex-initial">
          <h1 className="text-3xl text-center font-bold mb-4 text-white">
            🧠 SUPER MASTERMIND 🧠
          </h1>
          <p className="mb-6">
            Vous devrez retrouver une combinaison aléatoire de 5 couleurs en 12
            tours maximum ! Bonne chance 😉
          </p>
          {isStarted ? (
            <>
              <span className="border-t-2 border-gray-200/25 mb-6"></span>
              <Game />
            </>
          ) : (
            <Button onClick={handleStartGame} text="Jouer !" />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
