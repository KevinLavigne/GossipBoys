import React from "react";
import { PieChart } from "react-minimal-pie-chart";
import dashboardData from "../data/dashboardData";

function PieChartComponent() {
  const [index, setIndex] = React.useState([-1]);
  const square = [
    {
      key: 0,
      title: `${dashboardData[0].numberForC}% of Bitchers React this Gossip`,
      value: 30,
      color: `${dashboardData[0].color}`,
    },
    {
      key: 1,
      title: `${dashboardData[1].numberForC}% of Terry Like it my Bitchers !`,
      value: 20,
      color: `${dashboardData[1].color}`,
    },
    {
      key: 2,
      title: `${dashboardData[2].numberForC}% of Kevin Like it my Bitchers !`,
      value: 10,
      color: `${dashboardData[2].color}`,
    },
    {
      key: 3,
      title: `${dashboardData[2].numberForC}% of Alex Like it my Bitchers !`,
      value: 10,
      color: `${dashboardData[3].color}`,
    },
  ];

  return (
    <div className="flex flex-col w-full h-full mt-8 justify-center items-center">
      <div className="flex flex-row justify-end justify-items-end justify-self-end object-right w-full h-full">
        {index > -1
          ? square
              .filter((data) => data.key === index)
              .map((data) => (
                <div className="flex flex-row justify-end justify-items-end justify-self-end object-right w-1/4 h-full shadow-lg mr-44">
                  <div
                    className={`${data.color} boder rounded w-2/6 h-2/5 mt-6 ml-8 mb-8 justify-self-end rounded`}
                  />
                  <h2 className="h-16 text-2xl mt-6 ml-8 mb-8 justify-self-end">
                    {data.title}
                  </h2>
                </div>
              ))
          : null}
      </div>
      <div className="flex flex-col w-full h-full">
        <PieChart
          data={[
            {
              title: `${dashboardData[0].numberForC}%`,
              value: dashboardData[0].numberForC,
              color: `${dashboardData[0].colorForC}`,
              key: 0,
            },
            {
              title: `${dashboardData[1].numberForC}%`,
              value: dashboardData[1].numberForC,
              color: `${dashboardData[1].colorForC}`,
              key: 1,
            },
            {
              title: `${dashboardData[2].numberForC}%`,
              value: dashboardData[2].numberForC,
              color: `${dashboardData[2].colorForC}`,
              key: 2,
            },
            {
              title: `${dashboardData[3].numberForC}%`,
              value: dashboardData[3].numberForC,
              color: `${dashboardData[3].colorForC}`,
              key: 3,
            },
          ]}
          label={({ dataEntry }) => dataEntry.title}
          labelPosition={60}
          onMouseOver={(event, data) => {
            setIndex(data);
          }}
          labelStyle={{
            fontSize: "0.5vh",
            fontFamily: "sans-serif",
            fill: "#fff",
          }}
          style={{
            height: "70%",
            width: "70%",
            margin: "2%",
            padding: "2%",
            borderRadius: "10%",
          }}
        />
      </div>
    </div>
  );
}

export default PieChartComponent;
