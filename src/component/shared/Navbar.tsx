"use client";

import { Home, Calendar, Moon, Mail, LayoutDashboard } from "lucide-react";

import Link from "next/link";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"; // ShadCN Tooltip
import { motion } from "framer-motion"; // For animations
import { signOut } from "next-auth/react";

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
  console.log(session);
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
                {
                  href: "/dashboard",
                  label: "Dashboard",
                  icon: LayoutDashboard,
                },
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
              <button
               
                className="border-red-500 text-red-500 px-2 border-2  cursor-pointer hover:bg-red-500 hover:text-white"
                onClick={() => signOut()}
              >
                Logout
              </button>
            ) : (
              <Link href="/login">
                <button
                 
                  className="border-teal-500 text-teal-500 cursor-pointer px-2 border-2 rounded-lg hover:bg-teal-500 hover:text-white"
                >
                  Login
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Navbar (Sticky Bottom) */}
      <div className="lg:hidden fixed bottom-0 left-0 w-full bg-white shadow-md border-t z-50 pb-[env(safe-area-inset-bottom)]">
        <div className="flex justify-around items-center py-3">
          {[
            { href: "/", label: "Home", icon: Home },
            { href: "/theme", label: "Theme", icon: Moon },
            { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
            { href: "/contact", label: "Contact", icon: Mail },
          ].map(({ href, label, icon: Icon }, index) => (
            <Link
              key={index}
              href={href}
              className="text-[#3c91b2] flex flex-col items-center"
            >
              <motion.div variants={iconVariants} whileHover="hover">
                <Icon className="w-6 h-6" />
              </motion.div>
              <span className="text-xs mt-1">{label}</span>{" "}
              {/* Visible label instead of Tooltip */}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
