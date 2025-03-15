import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Button } from "@/components/ui/button";
import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/authOptions";
import Navbar from "@/component/shared/Navbar";
import Home from "@/component/shared/Home";



export const metadata:Metadata = {
 title:"Iftakhars Portfolio"
}
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


const session = await getServerSession(authOptions)


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#f1f5f9]`}
      >
        <Navbar session={session}></Navbar>
     <div className="my-25">
     <Home></Home>
     </div>
        <div className="min-h-screen w-[90%] mx-auto ">
        {children}
        </div>
   
      </body>
    </html>
  );
}
