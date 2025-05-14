// components/SidebarItem.js
import React from "react";
import { cn } from "../lib/utils";

export default function SidebarItem({ icon, text, arabicText, active = false }) {
  return (
    <a
      href="#"
      className={cn(
        "flex items-center justify-between rounded-md px-3 py-2 text-sm font-medium",
        active ? "bg-blue-50 text-blue-600" : "text-gray-700 hover:bg-gray-100",
      )}
    >
      <div className="flex items-center gap-3">
        {icon}
        <span>{text}</span>
      </div>
      <span className="text-gray-500 text-right">{arabicText}</span>
    </a>
  );
}
