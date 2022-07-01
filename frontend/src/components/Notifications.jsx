import React from "react";
import Notification from "./Notification";
import notificationData from "../data/notificationData";

function Notifications() {
  return (
    <div className=" flex flex-col px-96 p-5 h-100 ">
      <h1 className="text-[#A4161A] mb-16 text-4xl">Notifications</h1>
      <div
        className="flex flex-col w-11/12 h-full justify-center mr-8 font-bold "
        id="notification"
      >
        {notificationData.map((el) => (
          <Notification data={el} />
        ))}
      </div>
    </div>
  );
}

export default Notifications;
