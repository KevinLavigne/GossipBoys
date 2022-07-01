import React from "react";
import { Link } from "react-router-dom";

function Notification({ data }) {
  return (
    <Link to={data.link}>
      <div
        className="flex justify-between bg-white text-darkGrey h-full w-full mb-8 shadow-lg rounded p-5"
        id="notifications"
      >
        <p>{data.description}</p>
        <p>{data.date}</p>
      </div>
    </Link>
  );
}

export default Notification;
