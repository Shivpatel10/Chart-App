import React from "react";
import ChartComponent from "./ChartComponent";

const BarChart = ({ chartData }) => {
  const barChartData = {
    labels: chartData?.months,
    datasets: [
      {
        label: "Sales by Month",
        data: chartData?.sales,
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const barChartOptions = {
    scales: {
      x: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Month",
        },
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Sales",
        },
      },
    },
  };

  return (
    <ChartComponent type="bar" data={barChartData} options={barChartOptions} />
  );
};

export default BarChart;
