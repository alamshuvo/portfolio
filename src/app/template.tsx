"use client";
import { animatePageIn } from "@/utils/animation";
import React, { useEffect } from "react";

const Template = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    animatePageIn();
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Banner */}
      <div className="fixed inset-0 z-10 flex flex-col md:flex-row">
        {[...Array(4)].map((_, index) => (
          <div
            key={index}
            id={`banner-${index + 1}`}
            className="flex-1 h-[25vh] md:h-full bg-black"
          ></div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-20">{children}</div>
    </div>
  );
};

export default Template;
