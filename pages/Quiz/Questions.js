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
      <div className="text-center pt-20 flex flex-col justify-center items-center font-serif">
        <h1 className="text-3xl font-semibold text-gray-600">{`Hello ${userName}.`}</h1>
        <h1 className="text-xl text-gray-600">To answer, please select from the options below.</h1>
        {quiz[number] && (
          <div className="flex flex-col items-center ">
            <div className="bg-gray-50 w-[24rem] md:w-[30rem] lg:w-[40rem] text-2xl font-medium text-gray-700 px-6 py-2 mt-16 mb-4 rounded-md drop-shadow-md">
              {quiz[number].question}
            </div>

            <div>
              {quiz[number].options.map((item, index) => (
                <div key={index} onClick={pickAnswer}>
                  <div className=" drop-shadow flex justify-center text-xl">
                    <div className="text-center text-gray-800 bg-green-200 rounded-md px-2 py-2 mt-2 cursor-default w-[24rem] md:w-[30rem] lg:w-[40rem] hover:bg-green-300 duration-200 drop-shadow-md">
                      {` ${index + 1}. ${item}`}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex gap-16 md:gap-40 lg:gap-80 py-4 mt-6 lg:mx-20 px-52 md:px-40 lg:px-20 justify-between font-sans">
              <div
                className="w-40 h-10 pt-1.5 cursor-pointer px-3 py-2 border border-gray-800 rounded-sm text-base font-medium text-gray-700 hover:bg-gray-700 hover:text-white transition-all duration-150 drop-shadow-md"
                onClick={handleBack}
              >
                Previous Question
              </div>
              <div
                className="w-40 h-10 pt-1.5 cursor-pointer px-3 py-2 border border-gray-800 rounded-sm text-base font-medium text-gray-700 hover:bg-gray-700 hover:text-white transition-all duration-150 drop-shadow-md"
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