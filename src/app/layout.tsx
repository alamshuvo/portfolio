import type { Metadata } from "next";
import { Roboto } from 'next/font/google'
import "./globals.css";

import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/authOptions";
import Navbar from "@/component/shared/Navbar";


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
  const session = await getServerSession(authOptions);
  return (
    <html lang="en">
      <body className={`${roboto.className} antialiased bg-[#f1f5f9]`}>
        <Navbar session={session}></Navbar>
       
        <div className="min-h-screen container mx-auto ">{children}</div>
      </body>
    </html>
  );
}
