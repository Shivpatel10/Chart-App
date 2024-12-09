import React, { useState, useEffect } from 'react'
import BarChart from './components/BarChart';
import LineChart from './components/LineChart';
import ScatterChart from './components/ScatterChart';
import BubbleChart from './components/BubbleChart';
import './App.css'

function App() {
  const [chartData, setChartData] = useState(null); // includes null data until data is fetched

  useEffect(() => {
    fetch('/data/financial_data.json') //fetch the data from the JSON file
      .then((response) => response.json())
      .then((data) => setChartData(data)) 
      .catch((error) => ('Error Fetching File', error))
  }, []);

  if (!chartData) {
    return <div>Loading...</div>; //adds a loading message while fetching data
  }

  return (
    <div>
      <h1>Dynamic Charts with Chart.js</h1>
      <BarChart chartData={chartData} /> 
      <LineChart chartData={chartData} />
      <ScatterChart chartData={chartData} />
      <BubbleChart chartData={chartData} />
    </div> 
  );
}

export default App