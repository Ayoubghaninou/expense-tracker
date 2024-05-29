import React from "react";

function Desktop_view(props) {
  return (
    <div className="h-[100vh] text-2xl text-white  flex justify-around items-center">
      <div>
        <img src="/budget.png" alt="" />
      </div>
      <div>
        <h1 className="font-bold ">
          Expense Tracker is only available on Mobile
        </h1>
        <p className="text-lg text-center">Please open on your mobile device</p>
      </div>
    </div>
  );
}

export default Desktop_view;
