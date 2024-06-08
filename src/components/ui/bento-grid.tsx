import { cn } from "@/utils/cn";
import React from "react";

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
        "grid md:auto-rows grid-cols-1 md:grid-cols-3 gap-4 mx-auto",
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
  img,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  number?: string | React.ReactNode;
  img?: string;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-md group/bento hover:bg-[rgba(255,255,255,0.1)] transition duration-200 p-6 bg-[rgba(255,255,255,0.05)] border-[rgba(255,255,255,.1)] border flex flex-col justify-evenly space-y-4 relative overflow-hidden",
        className
      )}
    >
      <div className="text-5xl lg:text-6xl font-bold text-textColor">
        {number}
      </div>
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        <div className="font-bold text-[1.5rem] leading-[1.7rem] mb-4">
          {title}
        </div>
        <div className="font-normal text-[16px] leading-[20px] text-textColor">
          {description}
        </div>
      </div>
      {img && (
        <div className="absolute hidden lg:block bottom-0 right-0 -z-10">
          <img src={img} alt="some alt" className="w-[500px] h-auto" />
        </div>
      )}
    </div>
  );
};
