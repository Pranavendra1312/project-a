import React, { useState, useEffect } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import ChartTypeDropdown from './ChartTypeDropdown'; // Import the dropdown component
import LoadingSpinner from './LoadingSpinner'; // Import the LoadingSpinner component

const BarChart = () => {
  const [chartType, setChartType] = useState('column'); // State to track the selected chart type
  const [isLoading, setIsLoading] = useState(true); // State to track loading state

  // Options object defining the configuration of the chart
  const options = {
    chart: {
      type: chartType // Dynamically set chart type based on selected value
    },
    title: {
      text: 'Number of People Coming to Office (Weekly)' // Chart title
    },
    xAxis: {
      categories: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'] // X-axis categories - days of the week
    },
    yAxis: {
      title: {
        text: 'Number of People' // Y-axis title
      }
    },
    series: [{ // Data series to be plotted on the chart
      name: 'Number of People', // Series name
      data: [30, 40, 50, 45, 55] // Sample data for the number of people coming to the office each day
    }]
  };

  // Function to handle dropdown change
  const handleChartTypeChange = (event) => {
    setIsLoading(true);
    setChartType(event.target.value); // Update chart type based on selected value
  };

  // useEffect hook to trigger delayed rendering of the chart
  useEffect(() => {
    
    const timer = setTimeout(() => {
      setIsLoading(false); // Set loading state to false after the delay
    }, 2000); // 2000 milliseconds delay, adjust as needed

    return () => clearTimeout(timer); // Cleanup function to clear the timer
  }); // Empty dependency array ensures useEffect runs only once on initial render

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
