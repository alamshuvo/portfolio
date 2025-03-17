"use client"

import { addBlogs } from "@/utils/actions/addBlogs";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
export type FormValues = {
    blogName: string;
    blogUrl: string;
    blogImage:string,
    description:string
  };
const AddBlogPage = () => {
    const router = useRouter()
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<FormValues>();

      const onSubmit = async (data: FormValues) => {
        try {
          const res = await addBlogs(data);
          if (res.sucess) {
            toast.success(`${res.message}`)
          }
          router.push("/blogs")
       
        } catch (err: any) {
          console.error(err.message);
          throw new Error(err.message);
        }
      };
    
    return (
        <div className="my-20">
            
        <div className="w-[80%] mx-auto bg-white p-6 shadow-lg rounded-lg">
            <p className="text-center text-xl font-bold">Add Blog</p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-6">
              <label
                htmlFor="blogName"
                className="block text-sm font-medium text-gray-700"
              >
                Blog Name
              </label>
              <input
                id="blogName"
                type="text"
                {...register("blogName")}
                placeholder="BlogName"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm  sm:text-sm"
                required
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="blogUrl"
                className="block text-sm font-medium text-gray-700"
              >
                Blog URL 
              </label>
              <input
                id="blogUrl"
                type="text"
                {...register("blogUrl")}
                placeholder="Blog URL "
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm  sm:text-sm"
                required
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="blogImage"
                className="block text-sm font-medium text-gray-700"
              >
                Blog Image
              </label>
              <input
                id="blogImage"
                type="text"
                {...register("blogImage")}
                placeholder="Blog Image"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm  sm:text-sm"
                required
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700"
              >
                Description
              </label>
              <input
                id="description"
                type="text"
                {...register("description")}
                placeholder="Description"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm  sm:text-sm"
                required
              />
            </div>

            <div>
              <button
                type="submit"
                className="cursor-pointer w-full border border-teal-500 text-teal-500 font-semibold py-2 px-4 rounded-md shadow-md hover:bg-teal-500 hover:text-black"
              >
                Login
              </button>
            </div>
          </form>
        </div>
        </div>
    );
};

export default AddBlogPage;