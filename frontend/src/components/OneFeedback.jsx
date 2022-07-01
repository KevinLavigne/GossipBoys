import React, { useState } from "react";

import Report from "./Report";

import dots from "../assets/dots.png";
import arrow1 from "../assets/arrow1.png";
import arrow2 from "../assets/arrow2.png";

function OneFeedback({ el }) {
  const [agree, setAgree] = useState(false);
  const [disagree, setDisagree] = useState(false);
  const [openDots, setOpenDots] = useState(false);
  const [hide, setHide] = useState(false);
  const [report, setReport] = useState(false);

  const handleClick = (reaction, setReaction, setNoReaction) => {
    setNoReaction(false);
    setReaction(!reaction);
  };

  return (
    <div className={hide ? "hidden" : "feedback_data_container"}>
      <div className="feedback_flex_btwn">
        <p>By {el.name}</p>
        <div className="flex feedback_parent">
          <p>{el.date}</p>
          <button
            type="button"
            onClick={() => setOpenDots(!openDots)}
            className="button_dots"
          >
            <img src={dots} alt="dots" className="feedback_dots" />
          </button>
          {openDots && (
            <div className="report_container shadow-md">
              <Report
                setOpenDots={setOpenDots}
                setHide={setHide}
                report={report}
                setReport={setReport}
              />
            </div>
          )}
        </div>
      </div>
      <p className="feedback_main_text">{el.text}</p>
      <div className="flex justify-end" id="like-container">
        <button
          id="btnplus"
          className={
            agree ? "feedback_fit_content font-bold	" : "feedback_fit_content"
          }
          onClick={() => handleClick(agree, setAgree, setDisagree)}
        >
          <img src={arrow1} alt="arrow to set plus" />
          {agree ? el.plus + 1 : el.plus}
        </button>
        <button
          id="btnmoins"
          className={
            disagree ? "feedback_fit_content font-bold" : "feedback_fit_content"
          }
          onClick={() => handleClick(disagree, setDisagree, setAgree)}
        >
          <img src={arrow2} alt="arrow to set minus" />
          {disagree ? -(el.minus + 1) : -el.minus}
        </button>
      </div>
    </div>
  );
}

export default OneFeedback;
