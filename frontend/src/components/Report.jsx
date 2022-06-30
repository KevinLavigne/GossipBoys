import React from "react";

import hidden from "../assets/hidden.png";
import exclamation from "../assets/exclamation.png";

function Report({ setOpenDots, setHide, report, setReport }) {
  const reportClick = (setDots, setReport2, report2) => {
    setReport2(!report2);
  };

  return (
    <ul className="flex flex-col content-center">
      <button className="flex justify-start" onClick={() => setHide(true)}>
        Hide <img src={hidden} alt="eye hidden" />
      </button>
      <button
        className="flex justify-start content-center"
        onClick={() => reportClick(setOpenDots, setReport, report)}
      >
        <p>
          Report <span className="report">{report ? `(1)` : ""}</span>
        </p>
        <img src={exclamation} alt=" exclamation point" />
      </button>
    </ul>
  );
}

export default Report;
