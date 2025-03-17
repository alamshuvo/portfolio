"use server"

import { FormValues } from "@/app/(withDashboard)/dashboard/addBlog/page";




export const addBlogs =async (data:FormValues)=>{
 const res = await fetch(`${process.env.BACKEND_URL}/blogs`,{
    method:"POST",
    headers:{
        "Content-Type":"application/json"
    },
    body:JSON.stringify(data),
    cache:"no-store"
 })
 const blogInfo = await res.json();
 return blogInfo
}