import React from "react";
import { useState } from "react";
import Layout from "./Layout";
import { useNavigate } from "react-router-dom";

export default function BlogPostCreation() {
  const [selectedPostType, setSelectedPostType] = useState("normal");
  const navigate = useNavigate();
  const handleKalamPostClick = () => {
    navigate("/id"); // Replace with your desired path
  };
  return (
    <Layout>
      <div className="p-6 max-w-5xl mx-auto">
        {/* Top Buttons */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex gap-2">
            <button
              className="border border-gray-300 rounded-md px-4 py-2 cursor-pointer"
              onClick={handleKalamPostClick}
            >
              Create Kalam Post
            </button>
            <button className="bg-blue-500 hover:bg-blue-600 text-white rounded-md px-4 py-2">
              Create Article Post
            </button>
          </div>
          <div className="text-sm text-gray-500">10 May 2025 - 11:12 pm</div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Form Section */}
          <div className="flex-1">
            <div className="mb-4">
              <label className="block mb-1 font-medium">Enter post title</label>
              <input
                type="text"
                placeholder="وہ نعت محبت جہاں مصطفی بنی"
                className="w-full border rounded-md p-2"
              />
            </div>

            <div className="mb-4">
              <label className="block mb-1 font-medium">/Slug</label>
              <input
                type="text"
                placeholder="Wo-shehre-mohabbat-jahan-mustafa-hain"
                className="w-full border rounded-md p-2"
              />
            </div>

            <div className="mb-4">
              <label className="block mb-1 font-medium">
                Kalam Description
              </label>
              <textarea
                placeholder="وہ شہر محبت جہاں مصطفی بنی"
                className="w-full border rounded-md p-2 h-32"
              />
            </div>

            <div className="mb-4">
              <label className="block mb-1 font-medium">
                Blog Posting Style
              </label>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { value: "normal", label: "Normal Post" },
                  { value: "only-image", label: "Only Image" },
                  { value: "title-image", label: "Title + Image" },
                  { value: "title-desc-image", label: "Title + Desc + Image" },
                  {
                    value: "title-english-image",
                    label: "Title English + Image",
                  },
                  { value: "quotes", label: "Quotes" },
                ].map((item) => (
                  <label
                    key={item.value}
                    className="flex items-center space-x-2"
                  >
                    <input
                      type="radio"
                      name="postType"
                      value={item.value}
                      checked={selectedPostType === item.value}
                      onChange={() => setSelectedPostType(item.value)}
                    />
                    <span>{item.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Content Textarea */}
            <div className="mb-4">
              <label className="block mb-1 font-medium">Content</label>
              <textarea
                className="w-full border rounded-md p-4 min-h-[200px]"
                placeholder="Enter text..."
              />
            </div>

            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md mt-4">
              Create Blog Post
            </button>
          </div>

          {/* Right Section */}
          <div className="w-full lg:w-80">
            {/* Thumbnail */}
            <div className="mb-6">
              <h3 className="font-medium mb-2">Thumbnail</h3>
              <div className="border rounded-md p-4 text-center">
                <p className="text-sm text-gray-500 mb-2">
                  Drop your image here or browse
                </p>
                <div className="bg-gray-100 h-32 flex items-center justify-center mb-4 rounded-md text-gray-400">
                  [ Image Preview ]
                </div>
                <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                  Browse
                </button>
              </div>
            </div>

            {/* Select Dropdowns */}
            {[
              { label: "Book كتاب", options: ["حقائق بخشش", "نعت"] },
              { label: "Language زبان", options: ["اردو", "English"] },
              { label: "Category - صنف", options: ["نعت"] },
              { label: "Topic - مواضيع", options: ["حضرت اویس قرنی"] },
              { label: "Writer - شاعر", options: ["اعلی حضرات"] },
              { label: "Tags - ٹیگز", options: ["مدینہ"] },
            ].map((item, i) => (
              <div key={i} className="mb-4">
                <label className="block mb-1 font-medium">{item.label}</label>
                <select className="w-full border rounded-md p-2">
                  <option value="">Choose</option>
                  {item.options.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>
            ))}

            {/* Tags */}
            {/* <div className="mb-6">
            <label className="block mb-1 font-medium">Tags - ٹیگز</label>
            <div className="flex flex-wrap gap-2 mt-1">
              {["حج", "اویس", "مدینہ"].map(tag => (
                <span
                  key={tag}
                  className="border text-sm rounded-full px-3 py-1 text-gray-700"
                >
                  {tag}
                </span>
              ))}
              <button className="text-blue-500 text-sm">+ Add tags...</button>
            </div>
          </div> */}
          </div>
        </div>
      </div>
    </Layout>
  );
}
