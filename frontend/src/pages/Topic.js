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
        <div className="">
          <p className=" text-[#523889] text-4xl mt-28 text-center">
            <span className="text-[#B50097]">Test Your Knowledge:</span> Join
            Our Exciting Quiz Challenge!
          </p>
          <h4 className="text-[#523889] text-center">
            You'll have 15 second to answer each questions.
          </h4>
          {topiclist.map((item) => {
            return (
              <div className="container" key={item.id}>
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
