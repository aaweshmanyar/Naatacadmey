import React, { useState, useRef } from "react";
import Layout from "./Layout";

export default function CreateTextBook() {
  const [thumbnail, setThumbnail] = useState(null);
  const fileInputRef = useRef(null);
  const [books, setBooks] = useState([
    {
      id: 1,
      name: "گلزار بخشش",
      writer: "انیس",
      year: "1890",
      type: "Text",
      date: "10 May 2025 • 11:12 pm",
    },
    {
      id: 2,
      name: "گلزار بخشش",
      writer: "انیس",
      year: "1890",
      type: "PDF",
      date: "10 May 2025 • 11:12 pm",
    },
    {
      id: 3,
      name: "گلزار بخشش",
      writer: "انیس",
      year: "1890",
      type: "Text",
      date: "10 May 2025 • 11:12 pm",
    },
    {
      id: 4,
      name: "گلزار بخشش",
      writer: "انیس",
      year: "1890",
      type: "PDF",
      date: "10 May 2025 • 11:12 pm",
    },
    {
      id: 5,
      name: "گلزار بخشش",
      writer: "انیس",
      year: "1890",
      type: "Text",
      date: "10 May 2025 • 11:12 pm",
    },
  ]);

  const [form, setForm] = useState({
    name: "",
    writer: "",
    language: "",
    topic: "",
    tags: [],
    category: "",
    description: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setThumbnail(URL.createObjectURL(file));
    }
  };

  const handleBrowseClick = () => {
    fileInputRef.current.click();
  };

  return (
    <Layout>
      <div className="space-y-8">
        {/* Book Form */}
        <div className="bg-white rounded-md shadow-sm border border-gray-200 mb-6">
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full">
              Create Text Book
            </button>
            <div className="text-sm text-gray-500">10 May 2025 • 11:12 pm</div>
          </div>

          <div className="p-6 grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column: Form */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <label className="block mb-2 text-sm font-medium">
                  Book Name - کتاب کا نام
                </label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleInputChange}
                  className="w-full border rounded px-3 py-2 text-right"
                  placeholder="امام احمد رضا"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block mb-2 text-sm font-medium">
                    Writer - شاعر
                  </label>
                  <select
                    name="writer"
                    value={form.writer}
                    onChange={handleInputChange}
                    className="w-full border rounded px-3 py-2"
                  >
                    <option value="">Choose Writer</option>
                    <option value="اعلی حضرت">اعلی حضرت</option>
                  </select>
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium">
                    Language - زبان
                  </label>
                  <select
                    name="language"
                    value={form.language}
                    onChange={handleInputChange}
                    className="w-full border rounded px-3 py-2"
                  >
                    <option value="">Choose Language</option>
                    <option value="اردو">اردو</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block mb-2 text-sm font-medium">
                    Topic - عنوانات
                  </label>
                  <select
                    name="topic"
                    value={form.topic}
                    onChange={handleInputChange}
                    className="w-full border rounded px-3 py-2"
                  >
                    <option value="">Choose Topic</option>
                    <option value="حضرت انوکھے صدیق">حضرت انوکھے صدیق</option>
                  </select>
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium">
                    Tags - ٹیگز
                  </label>
                  <div className="flex items-center gap-2 border rounded-md p-2">
                    <input
                      className="flex-1 border-0 outline-none focus:ring-0"
                      placeholder="Add tags..."
                    />
                    {["مدینہ", "انیس", "حج"].map((tag, i) => (
                      <span
                        key={i}
                        className="bg-gray-100 text-gray-800 px-2 py-1 text-sm rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium">
                  Category - صنف
                </label>
                <select
                  name="category"
                  value={form.category}
                  onChange={handleInputChange}
                  className="w-full border rounded px-3 py-2"
                >
                  <option value="">Choose Category</option>
                  <option value="نعت">نعت</option>
                </select>
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium">
                  About Book - کتاب کا تعارف
                </label>
                <div className="border rounded-md">
                  <div className="p-2 border-b text-xs text-gray-500">
                    Formatting Toolbar Placeholder
                  </div>
                  <textarea
                    name="description"
                    value={form.description}
                    onChange={handleInputChange}
                    className="w-full min-h-[150px] p-3 text-right border-0 focus:ring-0"
                    placeholder="کتاب کا تعارف یہاں لکھیں..."
                  />
                </div>
              </div>
            </div>

            {/* Right Column: Thumbnail */}
            <div className="lg:col-span-1">
              <div className="border rounded-md p-4 text-center">
                <h3 className="font-medium mb-4">Thumbnail</h3>
                <div className="mb-4 flex justify-center">
                  <img
                    src={
                      thumbnail ||
                      "https://via.placeholder.com/150x200?text=Preview"
                    }
                    alt="Book thumbnail"
                    className="rounded-md border w-[150px] h-[200px] object-cover"
                  />
                </div>
                <p className="text-sm text-gray-500 mb-4">
                  Drop your image here or browse
                </p>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  ref={fileInputRef}
                  className="hidden"
                />
                <button
                  type="button"
                  onClick={handleBrowseClick}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
                >
                  Browse
                </button>
              </div>
            </div>
          </div>

          <div className="p-4 border-t border-gray-200 flex justify-center">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-2 rounded">
              Create Book
            </button>
          </div>
        </div>

        {/* Book Table */}
        <div className="bg-white rounded-md shadow-sm border border-gray-200 overflow-x-auto">
          <table className="min-w-full table-auto text-sm text-left">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 w-16">SR #</th>
                <th className="px-4 py-2">Book Name - کتاب کا نام</th>
                <th className="px-4 py-2">Writer Name - شاعر کا نام</th>
                <th className="px-4 py-2">Writer Year - شاعر کی عمر</th>
                <th className="px-4 py-2">Attachment</th>
                <th className="px-4 py-2">Created On</th>
                <th className="px-4 py-2 text-right">Action</th>
              </tr>
            </thead>
            <tbody>
              {books.map((book) => (
                <tr key={book.id} className="border-t">
                  <td className="px-4 py-2">{book.id}</td>
                  <td className="px-4 py-2 text-right">{book.name}</td>
                  <td className="px-4 py-2 text-right">{book.writer}</td>
                  <td className="px-4 py-2">{book.year}</td>
                  <td className="px-4 py-2">{book.type}</td>
                  <td className="px-4 py-2">{book.date}</td>
                  <td className="px-4 py-2 text-right">
                    <div className="flex justify-end gap-2">
                      <button className="bg-yellow-500 hover:bg-yellow-600 text-white text-sm px-4 py-1 rounded-full">
                        Edit
                      </button>
                      <button className="bg-red-500 hover:bg-red-600 text-white text-sm px-4 py-1 rounded-full">
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
}
