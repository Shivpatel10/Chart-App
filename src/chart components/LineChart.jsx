import React from "react";
import ChartComponent from "./ChartComponent";;

const LineChart = ({ chartData }) => {
    const lineChartData = {
      labels: chartData?.months,
      datasets: [
        {
          label: 'Profits by Month',
          data: chartData?.profits,
          backgroundColor: "rgba(75, 192, 192, 0.2)",
          borderColor: "rgba(75, 192, 192, 1)",
          borderWidth: 1,
        },
      ],
    };

    const lineChartOptions = {
        scales: {
            x: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Month',
                },
            },
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Profit ($)',
                },
            },
        },
    };

    return <ChartComponent type="line" data={lineChartData} options={lineChartOptions} />;
};

export default LineChart;