import { cn } from "@/utils/cn";
import React from "react";
import AnimatedBeamDemo from "./animated-beam-demo";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  number,
  beam,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  number?: string | React.ReactNode;
  beam?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-md group/bento hover:hover:bg-[rgba(255,255,255,0.1)] transition duration-200 p-6 bg-[rgba(255,255,255,0.05)]  border-[rgba(255,255,255,.1)] border flex flex-col justify-evenly space-y-4",
        className
      )}
    >
      <div className="text-5xl lg:text-6xl font-bold text-textColor">
        {number}
      </div>
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        <div className="font-bold text-[1.5rem] leading-[1.7rem] text-neutral-200 mb-4">
          {title}
        </div>
        <div className="font-normal text-[14px] leading-[20px] text-neutral-300">
          {description}
        </div>
        <div>{beam}</div>
      </div>
    </div>
  );
};
