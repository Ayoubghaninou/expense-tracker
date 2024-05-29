import React from "react";
import { memo } from "react";

const UserInfo = ({  onLogout }) => {
  const user=sessionStorage.getItem("user")
  return (
    <div className="flex justify-between font-medium text-light_black items-center ">
      <div className="border-l-8 border-blue_c pl-2">
        <p className="text-xl">Hi, {user}</p>
        <p className="text-sm ">{user?.email}</p>
      </div>

      <img
        onClick={onLogout}
        className="w-1/5 m text-white py-2 px-4 rounded-md"
        src="/log_out.svg"
      />
    </div>
  );
};

export default memo(UserInfo)  ;
