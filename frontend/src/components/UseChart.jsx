import React from "react";
import { PieChart } from "react-minimal-pie-chart";

function UseChart({ totalExpense, budget }) {
  const remainingBudget = budget - totalExpense;

  return (
    <div className="w-4/5 mx-auto">
      <h2 className="text-center text-xl font-bold mb-4">Monthly Budget Overview</h2>
   
      <div className="flex justify-center whitespace-nowrap	 mt-4">
        <div className="flex items-center mr-4">
          <div className="w-4 h-4 mr-2" style={{ backgroundColor: "#E38627" }}></div>
          <span>Expenses</span>
        </div>
        <div className="flex items-center">
          <div className="w-4 h-4 mr-2" style={{ backgroundColor: "#C13C37" }}></div>
          <span>Remaining Budget</span>
        </div>
      </div>
      <PieChart
        data={[
          { title: "Expenses", value: totalExpense, color: "#E38627" },
          { title: "Remaining Budget", value: remainingBudget > 0 ? remainingBudget : 0, color: "#C13C37" },
        ]}
        label={({ dataEntry }) => `${Math.round(dataEntry.percentage)} %`}
        labelStyle={{
          fontSize: "5px",
          fontFamily: "sans-serif",
          fill: "#fff",
        }}
        labelPosition={60}
        radius={42}
        startAngle={-180}
        animate
      />
      <div className="text-center mt-4">
        {/* <p>Total Expenses: ₹ {totalExpense}</p> */}
        <p>Expenses: ₹ {budget}</p>
        <p>Remaining Budget: ₹ {remainingBudget > 0 ? remainingBudget : 0}</p>
      </div>
     
    </div>
  );
}

export default UseChart;
