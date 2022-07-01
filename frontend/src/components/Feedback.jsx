import React from "react";
import { useParams, Link } from "react-router-dom";
import dashboardData from "../data/dashboardData";
import OneFeedback from "./OneFeedback";
import Header from "./header";
import NavBar from "./NavBar";

import bubble from "../assets/bubble.png";
import sheet from "../assets/graph-analysis.svg";

function Feedback() {
  const { id } = useParams();

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
