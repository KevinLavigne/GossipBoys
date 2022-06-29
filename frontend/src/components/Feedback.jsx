import React from "react";
import { useParams } from "react-router-dom";
import dashboardData from "../data/dashboardData";

import bubble from "../assets/bubble.png";
import arrow1 from "../assets/arrow1.png";
import arrow2 from "../assets/arrow2.png";

function Feedback() {
  const { id } = useParams();

  const data = dashboardData.filter((el) => el.id === parseInt(id, 10));

  return (
    <div className="feedback_container">
      <h2> Feedbacks </h2>

      <div className="feedback_flex_btwn feedback_container_question">
        <h3>{data[0].title}</h3>
        <p>
          Created on: {data[0].date} by {data[0].Poster}
        </p>
      </div>
      <div className="feedback_datas_container">
        {data[0].feedback.map((el) => (
          <div className="feedback_data_container">
            <div className="feedback_flex_btwn">
              <p>{el.name}</p>
              <p>{el.date}</p>
            </div>
            <p>{el.text}</p>
            <div className="feedback_flex_end">
              <button className="feedback_fit_content">
                <img src={arrow1} alt="arrow to set plus" />
                {el.plus}
              </button>
              <button className="feedback_fit_content">
                <img src={arrow2} alt="arrow to set minus" />
                {el.minus}
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="feedback_input_container">
        <input type="text" />
        <img src={bubble} alt="bubble for message" />
      </div>
    </div>
  );
}

export default Feedback;
