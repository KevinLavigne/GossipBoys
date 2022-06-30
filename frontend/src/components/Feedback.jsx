import React, { useState } from "react";
import { useParams } from "react-router-dom";
import dashboardData from "../data/dashboardData";
import OneFeedback from "./OneFeedback";
import Header from "./header";
import NavBar from "./NavBar";

import bubble from "../assets/bubble.png";

function Feedback() {
  const { id } = useParams();

  const [data, setData] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    setData(dashboardData[id].feedback.push(e.target.value));
  };

  return (
    <div>
      <Header />
      <NavBar />
      <div className="feedback_container">
        <h2> Feedbacks </h2>

        <div className="feedback_flex_btwn feedback_container_question">
          <h3>{dashboardData[id].title}</h3>
          <p>
            Created on: {dashboardData[id].date} by {dashboardData[id].Poster}
          </p>
        </div>
        <div className="feedback_datas_container">
          {dashboardData[id].feedback.map((el) => (
            <OneFeedback el={el} />
          ))}
        </div>
        <form
          className="feedback_input_container"
          onSubmit={() => handleSubmit}
        >
          <input type="text" value={data} />
          <img src={bubble} alt="bubble for message" />
        </form>
      </div>
    </div>
  );
}

export default Feedback;
