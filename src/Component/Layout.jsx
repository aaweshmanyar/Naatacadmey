// components/Layout.js
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FileText, File, Star, Info, Pencil,
  Book, Calendar as CalendarIcon, Tag, Users, Menu
} from "lucide-react";
import { FaLanguage as LanguagesIcon } from "react-icons/fa";

export default function Layout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const sidebarItems = [
    { path: "/dashboard", icon: <FileText />, text: "Dashboard", arabicText: "لوحة" },
    { path: "/post", icon: <File />, text: "Posts", arabicText: "منشورات" },
    { path: "/style", icon: <Star />, text: "Styles", arabicText: "أنماط" },
    { path: "/topic", icon: <Info />, text: "Topics", arabicText: "مقالات" },
    { path: "/writer", icon: <Pencil />, text: "Writers", arabicText: "شعراء أكرام" },
    { path: "/article", icon: <FileText />, text: "Articles", arabicText: "مقالين" },
    { path: "/books", icon: <Book />, text: "Books", arabicText: "کتاب" },
    { path: "/languages", icon: <LanguagesIcon />, text: "Languages", arabicText: "زبانیں" },
    { path: "/calendar", icon: <CalendarIcon />, text: "Calendar", arabicText: "کیلنڈر" },
    { path: "/tags", icon: <Tag />, text: "Tags", arabicText: "ٹیگز" },
    { path: "/admins", icon: <Users />, text: "Admins", arabicText: "ایڈمنز" },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 transform bg-white transition-transform duration-300 ease-in-out border-r md:translate-x-0 md:static md:inset-auto md:h-screen ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-16 items-center justify-between border-b px-4">
          <h2 className="text-lg font-semibold">Naat Academy Data</h2>
          <button className="md:hidden text-xl" onClick={() => setSidebarOpen(false)}>
            &times;
          </button>
        </div>
        <nav className="space-y-1 p-2">
          {sidebarItems.map(({ path, icon, text, arabicText }) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                `flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium ${
                  isActive ? "bg-blue-100 text-blue-700" : "text-gray-700 hover:bg-gray-100"
                }`
              }
              onClick={() => setSidebarOpen(false)}
            >
              <span>{icon}</span>
              <span>{text}</span>
              <span className="ml-auto text-xs text-gray-400">{arabicText}</span>
            </NavLink>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1">
        {/* Header */}
        <header className="flex h-16 items-center justify-between border-b bg-white px-4">
          <button className="md:hidden" onClick={() => setSidebarOpen(true)}>
            <Menu className="h-6 w-6" />
            <span className="sr-only">Open sidebar</span>
          </button>
          <div className="ml-auto flex items-center gap-2">
            <div className="text-right text-sm">
              <div className="font-medium">Admin User</div>
              <div className="text-gray-500 text-xs">admin@example.com</div>
            </div>
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500 text-white">A</div>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
