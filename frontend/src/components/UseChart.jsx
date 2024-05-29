import React, { useEffect } from "react";
import { PieChart } from "react-minimal-pie-chart";
import { MdEdit } from "react-icons/md";

function UseChart({ totalExpense, onEditBudget }) {
  const budget=sessionStorage.getItem("budget")

  const remainingBudget = budget - totalExpense;

  return (
    <div className="relative  mx-auto">
   
      <div className="relative w-3/5  mx-auto">
        <PieChart
          data={[
            { title: "Expenses", value: totalExpense, color: "#F9A11B" },
            {
              title: "Remaining Budget",
              value: remainingBudget > 0 ? remainingBudget : 0,
              color: "#2A306E",
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
         // startAngle={-40}
          animate
          lineWidth={20}
       //   rounded
        />
        <div className="absolute text-4xl inset-0 flex flex-col items-center justify-center">
          <div className="relative text-center rounded-full p-4">
            <p className="text-sm  font-semibold text-[#6E6D6D]"> Balance</p>
            <p className="font-bold  text-[7vw] text-light_black">Rs.{budget}</p>
            <p onClick={onEditBudget} className="text-[#6E6D6D] w-max mx-auto text-sm">
            <MdEdit />

            </p>
          </div>
        </div>
      </div>
      <div className="flex   text-light_black border-b pb-3 justify-center whitespace-nowrap mt-2">
        <div className="flex items-center mr-4">
          <div
            className="w-4 h-4 mr-2"
            style={{ backgroundColor: "#F9A11B" }}
          ></div>
          <span>Expenses</span>
        </div>
        <div className="flex items-center">
          <div
            className="w-4 h-4 mr-2"
            style={{ backgroundColor: "#2A306E" }}
          ></div>
          <span>Remaining Budget</span>
        </div>
      </div>

      <ul className="font-bold list-disc text-md pl-5	 text-start text-blue_c  flex justify-between mt-4">
        <li className="">
          EXPENSES <h2 className="text-light_black text-xl"> Rs.{totalExpense}</h2>
        </li>
        <li>
          REMAINING <h3 className="text-light_black text-xl"> Rs.{remainingBudget > 0 ? remainingBudget : 0}</h3>
        </li>
      </ul>
    </div>
  );
}

export default UseChart;
