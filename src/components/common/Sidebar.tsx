"use client";

import { menuArray } from "@/constants";
import useClickOutside from "@/hooks/useClickOutside";
import useIsMobile from "@/hooks/useIsMobile";
import React, { useState } from "react";

interface SidebarItemProps {
  name: string;
  icon: string;
  url: string;
  isOpenSidebar: boolean;
}

const SidebarItem = ({ name, icon, url, isOpenSidebar }: SidebarItemProps) => {
  return (
    <div
      className={`w-10 h-10 flex items-center justify-center cursor-pointer text-white hover:text-bright-blue ${
        isOpenSidebar ? "w-full justify-start gap-3 px-2" : ""
      }`}
    >
      <img src={icon} alt={name} className="w-5 h-5 object-contain" />
      {isOpenSidebar && (
        <p className="capitalize text-sm transition-all overflow-hidden whitespace-nowrap text-ellipsis">
          {name}
        </p>
      )}
    </div>
  );
};

const Sidebar = () => {
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);
  const isMobile = useIsMobile(1023);

  const sidebarRef = useClickOutside(() => {
    if (isMobile) return;

    setIsOpenSidebar(false);
  });

  return (
    <div
      ref={sidebarRef}
      className={`fixed z-100 top-0 left-0 w-[60px] h-screen p-2.5 bg-midnight-blue border-r border-dark-slate transition-all overflow-y-auto ${
        isOpenSidebar ? "w-[200px]" : ""
      }`}
    >
      <div
        className="flex items-center justify-center w-10 h-10 mb-2.5 cursor-pointer"
        onClick={() => setIsOpenSidebar(!isOpenSidebar)}
      >
        <img src="/icons/burger.svg" alt="menu" />
      </div>
      {menuArray.map((item) => (
        <SidebarItem
          key={item.id}
          name={item.name}
          icon={item.icon}
          url={item.url}
          isOpenSidebar={isOpenSidebar}
        />
      ))}
    </div>
  );
};

export default Sidebar;
