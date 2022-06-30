import { useState } from "react";

function UserAccount() {
  const [pg2, setPg2] = useState([]);
  console.warn(`${pg2} ${setPg2}`);
  return <div>UserAccount</div>;
}
export default UserAccount;
