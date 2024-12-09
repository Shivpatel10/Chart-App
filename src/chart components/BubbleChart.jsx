import React from "react";
import ChartComponent from "./ChartComponent";

const BubbleChart = ({ chartData }) => {
    const minSize = 10;
    const maxSize = 25;

    const maxSales = Math.max(...chartData.sales);
    const minSales = Math.min(...chartData.sales);

    const scaleRadius = (value) => { 
        if (maxSales === minSales) return (minSize + maxSize) / 2; 
        return ((value - minSales) / (maxSales - minSales)) * (maxSize - minSize) + minSize;
    };

    const bubbleChartData = {
      datasets: [
        {
          label: 'Sales, Profits, and Expenses.',
          data: chartData?.expenses.map((expense, index) => ({
            x: expense,
            y: chartData.profits[index],
            r: scaleRadius(chartData.sales[index]), 
        })),
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
        },
      ],
    };

    const bubbleChartOptions = {
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
                    text: 'Profit',
                },
            },
        },
    };

    return <ChartComponent type="bubble" data={bubbleChartData} options={bubbleChartOptions} />;
};

export default BubbleChart;