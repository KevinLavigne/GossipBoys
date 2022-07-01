import "../App.css";
import PieChartComponent from "./PieChart";
import AnalysisCards from "./AnalysisCards";
import dashboardData from "../data/dashboardData";

function Analysis() {
  return (
    <div className="analysis-wrapper w-full h-full">
      <div className=" topic-wrapper w-11/12 display-flex   shadow-xl rounded-full">
        <div className="topic-title">Bitching Analysis :</div>
        <div> We had some delay on the delivery of the projet EDC, why ? </div>
        <div>Created on : 22/06/1990</div> <div> By: Clemoufle</div>
      </div>
      <div className="flex flex-row>">
        <div className="flex flex-col w-full">
          <PieChartComponent />
        </div>
        <div className="flex flex-col w-full ">
          {dashboardData.map((data) => (
            <AnalysisCards data={data} key={data.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Analysis;
