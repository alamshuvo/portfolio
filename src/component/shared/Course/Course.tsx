
import { Metadata } from "next";

import CourseCard from "@/component/CourseCard";




export const metadata: Metadata = {
  title: "Articales",
};
const Course = async () => {
  const res = await fetch(`${process.env.BACKEND_URL}/course`); //ssg // incremental static site regenration
  const course = await res.json();

  return (
    <div>
      <p className="text-4xl font-bold text-center my-5 text-[#334155] relative after:content-[''] after:block after:w-0 after:h-[3px] after:bg-[#3c91b2] after:transition-all after:duration-500 hover:after:w-full">
        Course
      </p>

      <div className="grid ">
      <CourseCard courses={course?.data}></CourseCard>
      </div>
    </div>
  );
};

export default Course;
