import React from "react";

const Balance = () => {
  return (
    <div className="flex border border-dark-slate rounded-sm overflow-hidden text-white text-sm text-medium">
      <div className="p-2 flex items-center gap-2.5">
        <img src="/icons/dollar.svg" alt="dollar" />
        <p>10,566.12</p>
      </div>
      <div className="flex items-center justify-center py-2 px-5 bg-bright-blue cursor-pointer">
        DEPOSIT
      </div>
    </div>
  );
};

export default Balance;
