import React, { useState, useEffect } from 'react'
import BarChart from './components/BarChart';
import LineChart from './components/LineChart';
import ScatterChart from './components/ScatterChart';
import BubbleChart from './components/BubbleChart';
import './App.css'

function App() {
  const [chartData, setChartData] = useState(null); 
  
  useEffect(() => {
    fetch('/data/financial_data.json') //fetchs the data from file
      .then((response) => response.json())
      .then((data) => setChartData(data)) 
      .catch((error) => ('Error Fetching File', error))
  }, []);

  if (!chartData) {
    return <div>Loading...</div>; //Adds loading message 
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