import "../App.css";
import PieChartComponent from "./PieChart";
import AnalysisCards from "./AnalysisCards";
import dashboardData from "../data/dashboardData";

function Analysis() {
  return (
    <div className="w-full h-full">
      <div>
        <h1 className="underline decoration-10 decoration-gray-500 mb-8 mt-8 text-[#A4161A] text-8xl ml-36">
          Bitching Analysis
        </h1>
        <div className="flex flex-row justify-between w-full bg-[#161A1D] mb-8">
          <h2 className="text-white h-16 text-2xl mt-6 ml-8 mb-8">
            We had some delay on the delivery of the projet EDC, why ?
          </h2>
          <h3 className="text-white h-16 text-2xl mt-6">
            Created on : 22/06/1990
          </h3>
          <h4 className="text-white h-16 text-2xl mt-6 mr-12">By: Clemoufle</h4>
        </div>
        <div className="flex flex-row>">
          <div className="flex flex-col w-full">
            <PieChartComponent />
          </div>
          <div className="flex flex-col w-full mt-16">
            {dashboardData.map((data) => (
              <AnalysisCards data={data} key={data.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Analysis;
