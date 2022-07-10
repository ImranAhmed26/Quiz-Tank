import Router from "next/router";
import React from "react";
import { useEffect, useState } from "react";

import topicData from "../../constants/TopicNames";
import Navbar from "../../components/Navbar";

const FirstQuiz = () => {
  const [name, setName] = useState("");
  const [selectedTopic, setSelectedTopic] = useState("");

  useEffect(() => {
    localStorage.setItem("user", name);
  }, []);

  const handleSubmit = () => {
    localStorage.setItem("userName", name);
    localStorage.setItem("selectedTopic", selectedTopic);
    Router.push({ pathname: "./Questions", query: { id: selectedTopic } });
  };

  return (
    <div>
      <Navbar />
      <div className="pt-10 flex justify-center">
        <form className="">
          <div>
            <input
              onChange={(event) => {
                setName(event.target.value || "");
              }}
              value={name}
              className="w-72 h-12 mt-28 px-4 rounded-sm border-2 shadow-lg ring-offset-0 ring-0 outline-0 text-center text-xl text-gray-700 font-semibold"
              type="text"
              name="name"
              id="name"
              placeholder="Enter Your Name"
            />
          </div>
          <div className="w-68 h-12 px-4 py-2 mt-10 ring-offset-0 ring-0 outline-0 text-center text-xl text-gray-700 font-bold border rounded-sm cursor-default">
            <h1>Select a Topic</h1>
          </div>
          <div>
            {topicData.map((item) => {
              return (
                <div
                  key={item.id}
                  onClick={() => {
                    setSelectedTopic(item.id);
                  }}
                  className={`w-72 h-12 px-4 py-2 mt-2 text-center text-xl text-gray-700 bg-green-300 font-bold rounded-sm ring-offset-0 ring-0 outline-0 shadow-md cursor-pointer hover:text-gray-800 duration-200 ${
                    selectedTopic === item.id && "bg-green-400"
                  }`}
                >
                  {item.name}
                </div>
              );
            })}
          </div>
          <button
            disabled={!(name && selectedTopic)}
            onClick={(event) => {
              handleSubmit();
              event.preventDefault();
            }}
            className={`w-72 h-12 px-4 py-2 mt-10 text-center text-xl text-gray-700 bg-green-400 font-bold rounded-sm ring-offset-0 ring-0 outline-0 shadow-md cursor-pointer duration-200 disabled:bg-green-300`}
          >
            Start Quiz
          </button>
        </form>
      </div>
    </div>
  );
};

export default FirstQuiz;
