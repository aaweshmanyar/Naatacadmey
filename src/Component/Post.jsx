import React from "react"
import { useState, useEffect } from "react"
import { Menu, Search } from "lucide-react"
import Layout from "./Layout"

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true)

  useEffect(() => {
    const isMobile = window.innerWidth <= 768
    setSidebarOpen(!isMobile)
  }, [])

  const posts = [
    { id: 1, published: true, title: "وہ شیخ محبت جہاں مصطفی پہ", writer: "انیس رضا", language: "اردو", topic: "حمد", color: "bg-amber-500" },
    { id: 2, published: true, title: "وہ شیخ محبت جہاں مصطفی پہ", writer: "انیس رضا", language: "اردو", topic: "نعت", color: "bg-green-500" },
    { id: 3, published: false, title: "وہ شیخ محبت جہاں مصطفی پہ", writer: "انیس رضا", language: "اردو", topic: "مفید", color: "bg-orange-500" },
    { id: 4, published: true, title: "وہ شیخ محبت جہاں مصطفی پہ", writer: "انیس رضا", language: "اردو", topic: "سلام", color: "bg-blue-500" },
    { id: 5, published: true, title: "وہ شیخ محبت جہاں مصطفی پہ", writer: "انیس رضا", language: "اردو", topic: "مناجات", color: "bg-cyan-500" },
    { id: 6, published: true, title: "وہ شیخ محبت جہاں مصطفی پہ", writer: "انیس رضا", language: "اردو", topic: "تضمین", color: "bg-teal-500" },
    { id: 7, published: true, title: "وہ شیخ محبت جہاں مصطفی پہ", writer: "انیس رضا", language: "اردو", topic: "منظوم", color: "bg-pink-500" },
    { id: 8, published: true, title: "وہ شیخ محبت جہاں مصطفی پہ", writer: "انیس رضا", language: "اردو", topic: "صوفیانہ", color: "bg-orange-600" },
    { id: 9, published: true, title: "وہ شیخ محبت جہاں مصطفی پہ", writer: "انیس رضا", language: "اردو", topic: "انتخاب", color: "bg-purple-500" },
    { id: 10, published: true, title: "وہ شیخ محبت جہاں مصطفی پہ", writer: "انیس رضا", language: "اردو", topic: "کلام", color: "bg-slate-500" },
    { id: 11, published: true, title: "وہ شیخ محبت جہاں مصطفی پہ", writer: "انیس رضا", language: "اردو", topic: "درود", color: "bg-gray-200 text-gray-700" },
  ]

  return (
    <Layout>
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header */}
      {/* <header className="bg-white shadow-sm z-10 w-full">
        <div className="px-4 sm:px-6 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <button onClick={() => setSidebarOpen(!sidebarOpen)} className="mr-4 text-gray-500 focus:outline-none">
              <Menu size={24} />
            </button>
            <div>
              <h1 className="text-xl font-semibold text-gray-900">Naat Academy Data</h1>
              <p className="text-sm text-gray-500">Kalam and articles list view Same</p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="text-right mr-4">
              <div className="text-sm font-medium text-gray-900">Admin User</div>
              <div className="text-xs text-gray-500">admin@example.com</div>
            </div>
            <div className="h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-medium">
              A
            </div>
          </div>
        </div>
      </header> */}

      {/* Content */}
      <main className="flex-1 overflow-auto p-4 sm:p-6">
        <div className="flex justify-between mb-6">
          <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md text-sm flex items-center gap-2">
            Create Post <span className="text-xl">+</span>
          </button>
          <button className="bg-red-100 text-red-500 border border-red-200 hover:bg-red-200 hover:text-red-600 px-4 py-2 rounded-md text-sm">
            Trash Box
          </button>
        </div>

        {/* Table */}
        <div className="bg-white shadow rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  {["SR #", "PUBLISHED", "TITLE", "WRITER", "LANGUAGE", "TOPIC", "CREATED ON", "Action"].map((heading) => (
                    <th key={heading} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      <div className="flex items-center">
                        {heading}
                        {heading !== "Action" && <Search size={14} className="ml-1 text-gray-400" />}
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {posts.map((post, index) => (
                  <tr key={post.id} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">{post.id}</td>
                    <td className="px-6 py-4">
                      <input type="checkbox" checked={post.published} readOnly className="w-4 h-4" />
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900 text-right" dir="rtl">{post.title}</td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      <span className="px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text-gray-800">
                        {post.writer}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500 text-right" dir="rtl">{post.language}</td>
                    <td className="px-6 py-4">
                      <span className={`px-4 py-1 inline-flex text-xs leading-5 font-semibold rounded-full text-white ${post.color}`}>
                        {post.topic}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">10 May 2025 - 11:12 pm</td>
                    <td className="px-6 py-4 text-sm font-medium space-x-2">
                      <button className="px-3 py-1 bg-amber-100 text-amber-600 rounded-md hover:bg-amber-200">Edit</button>
                      <button className="px-3 py-1 bg-red-100 text-red-600 rounded-md hover:bg-red-200">Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
    </Layout>
  )
}
