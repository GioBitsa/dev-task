import { mobileMenu } from "@/constants";
import React, { useState } from "react";

const MobileSidebar = () => {
  const [isActive, setIsActive] = useState(3);

  return (
    <div className="w-full h-[60px] p-1 flex items-center justify-around gap-7.5 border-t border-dark-slate bg-midnight">
      {mobileMenu.map((item) => (
        <div
          key={item.id}
          className={`w-12.5 h-12.5 flex flex-col gap-1 justify-center items-center cursor-pointer transition ${
            isActive === item.id ? "bg-bright-blue rounded-full" : ""
          }`}
          onClick={() => setIsActive(item.id)}
        >
          <img
            src={item.icon}
            alt={item.text}
            className="w-6 h-6 object-contain"
          />
          {isActive !== item.id && (
            <p className="text-xs text-white ">{item.text}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default MobileSidebar;
