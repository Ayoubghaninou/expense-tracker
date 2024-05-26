import React from "react";
import { useSelector } from "react-redux";

const UserInfo = ({  onLogout }) => {
  const { user } = useSelector((state) => state.auth);
  return (
    <div className="flex justify-between items-center mb-4">
      <div>
        <p className="text-xl font-semibold">Hi, {user}</p>
        <p className="text-sm text-gray-600">{user?.email}</p>
      </div>

      <img
        onClick={onLogout}
        className="w-1/5 m text-white py-2 px-4 rounded-md"
        src="https://www.svgrepo.com/show/268357/off-button-power-button.svg"
      />
    </div>
  );
};

export default UserInfo;
