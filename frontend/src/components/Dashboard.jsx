import React from "react";
import DashboardCards from "./DashboardCards";
import dashboardData from "../data/dashboardData";

function Dashboard() {
  return (
    <div>
      <h2 className="underline decoration-8 decoration-orange-300">
        Dashboard
      </h2>
      <DashboardCards data={dashboardData} />
    </div>
  );
}

export default Dashboard;
