"use client";

import { useEffect } from "react";
import gsap from "gsap";

const RotatingText = () => {
  useEffect(() => {
    const words = document.querySelectorAll("[data-rotator] span");

    const mainTL = gsap.timeline({ repeat: -1 });

    words.forEach((word) => {
      mainTL
        .to(word, {
          opacity: 1,
          y: "0%",
          duration: 1, // Smooth fade-in
          ease: "power2.out",
          visibility: "visible", // Fix: Show instead of display block
        })
        .to(
          word,
          {
            opacity: 0,
            y: "-50%",
            duration: 1, // Smooth fade-out
            ease: "power2.in",
            visibility: "hidden", // Fix: Hide instead of display none
          },
          "+=2" // Holds for 2 seconds before moving to the next
        );
    });
  }, []);

  return (
    <div className="relative inline-block ml-4 text-2xl font-semibold text-[#535353]">
      <span
        data-rotator
        className="relative inline-block h-8 overflow-hidden w-100 text-center"
      >
        <span className="absolute top-0 left-0 w-full text-center opacity-0">
          Passionate Programmer
        </span>
        <span className="absolute top-0 left-0 w-full text-center opacity-0">
          MERN Stack Enthusiast
        </span>
        <span className="absolute top-0 left-0 w-full text-center opacity-0">
          Full Stack Developer
        </span>
      </span>
    </div>
  );
};

export default RotatingText;
