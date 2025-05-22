/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
import { BadgeCheck } from "lucide-react";
import Link from "next/link";

const CourseCard = (courses: any) => {
  console.log(courses);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-8">
      {courses?.courses?.map((course:any, index:number) => (
        <div
          key={index}
          className="bg-white border border-gray-200 rounded-xl shadow-md p-6 hover:shadow-lg transition duration-300"
        >
          {/* Title */}
          <h3 className="text-xl font-bold text-gray-800 mb-2">
            {course.courseName}
          </h3>

          {/* Duration */}
          <p className="text-sm text-gray-500 mb-4">
            Duration:{" "}
            <span className="font-medium text-gray-700">{course.duration}</span>
          </p>

          {/* Certificate Link */}
          <Link
            href={course.certificate}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="flex items-center px-5 py-5 text-xl text-white bg-[#3c91b2] rounded-lg cursor-pointer shadow-md hover:bg-[#317a91] transition">
              <BadgeCheck size={18} />
              View Certificate
            </Button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default CourseCard;
