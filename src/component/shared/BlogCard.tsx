"use client"

import Image from "next/image";
import Link from "next/link";

const BlogCard = ({ blogs }: { blogs: { blogName: string; blogUrl: string; blogImage: string; description: string }[] }) => {
  
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 my-5">
      {blogs.map((i, key) => (
        <div
          key={key}
          className="border-2 p-4  bg-[#3c91b2]   rounded-lg shadow-lg  mx-auto"
        >
          {/* Image */}
          <div className="rounded-lg overflow-hidden ">
            <Image
              src={ i.blogImage||"/your-image.png"} // Dynamically set image from blog data
              alt="Blog post image"
              width={0}
              height={0}
              className="w-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="mt-4 text-white">
            <h3 className="text-lg font-semibold flex items-center">
               {i.blogName} {/* Dynamically set title */}
            </h3>

            {/* Metadata */}
            <div className="flex items-center text-gray-400 text-sm mt-2">
              <span className="mr-2 text-white">{i.description.slice(0,200) || "5 min"}</span>
            </div>

            {/* Button */}
            <Link href={i.blogUrl} target="_blank">
            <button className="mt-4 cursor-pointer px-4 py-2 border border-gray-400 rounded-md text-gray-300 hover:bg-[#f1f5f9] hover:text-black transition">
              Read More
            </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogCard;
