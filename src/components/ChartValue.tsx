import React from "react";
import * as data from '../data'
import Chart from "./Chart/Chart";
import CustomerCharts from "./CustomerCharts";

const ChartValue = () => {
  return (
    <div>
      <Chart dataPoints={data.chartDataPoints} />
      <CustomerCharts />
    </div>
  );
};

export default ChartValue;
