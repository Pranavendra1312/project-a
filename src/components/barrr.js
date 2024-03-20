import React, { useState, useEffect } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import ChartTypeDropdown from './ChartTypeDropdown'; // Import the dropdown component
import LoadingSpinner from './LoadingSpinner'; // Import the LoadingSpinner component

const BarChart = () => {
  const [chartType, setChartType] = useState('column'); // State to track the selected chart type
  const [isLoading, setIsLoading] = useState(true); // State to track loading state

  // Data series for the pie chart
  const pieChartData = [
    { name: 'Monday', y: 30 },
    { name: 'Tuesday', y: 40 },
    { name: 'Wednesday', y: 50 },
    { name: 'Thursday', y: 45 },
    { name: 'Friday', y: 55 }
  ];

  // Options object defining the configuration of the chart
  const options = {
    chart: {
      type: chartType // Dynamically set chart type based on selected value
    },
    title: {
      text: 'Number of People Coming to Office (Weekly)' // Chart title
    },
    tooltip: {
      pointFormat: '<b>{point.name}</b>: {point.y}'
    },
    series: [{
      name: 'Number of People', // Series name
      data: chartType === 'pie' ? pieChartData : [30, 40, 50, 45, 55] // Use pie chart data if chartType is 'pie', otherwise use bar chart data
    }]
  };

  // Function to handle dropdown change
  const handleChartTypeChange = (event) => {
    setIsLoading(true); // Set loading state to true when changing chart type
    setChartType(event.target.value); // Update chart type based on selected value
  };

  // useEffect hook to trigger delayed rendering of the chart
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); // Set loading state to false after the delay
    }, 2000); // 2000 milliseconds delay, adjust as needed

    return () => clearTimeout(timer); // Cleanup function to clear the timer
  }, [chartType]); // Re-run useEffect whenever chartType changes

  // Render loading spinner if isLoading is true
  if (isLoading) {
    return <LoadingSpinner />;
  }

  // Render the component
  return (
    <div>
      {/* Render the ChartTypeDropdown component passing value and onChange props */}
      <ChartTypeDropdown value={chartType} onChange={handleChartTypeChange} />
      {/* HighchartsReact component to render the chart */}
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default BarChart; // Export the BarChart component
