import React from "react";
import DashboardCards from "./DashboardCards";
import dashboardData from "../data/dashboardData";

function Dashboard() {
  return (
    <div>
      <h2 className="underline decoration-8 decoration-orange-300 mb-8 mt-8 text-[#79ADDC] text-6xl ml-36">
        Dashboard
      </h2>
      <div className="flex flex-col w-full h-3/4 justify-center items-center">
        {dashboardData.map((data) => (
          <li
            className="flex flex-row w-11/12 h-full justify-center mr-8 topics"
            key={data.id}
          >
            <DashboardCards data={data} />
          </li>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
