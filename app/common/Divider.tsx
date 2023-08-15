import React from "react";
import classNames from "classnames";

interface IDividerProps {
  light?: boolean;
}
export const Divider = ({ light }: IDividerProps) => {
  const className = classNames({
    "w-full h-[1px]": true,
    "bg-[#424557]": !light,
    "bg-slate-100": light,
  });
  return <div className={className} />;
};
