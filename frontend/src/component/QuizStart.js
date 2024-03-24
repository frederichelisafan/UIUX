import { useState, useEffect, useContext } from "react";
import { QuizContext } from "../helpers/Context";

const QuizStart = () => {
  const { setGameState } = useContext(QuizContext);
  const [counter, setCounter] = useState(15);

  useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);

    if (counter === 0) {
      setGameState("gameOver");
    }
    return () => clearInterval(timer);
  }, [counter, setGameState]);
  return (
    <>
      <p>{counter}</p>
    </>
  );
};

export default QuizStart;
