import React from "react";
import Button from "./Button";
import useIsMobile from "@/hooks/useIsMobile";
import Balance from "./Balance";

const Navbar = () => {
  const isMobile = useIsMobile(1023);
  return (
    <div
      className={`fixed z-99 top-0 h-15 py-2.5 bg-midnight ${
        isMobile ? "w-full left-0" : "w-[calc(100%-60px)] left-[60px]"
      }`}
    >
      <div className="w-full wrapper flex items-center justify-between gap-1">
        {/* Logo */}
        <div className="w-20 h-10 rounded-md bg-steel-blue" />
        <div className="flex items-center gap-1">
          <Balance />
          <Button type="secondary" icon="/icons/bell.svg" onClick={() => {}} />
          <Button type="secondary" icon="/icons/user.svg" onClick={() => {}} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
