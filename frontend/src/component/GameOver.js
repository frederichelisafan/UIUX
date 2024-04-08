import React from "react";
import { useNavigate } from "react-router-dom";
import { PATH } from "../helpers/path";

const GameOver = () => {
  const navigate = useNavigate();

  function playAgain() {
    window.location.reload();
  }

  function backToMenu() {
    navigate("/" + PATH.QUIZ);
  }
  return (
    <div className="grow">
      <p className="mt-40 font-raleway text-[#443091] text-4xl font-bold  text-center">
        GAME <span className="text-[#B50096]">OVER</span>
      </p>
      <div className="text-center mb-8">
        <h6>Oops you run out of time</h6>
        <h6>Better luck next time</h6>
      </div>
      <div className="flex justify-center">
        <button
          className="bg-primary text-white rounded mr-5"
          onClick={backToMenu}
        >
          Back to menu
        </button>
        <button className="bg-primary text-white rounded" onClick={playAgain}>
          Play again
        </button>
      </div>
    </div>
  );
};

export default GameOver;
