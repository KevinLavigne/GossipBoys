import { useState } from "react";

function Page1() {
  const [pg1, setPg1] = useState([]);
  console.warn(`${pg1} ${setPg1}`);
  return <div>Page1</div>;
}
export default Page1;
