import React from "react";

import hidden from "../assets/hidden.png";
import exclamation from "../assets/exclamation.png";

function Report({ setOpenDots, setHide, report, setReport }) {
  const reportClick = (setDots, setReport2, report2) => {
    setReport2(!report2);
  };

  return (
    <ul className="flex flex-col content-center report_button">
      <button className="flex justify-start" onClick={() => setHide(true)}>
        Hide <img src={hidden} alt="eye hidden" />
      </button>
      <button
        className="flex justify-start content-center report_button"
        onClick={() => reportClick(setOpenDots, setReport, report)}
      >
        <p>Report</p>
        <img
          src={exclamation}
          alt=" exclamation point"
          className="report_img"
        />
        <span className="report">{report ? `(1)` : ""}</span>
      </button>
    </ul>
  );
}

export default Report;
