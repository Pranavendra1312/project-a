import React from 'react';

const ChartTypeDropdown = ({ value, onChange }) => {
  return (
    <select value={value} onChange={onChange}>
      <option value="column">Column Chart</option>
      <option value="bar">Bar Chart</option>
      <option value="line">Line Chart</option>
      <option value="area">Area Chart</option>
      <option value="pie">Pie Chart</option>
      <option value="scatter">Scatter Chart</option>
    </select>
  );
};

export default ChartTypeDropdown;
