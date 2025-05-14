import React, { useState } from "react";
import { X, ImageIcon } from "lucide-react";
import Layout from "./Layout";

export function CreateLyrics() {
  const [selectedLines, setSelectedLines] = useState("2");

  return (
    <Layout>
      <div className="space-y-6 p-4">
        <div className="flex items-center gap-4">
          <button className="bg-blue-500 hover:bg-blue-600 text-white rounded-full px-6 py-2">
            Create Kalam Post
          </button>
          <button className="border rounded-full px-6 py-2">
            Create Article Post
          </button>
          <div className="ml-auto text-sm text-gray-500">
            10 May 2024 - 11:12 pm
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 space-y-6">
            {[
              {
                label: "Enter post title",
                placeholder: "Enter post title",
                helper: "وہ شعر محبت جہاں مصطفی میں",
              },
              {
                label: "/Slug",
                placeholder: "slug",
                helper: "Wo-shehre-mohabbat-jahan-mustafa-hain",
              },
            ].map((field, idx) => (
              <div className="space-y-4" key={idx}>
                <div className="flex justify-between">
                  <label className="text-sm font-medium">{field.label}</label>
                  <span className="text-sm text-gray-500 text-right">
                    {field.helper}
                  </span>
                </div>
                <input
                  className="w-full border rounded px-3 py-2"
                  placeholder={field.placeholder}
                />
              </div>
            ))}

            <div className="space-y-4">
              <div className="flex justify-between">
                <label className="text-sm font-medium">Kalam Description</label>
                <span className="text-sm text-gray-500 text-right">
                  وہ شعر محبت جہاں مصطفی میں
                </span>
              </div>
              <textarea
                className="w-full border rounded px-3 py-2 min-h-[100px]"
                placeholder="Enter description"
              />
            </div>

            <div className="space-y-4">
              <label className="text-sm font-medium">Post line setting</label>
              <div className="flex flex-wrap gap-4">
                {[2, 3, 4, 5, 6].map((lines) => (
                  <label
                    key={lines}
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <input
                      type="radio"
                      name="lines"
                      value={lines}
                      checked={selectedLines === lines.toString()}
                      onChange={() => setSelectedLines(lines.toString())}
                    />
                    <span>{lines} Lines</span>
                    <div className="w-12">
                      {Array(lines)
                        .fill(0)
                        .map((_, i) => (
                          <div key={i} className="h-0.5 bg-gray-400 my-0.5" />
                        ))}
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {["Urdu", "Roman", "English", "Hindi", "Arabic"].map(
              (lang, idx) => (
                <div className="space-y-2" key={idx}>
                  <label className="text-sm font-medium">
                    Post Language {idx + 1} - {lang}
                  </label>
                  <textarea
                    className="w-full border rounded px-3 py-2 h-32"
                    placeholder="Enter text"
                  />
                </div>
              )
            )}

            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded">
              Create Post
            </button>
          </div>

          <div className="space-y-6">
            {[
              {
                label: "Style بحر",
                placeholder: "Choose Style",
                items: ["Style 1", "Style 2"],
                helper: "بحر",
              },
              {
                label: "Book کتاب",
                placeholder: "حقائق بخشش",
                items: ["حقائق بخشش", "Book 2"],
                helper: "کتاب",
              },
              {
                label: "Language زبان",
                placeholder: "اردو",
                items: ["اردو", "English"],
                helper: "زبان",
              },
              {
                label: "Category - صنف",
                placeholder: "نعت",
                items: ["نعت", "Other"],
                helper: "صنف",
              },
              {
                label: "Topic - عنوانات",
                placeholder: "حضرت آمنہ صدیقہ",
                items: ["حضرت آمنہ صدیقہ", "Topic 2"],
                helper: "عنوانات",
              },
              {
                label: "Writer - شاعر",
                placeholder: "اقبال حضرت",
                items: ["اقبال حضرت", "Writer 2"],
                helper: "شاعر",
              },
            ].map((field, idx) => (
              <div className="space-y-2" key={idx}>
                <div className="flex justify-between">
                  <label className="text-sm font-medium">{field.label}</label>
                  <span className="text-sm">{field.helper}</span>
                </div>
                <select className="w-full border rounded px-3 py-2">
                  <option disabled selected>
                    {field.placeholder}
                  </option>
                  {field.items.map((item, i) => (
                    <option key={i} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>
            ))}

            <div className="space-y-2">
              <div className="flex justify-between">
                <label className="text-sm font-medium">Tags - لیبل</label>
                <span className="text-sm">لیبل</span>
              </div>
              <div className="flex flex-wrap gap-2 mb-2">
                {["مدینہ", "نبی", "حج"].map((tag, idx) => (
                  <span
                    key={idx}
                    className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full flex items-center gap-1"
                  >
                    {tag} <X className="h-3 w-3 cursor-pointer" />
                  </span>
                ))}
              </div>
              <input
                className="w-full border rounded px-3 py-2"
                placeholder="Add tags"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Thumbnail</label>
              <div className="border-2 border-dashed rounded-md p-6 flex flex-col items-center justify-center text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-md flex items-center justify-center mb-2">
                  <ImageIcon className="h-8 w-8 text-gray-400" />
                </div>
                <p className="text-sm text-gray-500 mb-2">
                  Drop your image here or browse
                </p>
                <button className="border rounded px-4 py-1 bg-blue-600 text-white hover:bg-blue-700 text-sm">
                  Browse
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
