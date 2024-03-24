import { useContext } from "react";
import { QuizContext } from "../helpers/Context";

const QuizMenu = () => {
  const { setGameState, selectedQuiz, setSelectedQuiz } =
    useContext(QuizContext);

  const startQuiz = () => {
    setGameState("quiz");
  };

  const topiclist = [
    {
      id: 0,
      title: "User Interface",
      topic: "UI",
    },
    {
      id: 1,
      title: "User Experience",
      topic: "UX",
    },
    {
      id: 2,
      title: "Arsitektur Informasi",
      topic: "AI",
    },
  ];

  return (
    <div className="quiz-menu">
      {/* {topiclist.map((t) => {
        <button className="bg-red-500">{t.topic}</button>;
      })} */}
      <h3>Select a Topic</h3>
      <button onClick={startQuiz} className="bg-red-500">
        START
      </button>
    </div>
  );
};

export default QuizMenu;
