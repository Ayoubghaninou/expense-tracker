import React from "react";
import { PieChart } from "react-minimal-pie-chart";

function UseChart(props) {
  return (
    <div className="w-4/5 mx-auto">
      <PieChart
        data={[
          { title: "One", value: 100, color: "#E38627" },
          { title: "Two", value: 15, color: "#C13C37" },
        ]}
      />
      
    </div>
  );
}

export default UseChart;
