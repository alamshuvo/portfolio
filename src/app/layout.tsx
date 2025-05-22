import type { Metadata } from "next";
import { Roboto } from 'next/font/google'
import "./globals.css";
import Navbar from "@/component/shared/Navbar";
import { Toaster } from "sonner";


export const metadata: Metadata = {
  title: "Iftakhars Portfolio",
  description: "",
};

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})



export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} antialiased bg-[#f1f5f9]`}>
        <Toaster></Toaster>
        <div className=" mt-4 lg:mt-20 md:lt-10 ">
        <Navbar></Navbar>
        </div>
       
        <div className="min-h-screen container mx-auto ">{children}</div>
      </body>
    </html>
  );
}
