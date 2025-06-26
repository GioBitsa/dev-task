import React, { ReactNode } from "react";

interface ButtonProps {
  children?: ReactNode;
  onClick: () => void;
  type?: "primary" | "secondary";
  icon?: string;
  stretch?: boolean;
  bordered?: boolean;
  className?: string;
}

const Button = ({
  children,
  onClick,
  type = "primary",
  icon,
  stretch,
  className,
}: ButtonProps) => {
  return (
    <div
      className={`p-2.5 rounded-md cursor-pointer flex items-center justify-center gap-2.5 ${
        stretch && "w-full"
      } ${
        type === "primary"
          ? "bg-bright-blue text-white"
          : "bg-space-slate text-pastel-blue border border-deep-slate"
      } ${className}`}
    >
      {icon && <img src={icon} alt="icon" className="w-5 h-5 object-contain" />}
      {children}
    </div>
  );
};

export default Button;
