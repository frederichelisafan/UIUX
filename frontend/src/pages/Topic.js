import { useState, useContext } from "react";
import HtmlQuiz from "./UIQuiz";
import UxQuiz from "./UXQuiz";
import { QuizContext } from "../helpers/Context";

const Topic = () => {
  const { setGameState, selectedTopic, setSelectedTopic } =
    useContext(QuizContext);

  const handleBackToHome = () => {
    setSelectedTopic(null);
  };

  const handleTopic = (topic) => {
    setSelectedTopic(topic);
    console.log(topic);
  };

  const renderSingleQuiz = () => {
    if (selectedTopic === "HTML") {
      return <HtmlQuiz />;
    } else if (selectedTopic === "CSS") {
      return <UxQuiz />;
    }

    return null;
  };

  const topiclist = [
    {
      id: 0,

      title: "Basic HTML",
      topic: "HTML",
    },
    {
      id: 1,

      title: "Basic CSS",
      topic: "CSS",
    },
    {
      id: 2,

      title: "Basic JavaScript",
      topic: "JS",
    },
  ];

  return (
    <>
      {selectedTopic ? (
        renderSingleQuiz()
      ) : (
        <div>
          {topiclist.map((item) => {
            return (
              <div className="text-center">
                <p>{item.title}</p>
                <button
                  className="mx-auto"
                  onClick={() => {
                    handleTopic(item.topic);
                  }}
                >
                  belajar
                </button>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Topic;
