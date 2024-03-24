import { useState } from 'react';
import './App.css';
import BarChart from './components/Barchart';
import TeamAttendanceChart from './components/TeamAttendanceChart';

function App() {
  const [isBarChartDisplayed, setIsBarChartDisplayed] = useState(true); // State to track which chart is displayed

  
  const handleBarChartButtonClick = () => {
    setIsBarChartDisplayed(true); 
  };

  
  const handleTeamAttendanceButtonClick = () => {
    setIsBarChartDisplayed(false); 
  };

  return (
    <div className="App">
      
      <button onClick={handleBarChartButtonClick} style={{ fontWeight: isBarChartDisplayed ? 'bold' : 'normal' }}>Aggregate Attendance</button>
      <button onClick={handleTeamAttendanceButtonClick} style={{ fontWeight: !isBarChartDisplayed ? 'bold' : 'normal' }}>Team Attendance</button>
      {isBarChartDisplayed ? <BarChart /> : <TeamAttendanceChart />}
      {/* <BarChart/>
      <TeamAttendanceChart/> */}
    </div>
  );
}

export default App;
