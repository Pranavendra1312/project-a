import React, { useState, useEffect } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import ChartTypeDropdown from './ChartTypeDropdown'; // Import the dropdown component
import LoadingSpinner from './LoadingSpinner'; // Import the LoadingSpinner component

const TeamAttendanceChart = () => {
  const [chartType, setChartType] = useState('column'); // State to track the selected chart type
  const [isLoading, setIsLoading] = useState(true); // State to track loading state

  // Function to generate random values between 5 and 10
  const generateRandomValue = () => Math.floor(Math.random() * 6) + 5;

  // Data series for the team attendance chart
  const teamAttendanceData = [
    { name: 'Engineering', data: [40, 45, 50, generateRandomValue(), generateRandomValue()] }, // Monday, Tuesday, Wednesday, Thursday, Friday
    { name: 'Analytics', data: [generateRandomValue(), 30, generateRandomValue(), 35, generateRandomValue()] }, // Monday, Tuesday, Wednesday, Thursday, Friday
    { name: 'Wiq', data: [generateRandomValue(), generateRandomValue(), 50, generateRandomValue(), 45] } // Monday, Tuesday, Wednesday, Thursday, Friday
  ];

  // Options object defining the configuration of the chart
  const options = {
    chart: {
      type: chartType // Dynamically set chart type based on selected value
    },
    title: {
      text: 'Team Attendance (Weekly)' // Chart title
    },
    xAxis: {
      categories: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'] // X-axis categories - days of the week
    },
    yAxis: {
      title: {
        text: 'Number of People' // Y-axis title
      }
    },
    series: chartType === 'pie' ? teamAttendanceData.map(team => ({ name: team.name, data: team.data.reduce((acc, val) => acc + val, 0) })) : teamAttendanceData // Use team attendance data for series
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

export default TeamAttendanceChart; // Export the TeamAttendanceChart component
