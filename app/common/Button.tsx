"use client";
import React from "react";
import classNames from "classnames";

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode | string;
  variant?: string;
}

export const Button = (props: ButtonProps) => {
  const { children, onClick, variant } = props;

  const className = classNames({
    "rounded-full px-6 py-3 hover:scale-105 transition": true,
    "bg-[#FFF]": variant === "light",
    "bg-[#8195FE] text-white": variant === "secondary",
    "bg-[#F9B96B] text-white": variant === "primary",
  });
  return (
    <button
      className={`${className} `}
      onClick={() => {
        console.log("yoyo");
      }}
    >
      <div className="text-[14px] font-semibold tracking-wider">{children}</div>
    </button>
  );
};

Button.defaultProps = {
  variant: "primary",
  children: "Button",
  onClick: () => {},
};
