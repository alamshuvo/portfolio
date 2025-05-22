import { Metadata } from "next";

import ExperienceCard from "@/component/ExperienceCard";

export const metadata: Metadata = {
  title: "Articales",
};
const Experience = async () => {
  const res = await fetch(`${process.env.BACKEND_URL}/experience`); //ssg // incremental static site regenration
  const experience = await res.json();

  return (
    <div>
      <p className="text-4xl font-bold text-center my-5 text-[#334155] relative after:content-[''] after:block after:w-0 after:h-[3px] after:bg-[#3c91b2] after:transition-all after:duration-500 hover:after:w-full">
        Experience
      </p>

      <div className="grid ">
        <ExperienceCard experiences={experience.data}></ExperienceCard>
      </div>
    </div>
  );
};

export default Experience;
