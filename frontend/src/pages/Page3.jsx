import { useState } from "react";
import Header from "../components/header";
import NavBar from "../components/NavBar";
import Notifications from "../components/Notifications";

function Page3() {
  const [pg3, setPg3] = useState([]);
  console.warn(`${pg3} ${setPg3}`);
  return (
    <div className=" ">
      <Header />
      <NavBar />
      <Notifications />
    </div>
  );
}
export default Page3;
