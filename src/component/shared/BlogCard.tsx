"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { FaFileAlt } from "react-icons/fa";

const BlogCard = ({
  blogs,
}: {
  blogs: {
    blogsName: string;
    externalLink: string | undefined;
    photo: string;
    title: string;
    description: string;
  }[];
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-10 px-4">
      {blogs.map((blog, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200 hover:shadow-2xl transition-all duration-300 flex flex-col"
        >
          {/* Image */}
          <div className="relative w-full h-56">
            <Image
              src={blog.photo || "/placeholder.jpg"}
              alt={blog.blogsName}
              fill
              className="object-cover transition-transform duration-300 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-t-2xl" />
          </div>

          {/* Content */}
          <div className="p-6 flex flex-col flex-grow">
            {/* Subtitle */}
            <h3 className="text-sm text-gray-500 uppercase tracking-wide mb-1">
              {blog.title}
            </h3>

            {/* Main Title */}
            <h2 className="text-xl font-bold text-gray-800 mb-2 hover:text-blue-600 transition">
              {blog.blogsName}
            </h2>

            {/* Description */}
            <p className="text-gray-600 text-sm mb-4 flex-grow">
              {blog.description.slice(0, 200)}...
            </p>

            {/* Button */}
            <Link href={blog.externalLink || "/"} target="_blank">
            <Button className="flex items-center px-5 py-5 text-xl text-white bg-[#3c91b2] rounded-lg cursor-pointer shadow-md hover:bg-[#317a91] transition">
            <FaFileAlt className="mr-2" />
            Read Full blog 
          </Button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogCard;
