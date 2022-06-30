import { useState } from "react";
import Dashboard from "../components/Dashboard";
import NavBar from "../components/NavBar";
import Header from "../components/header";

function DashboardPage() {
  const [pg1, setPg1] = useState([]);
  console.warn(`${pg1} ${setPg1}`);
  return (
    <div>
      <Header isDashboard={true} />
      <NavBar />
      <h1>DashboardPage dude !</h1>
      <Dashboard />
    </div>
  );
}
export default DashboardPage;
