import { Chart } from "react-chartjs-2";

useEffect(() => {
    fetch('financial_data.json')
      .then((response) => response.json())
      .then((data) => setChartData(data));
    }, []);
  
    if (!chartData) {
      return <div>Loading...</div>;
    }
    
const BarChart = ({ data }) => {
    const barChartData = {
      labels: data.months,
      datasets: [
        {
          label: 'Monthly Sales',
          data: data.sales,
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
        },
      ],
    };
    const barChartOptions = { 
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      };
      return <ChartComponent type="bar" data={barChartData} options={barChartOptions} />;
    };

    export default BarChart;