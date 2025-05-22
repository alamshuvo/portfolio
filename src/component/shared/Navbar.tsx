"use client";

import { Book, ExpandIcon, Home, Projector } from "lucide-react";

import Link from "next/link";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"; // ShadCN Tooltip
import { motion } from "framer-motion"; // For animations
import { GiSkills } from "react-icons/gi";
import { SiCoursera } from "react-icons/si";



// Hover animation
const iconVariants = {
  hover: { x: [0, -2, 2, 0], transition: { duration: 0.3 } },
};

const Navbar = () => {
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
                { href: "/blog", label: "Blogs", icon: Book },
                {href:"/skill",label:"Skills",icon:GiSkills},
                {href:"/course",label:"Course",icon: SiCoursera},
                {href:"/experience",label:"Experience",icon: ExpandIcon},
                {href:"/project",label:"Projects",icon: Projector},
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
        </div>
      </div>

      {/* Mobile Navbar (Sticky Bottom) */}
      <div className="lg:hidden fixed bottom-0 left-0 w-full bg-white shadow-md border-t z-50 pb-[env(safe-area-inset-bottom)]">
        <div className="flex justify-around items-center py-3">
          {[
            { href: "/", label: "Home", icon: Home },
            { href: "/blog", label: "Blogs", icon: Book },
            {href:"/course",label:"Course",icon: SiCoursera},
            {href:"/skill",label:"Skills",icon:GiSkills},
            {href:"/experience",label:"Experience",icon: ExpandIcon},
          ].map(({ href, label, icon: Icon }, index) => (
            <Link
              key={index}
              href={href}
              className="text-[#3c91b2] flex flex-col items-center"
            >
              <motion.div variants={iconVariants} whileHover="hover">
                <Icon className="w-6 h-6" />
              </motion.div>
              <span className="text-xs mt-1">{label}</span>
            </Link>
          ))}

          {/* Add Login/Logout button */}
        </div>
      </div>
    </>
  );
};

export default Navbar;
