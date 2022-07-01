import React from "react";
import { PieChart } from "react-minimal-pie-chart";
import dashboardData from "../data/dashboardData";

function PieChartComponent() {
  const [index, setIndex] = React.useState([-1]);
  const square = [
    {
      key: 0,
      title: `59.01% approves this feedback`,
      value: 30,
      color: `${dashboardData[0].color}`,
    },
    {
      key: 1,
      title: `32.27% approves this feedback`,
      value: 20,
      color: `${dashboardData[1].color}`,
    },
    {
      key: 2,
      title: `4.36% approves this feedback`,
      value: 10,
      color: `${dashboardData[2].color}`,
    },
    {
      key: 3,
      title: `1.45% approves this feedback`,
      value: 10,
      color: `${dashboardData[3].color}`,
    },
  ];

  return (
    <div className="flex flex-col w-full h-full mt-8 justify-center items-center">
      <div className="flex flex-row items-center justify-center object-right w-full h-full">
        {index > -1 ? (
          square
            .filter((data) => data.key === index)
            .map((data) => (
              <div className="test drop-shadow-2xl border-slate-800 rounded-lg h-auto mr-64 flex flex-wrap relative">
                <div
                  className={`${data.color}   w-11/12 m-auto mt-5 h-10 rounded `}
                />
                <h2 className="piecharth2 p-5">{data.title}</h2>
              </div>
            ))
        ) : (
          <div className="rounded-lg h-25 mr-64 flex flex-wrap relative">
            <div className="w-11/12 m-auto mt-5 h-20 rounded" />
            <h2 className="text-white">
              Waiting for the user click on the chesse dude !!!!!!!!§§§§§§§§§§
              Beurk Beurk Beurk Waiting for the user click on the chesse dude
              !!!!!!!!§§§§§§§§§§ Beurk Beurk Beurk
            </h2>
          </div>
        )}
      </div>
      <div className=" flex flex-wrap w-full h-full sticky justify-center items-center">
        <PieChart
          data={[
            {
              title: `59.01%`,
              value: 59.01,
              color: `${dashboardData[0].colorForC}`,
              key: 0,
            },
            {
              title: `32.27%`,
              value: 32.27,
              color: `${dashboardData[1].colorForC}`,
              key: 1,
            },
            {
              title: `4.36%`,
              value: 4.36,
              color: `${dashboardData[2].colorForC}`,
              key: 2,
            },
            {
              title: `1.45%`,
              value: 1.45,
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
            cursor: "pointer",
            boxShadow:
              "rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;",
          }}
          animate={true}
          animationDuration={1000}
        />
      </div>
    </div>
  );
}

export default PieChartComponent;
