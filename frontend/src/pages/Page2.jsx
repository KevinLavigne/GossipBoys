import { useState } from "react";

function Page2() {
  const [pg2, setPg2] = useState([]);
  console.warn(`${pg2} ${setPg2}`);
  return (
    <div>
      <h2> Feedbacks </h2>
    </div>
  );
}
export default Page2;
