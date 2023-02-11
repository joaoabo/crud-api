import React from "react";
import { Chart } from "react-google-charts";

import "./styles.css";

export default function Grafico(){

    const data = [
        ["Year", "Sales", "Expenses", "Profit"],
        ["2014", 1000, 400, 200],
        ["2015", 1170, 460, 250],
        ["2016", 660, 1120, 300],
        ["2017", 1030, 540, 350],
      ];
      
    const options = {
        chart: {
          title: "Company Performance",
          subtitle: "Sales, Expenses, and Profit: 2014-2017",
        },
      };
    return(
        <>
            <div>
                <div className="body-home">
                    <div className="body-graf">
                        <div className="area-graf">
                            <Chart
                                chartType="Bar"
                                width="100%"
                                height="300px"
                                data={data}
                                options={options}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}