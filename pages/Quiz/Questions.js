const axios = require("axios").default;
import React from "react";
import { useEffect, useState } from "react";

import Navbar from "../../components/Navbar";

const Quiz = () => {
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

  useEffect(() => {
    axios
      .get("https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple")
      .then((response) => {
        const data = response.data;
        console.log(response);
        console.log(response.data.results);
        setQuestions(data.results);
      });
  }, []);

  useEffect(() => {
    axios
      .get("https://opentdb.com/api.php?amount=5&category=18&difficulty=easy&type=multiple")
      .then((res) => {
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
      <div className="text-center pt-20">
        <h1>{`Hello ${userName}. Please answer the questions below.`}</h1>
        {quiz[number] && (
          <>
            <div className="text-2xl font-medium text-gray-700 px-12 py-6">
              {quiz[number].question}
            </div>

            <divs>
              {quiz[number].options.map((item, index) => (
                <div key={index} onClick={pickAnswer}>
                  <div className="flex justify-center text-xl text-left">
                    <div className="bg-green-400 rounded-sm px-2 mr-2 mt-4">{index + 1} </div>
                    <div className="bg-green-400 rounded-sm px-2 w-96 mt-4">{item} </div>
                  </div>
                </div>
              ))}
            </divs>
          </>
        )}
      </div>
    </div>
  );
};

export default Quiz;
