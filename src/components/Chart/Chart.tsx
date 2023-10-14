import React from "react";

import ChartBar from "./Chartbar";
import "./Chart.css";
import ChartHeader from "../ChartHeader";

type dataPoints = {
  dataPoints: any;
};
const Chart = (props: dataPoints) => {
  const dataPointValues = props.dataPoints.map(
    (dataPoint: any) => dataPoint.value
  );
  const totalMaximum = Math.max(...dataPointValues);
  return (
    <div className="chart_main">
      <ChartHeader />
      <div className="chart">
        {props.dataPoints.map((dataPoint: any) => (
          <ChartBar
            key={dataPoint.label}
            value={dataPoint.value}
            maxValue={totalMaximum}
            label={dataPoint.label}
            earnPoint={dataPoint.earn}
          />
        ))}
      </div>
    </div>
  );
};

export default Chart;
