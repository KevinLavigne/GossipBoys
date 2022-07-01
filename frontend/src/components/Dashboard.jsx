import { useState, useContext } from "react";
import ExportContext from "../contexts/Context";
import DashboardCards from "./DashboardCards";
import dashboardData from "../data/dashboardData";

function Dashboard() {
  const { favorite, nameFilter } = useContext(ExportContext.Context);
  const [bitches, setBitches] = useState(dashboardData);

  const handleCheckStar = (bitch) => {
    const newBitches = [...bitches];
    const index = newBitches.indexOf(bitch);
    newBitches[index].check = !newBitches[index].check;
    setBitches(newBitches);
  };

  return (
    <div>
      <h2 className="underline underline-offset-8 decoration-8 decoration-darkGrey mb-8 mt-8 text-darkRed text-6xl ml-36">
        Bitchboard
      </h2>
      <div className="flex flex-col w-full h-3/4 justify-center items-center pt-8">
        {favorite === true
          ? bitches
              .filter((data) => data.check === favorite || "")
              .map((data) => (
                <li
                  className="flex flex-row w-11/12 h-full justify-center mr-8 delay-150 transition duration-300 ease-out hover:-translate-y-1 hover:scale-105"
                  key={data.id}
                >
                  <DashboardCards
                    data={data}
                    handleCheckStar={handleCheckStar}
                  />
                </li>
              ))
          : bitches
              .filter((data) => data.title.includes(nameFilter))
              .map((data) => (
                <li
                  className="flex flex-row w-11/12 h-full justify-center mr-8 delay-150 transition duration-300 ease-out hover:-translate-y-1 hover:scale-105"
                  key={data.id}
                >
                  <DashboardCards
                    data={data}
                    handleCheckStar={handleCheckStar}
                  />
                </li>
              ))}
      </div>
    </div>
  );
}

export default Dashboard;
