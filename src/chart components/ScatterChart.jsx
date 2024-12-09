import React from "react";
import ChartComponent from "./ChartComponent";

const ScatterChart = ({ chartData }) => {
    const scatterChartData = {
      labels: chartData?.expenses,
      datasets: [
        {
          label: 'Profit vs Expenses',
          data: chartData?.profits,
          backgroundColor: "rgba(75, 192, 192, 0.2)",
          borderColor: "rgba(75, 192, 192, 1)",
          borderWidth: 1,
        },
      ],
    };

    const scatterChartOptions = {
        scales: {
            x: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Expenses',
                },
            },
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Profits',
                },
            },
        },
    }

    return <ChartComponent type="scatter" data={scatterChartData} options={scatterChartOptions} />;
};

export default ScatterChart;