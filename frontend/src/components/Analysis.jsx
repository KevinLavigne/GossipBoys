import "../App.css";
import PieChartComponent from "./PieChart";
import AnalysisCards from "./AnalysisCards";
import dashboardData from "../data/dashboardData";

function Analysis() {
  return (
    <div className="analysis-wrapper w-full h-full">
      <div className=" topic-wrapper w-11/12 display-flex   shadow-xl rounded-full">
        <div className="topic-title">Bitching Analysis :</div>
        <div> What's wrong with the new product feature ? </div>
        <div>Created on : 01/07/2022 8h36</div> <div> By: ArkaneDev</div>
      </div>
      <div className="flex flex-row>">
        <div className="flex flex-col w-full">
          <PieChartComponent />
        </div>
        <div className="flex flex-col w-full ">
          {dashboardData[1].feedback.map((data) => (
            <AnalysisCards data={data} key={data.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Analysis;
