import React from "react";
import { Chart } from "react-google-charts";

import "./styles.css";

export default function Dashabord() {
  const chartEvents = [
    {
      eventName: "select",
      callback({ chartWrapper }) {
        console.log("Selected ", chartWrapper.getChart().getSelection());
      }
    }
  ];
  const data = [
    ["compras", "departamentos"],
    [8, 12],
    [4, 5.5],
    [11, 14],
    [4, 5],
    [3, 3.5],
    [6.5, 7]
  ];
  
  const options = {
    title: "Compras vs. Departamentos",
    hAxis: { title: "Compras", viewWindow: { min: 0, max: 35 } },
    vAxis: { title: "Departamentos", viewWindow: { min: 0, max: 35 } },
    legend: "none"
  };

    return(
      <>
        <div>
          <div className="body-home">
            <div className="body-graf">
              <div className="area-graf">
                <Chart
                  chartType="ScatterChart"
                  data={data}
                  options={options}
                  graphID="ScatterChart"
                  width="100%"
                  height="300px"
                  chartEvents={chartEvents}
                />
              </div>
            </div>
          </div>
        </div>
      </>
    )
}
