// pages/Dashboard.js
import React from "react";
import Layout from "../Component/Layout";
import { File, Star, Info, Pencil, Book, LanguagesIcon, FileText, Users } from "lucide-react";

function DashboardCard({ icon, title, value, color }) {
  return (
    <div className={`${color} rounded-lg border p-6 shadow-sm`}>
      <div className="flex flex-col items-center">
        {icon}
        <h2 className="mt-4 text-3xl font-bold">{value}</h2>
        <p className="mt-2 text-sm text-gray-500">{title}</p>
      </div>
    </div>
  );
}

export default function Dashboard() {
  return (
    <Layout>
      <h1 className="mb-6 text-2xl font-semibold">Dashboard</h1>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 cursor-pointer">
        <DashboardCard icon={<File className="h-8 w-8 text-yellow-500" />} title="Posts" value="670" color="bg-white" />
        <DashboardCard icon={<Star className="h-8 w-8 text-gray-400" />} title="Styles" value="" color="bg-white" />
        <DashboardCard icon={<Info className="h-8 w-8 text-cyan-500" />} title="Topics" value="7" color="bg-white" />
        <DashboardCard icon={<Pencil className="h-8 w-8 text-green-500" />} title="Writers" value="18" color="bg-white" />
        <DashboardCard icon={<Book className="h-8 w-8 text-gray-700" />} title="Books" value="16" color="bg-white" />
        <DashboardCard icon={<LanguagesIcon className="h-8 w-8 text-yellow-500" />} title="Languages" value="5" color="bg-white" />
        <DashboardCard icon={<Book className="h-8 w-8 text-blue-500" />} title="Unicode Books" value="2" color="bg-white" />
        <DashboardCard icon={<FileText className="h-8 w-8 text-purple-500" />} title="Unicode Books Contents" value="0" color="bg-white" />
        <DashboardCard icon={<Users className="h-8 w-8 text-gray-500" />} title="Admins" value="" color="bg-white" />
      </div>
    </Layout>
  );
}
