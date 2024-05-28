import React from "react";
import { PieChart } from "react-minimal-pie-chart";
import { CiEdit } from "react-icons/ci";

function UseChart({ totalExpense = 0, budget = 0, onEditBudget }) {
  const remainingBudget = budget - totalExpense;

  return (
    <div className="relative w-4/5 mx-auto">
      <div className="flex justify-center whitespace-nowrap mt-4">
        <div className="flex items-center mr-4">
          <div
            className="w-4 h-4 mr-2"
            style={{ backgroundColor: "#E38627" }}
          ></div>
          <span>Expenses</span>
        </div>
        <div className="flex items-center">
          <div
            className="w-4 h-4 mr-2"
            style={{ backgroundColor: "#001b91" }}
          ></div>
          <span>Remaining Budget</span>
        </div>
      </div>
      <div className="relative">
        <PieChart
          data={[
            { title: "Expenses", value: totalExpense, color: "#E38627" },
            {
              title: "Remaining Budget",
              value: remainingBudget > 0 ? remainingBudget : 0,
              color: "#001b91",
            },
          ]}
          //label={({ dataEntry }) => `${Math.round(dataEntry.percentage)} %`}
          labelStyle={{
            fontSize: "5px",
            fontFamily: "sans-serif",
            fill: "#fff",
          }}
          //  labelPosition={60}
          radius={42}
          startAngle={-180}
          animate
          lineWidth={20}
          rounded
        />
        <div className="absolute text-4xl inset-0 flex flex-col items-center justify-center">
          <div className="relative text-center  rounded-full p-4">
            <p className="font-bold ">₹ {budget}</p>
            <button onClick={onEditBudget} className="mt-2 ">
              <CiEdit />
            </button>
          </div>
        </div>
      </div>
      <div className="text-center flex justify-between mt-4">
        <h1 className="">
          Expenses <h2 className="font-bold"> ₹ {totalExpense}</h2>
        </h1>
        <h1>
          Remaining <h3> ₹ {remainingBudget > 0 ? remainingBudget : 0}</h3>
        </h1>
      </div>
    </div>
  );
}

export default UseChart;
