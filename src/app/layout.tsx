import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import "./globals.css";

import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/authOptions";
import Navbar from "@/component/shared/Navbar";


export const metadata: Metadata = {
  title: "Iftakhars Portfolio",
  description: "",
};

export const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
});

const session = await getServerSession(authOptions);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto_mono} antialiased bg-[#f1f5f9]`}>
        <Navbar session={session}></Navbar>
       
        <div className="min-h-screen container mx-auto ">{children}</div>
      </body>
    </html>
  );
}
