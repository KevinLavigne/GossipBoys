import React from "react";
import { Link } from "react-router-dom";

function Notification({ data }) {
  return (
    <Link to={data.link}>
      <div className="flex justify-between bg-white text-darkGrey w-11/12 mb-8 shadow-lg">
        <p>{data.description}</p>
        <p>{data.date}</p>
      </div>
    </Link>
  );
}

export default Notification;
