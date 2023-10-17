import * as data from '../data'
import Chart from "./Chart/Chart";
import CustomerCharts from "./CustomerCharts";
import '../style.css'

const ChartValue = () => {
  return (
    <div className="graph_view">
      <Chart dataPoints={data.chartDataPoints} />
      <CustomerCharts data={data.chartData} />
    </div>
  );
};

export default ChartValue;
