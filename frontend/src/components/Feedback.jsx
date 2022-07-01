/* eslint-disable no-undef */
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import dashboardData from "../data/dashboardData";
import OneFeedback from "./OneFeedback";
import Header from "./header";
import NavBar from "./NavBar";

import bubble from "../assets/bubble.png";
import sheet from "../assets/graph-analysis.svg";

function Feedback() {
  const { id } = useParams();
  const [inputField, setInputField] = useState("");
  const [newPost, SetNewPost] = useState("");
  const [currentPost, setCurrentPost] = useState(dashboardData[id].feedback);

  const handleChange = (event) => {
    setInputField(event.target.value);
  };
  const handleSubmit = () => {
    SetNewPost(inputField);
    setInputField("");
  };

  useEffect(() => {
    const newBitches = [...currentPost];
    const index = newBitches.length;
    const today = new Date();
    const time = `0${today.getDay()}/0${today.getMonth()}/${today.getFullYear()} ${today.getHours()}h${today.getMinutes()}`;
    newBitches.push({
      name: "HealNinja",
      date: time,
      id: index,
      minus: 0,
      plus: 0,
      text: newPost,
    });
    setCurrentPost(newBitches);
    return null;
  }, [newPost]);

  return (
    <div>
      <Header isDashboard={true} />
      <NavBar />
      <div className=" topic-wrapper w-11/12 display-flex   shadow-xl rounded-full">
        <div className="topic-title">Place to bitch :</div>
        <div> {dashboardData[id].title}</div>
        <div>Created on :{dashboardData[id].date}</div>{" "}
        <div> By: {dashboardData[id].Poster}</div>
        <Link to="/analysis">
          <img
            src={sheet}
            alt="link to analysis"
            className="w-9 transition duration-150 ease-out hover:scale-110"
          />
        </Link>
      </div>
      <div className="feedback_container analysis-wrapper">
        <div className="feedback_datas_container">
          {currentPost
            .filter((el) => el.text !== "")
            .map((el) => (
              <OneFeedback key={el.index} el={el} />
            ))}
        </div>
        <div className="feedback_input_container">
          <input
            type="text"
            onChange={handleChange}
            value={inputField}
            placeholder="Write your bitching feedback here"
          />
          <button type="button" onClick={() => handleSubmit()}>
            <img src={bubble} alt="bubble for message" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Feedback;
