import React from "react";
import { useParams } from "react-router-dom";
import dashboardData from "../data/dashboardData";
import OneFeedback from "./OneFeedback";
import Header from "./header";
import NavBar from "./NavBar";

import bubble from "../assets/bubble.png";

function Feedback() {
  const { id } = useParams();

  return (
    <div>
      <Header isDashboard={true} />
      <NavBar />
      <div className="flex flex-col bg-wight ml-32 mb-8 mt-8">
        <h2 className="text-darkRed underline underline-offset-8 text-6xl decoration-8 decoration-darkGrey ">
          Place to bitch
        </h2>
      </div>

      <div className="feedback_container">
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
        <div className="feedback_input_container">
          <input type="text" placeholder="Write your bitching feedback here" />
          <img src={bubble} alt="bubble for message" />
        </div>
      </div>
    </div>
  );
}

export default Feedback;
