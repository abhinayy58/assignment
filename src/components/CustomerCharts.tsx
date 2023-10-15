import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto"; // Import Chart.js from 'chart.js/auto' for Chart.js v3.x
import { ChartOptions } from "chart.js";
import "../style.css";
type chartProps = {
  data: any;
};

const CustomerChart = (props: chartProps) => {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstance = useRef<Chart<"doughnut", any, unknown> | null>(null);
  const chartOptions: ChartOptions<"doughnut"> = {
    plugins: {
      legend: {
        display: false,
        position: "bottom",
      },
    },
    cutout: "80%", // This is the correct property for controlling the hole size in the middle
    maintainAspectRatio: false,
    animation: {
      animateRotate: true,
      animateScale: true,
    },
  };

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext("2d") as CanvasRenderingContext2D;
  

      // Destroy existing chart instance if it exists
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      chartInstance.current = new Chart(ctx, {
        type: "doughnut",
        data: {
          datasets: [
            {
              label: "My First Dataset",
              data: props.data.values,
              backgroundColor: [
                "rgba(255, 99, 132, 0.8)",
                "rgba(255, 205, 86, 0.8)",
                "rgba(54, 162, 235, 0.8)",
              ],
            },
          ],
        },
        options: chartOptions,
      });
    }

    // Cleanup: destroy the chart instance when the component unmounts
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [props.data]);

  return (
    <div className="dougnut_chart">
    <div style={{ width: "310px", height: "175px" }}>
      <div className="chart_overview">
        <p className="overview">Customers</p>
        <p className="earn">Customers that buy produts</p>
      </div>
      <svg
        style={{ transform: "translate(70px, 20px)" }}
        width="150"
        height="150"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g style={{transform: 'translate(25px, 22px)'}} aria-labelledby="group-title">
          <circle
          stroke="#eeeeee" strokeWidth="35"
            cx="50"
            cy="50"
            fill="white"
            r="65"
            aria-label="Red Circle"
          ></circle>
          <g style={{ transform: "translate(16px, 30px)" }}>
            <text
              style={{
                transform: "translate(9px, 10px)",
                fontSize: "20px",
                fill: "#424242",
                fontWeight: "bold",
              }}
              id="group-title"
            >
              65%
            </text>
            <text
              style={{ transform: "translate(7px, 28px)", fontSize: "10px" }}
              id="group-title"
            >
              Total new
            </text>
            <text
              style={{ transform: "translate(7px, 40px)", fontSize: "10px" }}
              id="group-title"
            >
              Customers
            </text>
          </g>
        </g>
      </svg>

      <canvas
        id="my-chart"
        style={{
          transform: "translate(-11px, -150px)",
          height: "175px",
          width: "175px",
        }}
        ref={chartRef}
        height="175px"
        width="175px"
      ></canvas>
    </div>
    </div>
  );
};

export default CustomerChart;
