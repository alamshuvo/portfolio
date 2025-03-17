"use client";

import { useState } from "react";
import Sidebar from "@/component/shared/Sidebar";
import { Menu } from "lucide-react"; // Icon for mobile menu

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* Sidebar: Hidden on small screens, slide-in drawer */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-white border-r shadow-md transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform lg:relative lg:translate-x-0 lg:w-[20%]`}
      >
        <Sidebar />
      </div>

      {/* Overlay (when sidebar is open on mobile) */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-40 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}

      {/* Main Content */}
      <div className="flex-1 lg:w-[80%] p-4 bg-slate-100 rounded-xl">
        {/* Mobile Menu Button */}
        <button
          className="lg:hidden fixed top-4 left-4 z-50 bg-white p-2 rounded-md shadow-md"
          onClick={() => setIsSidebarOpen(true)}
        >
          <Menu className="w-6 h-6 text-gray-700" />
        </button>

        {children}
      </div>
    </div>
  );
}
