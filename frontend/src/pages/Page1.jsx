import { useState } from "react";
import Dashboard from "../components/Dashboard";
import NavBar from "../components/NavBar";
import Header from "../components/header";

function Page1() {
  const [pg1, setPg1] = useState([]);
  console.warn(`${pg1} ${setPg1}`);
  return (
    <div>
      <Header />
      <NavBar />
      <h1>Page1 dude !</h1>
      <Dashboard />
    </div>
  );
}
export default Page1;
