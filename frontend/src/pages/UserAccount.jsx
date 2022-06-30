import { useState } from "react";
import Header from "../components/header";
import NavBar from "../components/NavBar";

function UserAccount() {
  const [pg2, setPg2] = useState([]);
  console.warn(`${pg2} ${setPg2}`);
  return (
    <div>
      <Header />
      <NavBar />
      <div>UserAccount</div>
    </div>
  );
}
export default UserAccount;
