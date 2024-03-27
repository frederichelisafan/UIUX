import { useState, useContext } from "react";
import UIQuiz from "./UIQuiz";
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
    if (selectedTopic === "UI") {
      return <UIQuiz />;
    } else if (selectedTopic === "UX") {
      return <UxQuiz />;
    }

    return null;
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

      title: "Riset Pengguna",
      topic: "UX Research",
    },
    {
      id: 3,

      title: "Visual Design",
      topic: "Desain Visual",
    },
    {
      id: 4,

      title: "UI/UX Design Principles.",
      topic: "Prinsip Design UI/UX",
    },
  ];

  return (
    <div className="mt-24">
      {selectedTopic ? (
        renderSingleQuiz()
      ) : (
        <div>
          {topiclist.map((item) => {
            return (
              <div className="grid grid-cols-4 gap-0" key={item.id}>
                <div className="container">
                  <p>{item.title}</p>
                  <button
                    className=""
                    onClick={() => {
                      handleTopic(item.topic);
                    }}
                  >
                    Start Quiz!
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Topic;
