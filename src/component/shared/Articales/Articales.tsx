
import { Metadata } from "next";
import BlogCard from "../BlogCard";




export const metadata: Metadata = {
  title: "Articales",
};
const Articales = async () => {
  const res = await fetch(`${process.env.BACKEND_URL}/blogs`); //ssg // incremental static site regenration
  const blogs = await res.json();

  return (
    <div>
      <p className="text-4xl font-bold text-center my-5 text-[#334155] relative after:content-[''] after:block after:w-0 after:h-[3px] after:bg-[#3c91b2] after:transition-all after:duration-500 hover:after:w-full">
        Articles
      </p>

      <div className="grid ">
      <BlogCard blogs={blogs?.data}></BlogCard>
      </div>
    </div>
  );
};

export default Articales;
