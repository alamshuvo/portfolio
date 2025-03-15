"use client";

import { Home, Calendar, Moon, Book, Mail, LayoutDashboard } from "lucide-react";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { Button } from "@/components/ui/button"; // ShadCN Button
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"; // ShadCN Tooltip
import { motion } from "framer-motion"; // For animations

type SessionProps = {
  user?: {
    name?: string | null;
    email?: string | null;
    image?: string | null;
  };
};

// Hover animation
const iconVariants = {
  hover: { x: [0, -2, 2, 0], transition: { duration: 0.3 } },
};

const Navbar = ({ session }: { session: SessionProps | null }) => {
  return (
    <>
      {/* Desktop Navbar (Top) */}
      <div className="hidden lg:flex w-full px-6 py-4 shadow-md bg-white fixed top-0 z-50">
        <div className="w-[50%] mx-auto flex items-center justify-between">
          {/* Left Side: Navigation Icons */}
          <nav>
            <ul className="flex space-x-6 text-gray-800">
              {[
                { href: "/", label: "Home", icon: Home },
                { href: "/calendar", label: "Calendar", icon: Calendar },
                { href: "/theme", label: "Theme", icon: Moon },
                { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
                { href: "/contact", label: "Contact", icon: Mail },
              ].map(({ href, label, icon: Icon }, index) => (
                <li key={index} className="hover:text-gray-600">
                  <Tooltip>
                    <TooltipTrigger>
                      <Link href={href} className="text-[#3c91b2]">
                        <motion.div variants={iconVariants} whileHover="hover">
                          <Icon className="w-7 h-7" />
                        </motion.div>
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent>{label}</TooltipContent>
                  </Tooltip>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right Side: Login/Logout */}
          <div className="flex items-center">
            {session?.user ? (
              <Button
                variant="outline"
                className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
                onClick={() => signOut()}
              >
                Logout
              </Button>
            ) : (
              <Link href="/login">
                <Button variant="outline" className="border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white">
                  Login
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Navbar (Sticky Bottom) */}
      <div className="lg:hidden fixed bottom-0 left-0 w-full bg-white shadow-md border-t z-50">
        <div className="flex justify-around py-3">
          {[
            { href: "/", label: "Home", icon: Home },
            { href: "/calendar", label: "Calendar", icon: Calendar },
            { href: "/theme", label: "Theme", icon: Moon },
            { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
            { href: "/contact", label: "Contact", icon: Mail },
          ].map(({ href, label, icon: Icon }, index) => (
            <Tooltip key={index}>
              <TooltipTrigger>
                <Link href={href} className="text-[#3c91b2]">
                  <motion.div variants={iconVariants} whileHover="hover">
                    <Icon className="w-5 h-5" />
                  </motion.div>
                </Link>
              </TooltipTrigger>
              <TooltipContent>{label}</TooltipContent>
            </Tooltip>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
