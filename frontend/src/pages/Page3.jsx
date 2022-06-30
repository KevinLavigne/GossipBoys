import { useState } from "react";
import Header from "../components/header";
import NavBar from "../components/NavBar";
import Analysis from "../components/Analysis";

function Page3() {
  const [pg3, setPg3] = useState([]);
  console.warn(`${pg3} ${setPg3}`);
  return (
    <div>
      <Header />
      <NavBar />
      <div>Page3</div>
      <Analysis />
    </div>
  );
}
export default Page3;
