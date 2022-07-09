const axios = require("axios").default;
import React from "react";
import { useEffect, useState } from "react";

import Navbar from "../../components/Navbar";

const Quiz = () => {
  const dummyData = [
    "Computer Personal Unit",
    " Central Process Unit",
    "Central Processor Unit",
    " Central Processing Unit",
  ];

  const [questions, setQuestions] = useState();
  const [userName, setUserName] = useState();
  const [score, setScore] = useState(0);
  const [quiz, setQuiz] = useState([]);
  const [number, setNumber] = useState(0);
  const [pts, setPts] = useState(0);

  const shuffle = (arr) => arr.sort(() => Math.random() - 0.5);

  const pickAnswer = (e) => {
    let userAnswer = e.target.outerText;

    if (quiz[number].answer === userAnswer) setPts(pts + 1);
    setNumber(number + 1);
  };

  const handleSkip = () => {
    setNumber(number + 1);
  };

  const handleBack = () => {
    setNumber(number - 1);
  };

  // useEffect(() => {
  //   axios
  //     .get("https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple")
  //     .then((response) => {
  //       const data = response.data;
  //       console.log(response);
  //       console.log(response.data.results);
  //       setQuestions(data.results);
  //     });
  // }, []);

  useEffect(() => {
    axios
      .get("https://opentdb.com/api.php?amount=5&category=18&difficulty=easy&type=multiple")
      .then((res) => {
        console.log(res);
        setQuiz(
          res.data.results.map((item) => ({
            question: item.question,
            options: shuffle([...item.incorrect_answers, item.correct_answer]),
            answer: item.correct_answer,
          })),
        );
      })
      .catch((err) => console.error(err));

    const user = localStorage.getItem("userName");
    setUserName(user);
  }, []);

  return (
    <div className="">
      <Navbar />
      <div className="text-center pt-20 flex flex-col justify-center items-center">
        <h1 className="text-2xl font-medium text-gray-700">{`Hello ${userName}.`}</h1>{" "}
        <h1 className="text-xl text-gray-600">To answer, please select from the options below.</h1>
        {quiz[number] && (
          <div className="">
            <div className="bg-green-200 w-[50rem] text-2xl font-medium text-gray-700 px-6 py-3 mb-4 rounded-md ">
              {quiz[number].question}
            </div>

            <div>
              {quiz[number].options.map((item, index) => (
                <div key={index} onClick={pickAnswer}>
                  <div className="drop-shadow flex justify-center text-xl text-left">
                    <div className="grid grid-flow-col grid-rows-4 text-center text-gray-800 bg-green-200 rounded-md px-2 pt-1 mt-2 h-10 cursor-default w-[20rem] xl:w-[30rem] 2xl:w-[40rem] hover:bg-green-300 drop-shadow-sm duration-200">
                      {` ${index + 1}. ${item}`}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex py-4 mx-20 px-40 xl:px-20  justify-between items-center">
              <div
                className="w-36 h-8 pt-1 bg-gray-200 rounded-md hover:bg-gray-300 cursor-pointer duration-200"
                onClick={handleBack}
              >
                Previous Question
              </div>
              <div
                className="w-36 h-8 pt-1 bg-gray-200 rounded-md hover:bg-gray-300 cursor-pointer duration-200" 
                onClick={handleSkip}
              >
                Skip Question
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;

// quiz[number].options
