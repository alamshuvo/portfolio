"use client";
import { animatePageIn } from "@/utils/animation";
import React, { useEffect } from "react";

const Template = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    animatePageIn();
  }, []);

  return (
    <div>
      {[...Array(4)].map((_, index) => (
        <div
          key={index}
          id={`banner-${index + 1}`}
          className="min-h-screen bg-[#ceedf9] z-10 fixed top-0 w-1/4"
          style={{ left: `${(index * 25)}%` }} // Dynamically setting left position
        ></div>
      ))}
      {children}
    </div>
  );
};

export default Template;
