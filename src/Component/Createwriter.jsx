
import React, { useState } from "react"
import { format } from "date-fns"
import {
  Bold,
  Italic,
  Underline,
  Strikethrough,
  List,
  ListOrdered,
  AlignLeft,
  AlignCenter,
  AlignRight,
  Link,
  ImageIcon,
  Undo,
  Redo,
} from "lucide-react"
import Layout from "./Layout"

export default function CreateWriter() {
  const [writers, setWriters] = useState([
    { id: 1, name: "امام احمد رضا", year: "1890" },
    { id: 2, name: "امام احمد رضا", year: "1890" },
    { id: 3, name: "امام احمد رضا", year: "1890" },
    { id: 4, name: "امام احمد رضا", year: "1890" },
    { id: 5, name: "امام احمد رضا", year: "1890" },
    { id: 6, name: "امام احمد رضا", year: "1890" },
  ])

  const currentDate = new Date()
  const formattedDate = format(currentDate, "dd MMM yyyy - hh:mm a")

  return (
    <Layout>
    <div className="container py-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Create Writer</h1>
        <div className="text-sm text-gray-500">{formattedDate}</div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white p-6 rounded-md border">
            <h2 className="text-lg font-medium mb-4">Create Writer - شاعر کا نام</h2>
            <input
              type="text"
              placeholder="امام احمد رضا"
              className="w-full mb-6 p-2 border rounded text-right"
              dir="rtl"
            />

            <h2 className="text-lg font-medium mb-4">Writer Year - شاعری کی صدی</h2>
            <input
              type="text"
              placeholder="1890"
              className="w-full mb-6 p-2 border rounded"
            />

            <h2 className="text-lg font-medium mb-4">About writer - شاعر کا تعارف</h2>
            <div className="border rounded-md mb-4">
              <div className="flex flex-wrap gap-1 p-2 border-b">
                {[Bold, Italic, Underline, Strikethrough, List, ListOrdered, AlignLeft, AlignCenter, AlignRight, Link, ImageIcon, Undo, Redo].map((Icon, index) => (
                  <button key={index} className="h-8 w-8 flex items-center justify-center border rounded hover:bg-gray-100">
                    <Icon size={16} />
                  </button>
                ))}
              </div>
              <textarea
                dir="rtl"
                className="w-full p-2 min-h-[150px] text-right"
                placeholder="شاعر وہ شخص ہوتا ہے جو اپنے احساسات، خیالات اور مشاہدات کو خوبصورت اور مؤثر انداز میں الفاظ کی ذریعے بیان کرتا ہے۔ وہ زبان کی تخلیقی استعمال سے نظمیں، غزلیں، اور دیگر شعری اصناف تخلیق کرتا ہے۔ وہ میں وزن، قافیہ اور موسیقیت کا خیال رکھتا ہاتا ہے۔ ایک اچھا شاعر اپنی تخیل کی قوت سے دل و دماغ پر گہرا اثر چھوڑتا ہے۔"
              />
            </div>

            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded">
              Create Style
            </button>
          </div>

          <div className="bg-white rounded-md border overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-gray-100 text-left">
                <tr>
                  <th className="p-2 w-16">SR #</th>
                  <th className="p-2">Create Writer - شاعر کا نام</th>
                  <th className="p-2">Writer Year - شاعری کی صدی</th>
                  <th className="p-2">Created On</th>
                  <th className="p-2">Action</th>
                </tr>
              </thead>
              <tbody>
                {writers.map((writer) => (
                  <tr key={writer.id} className="border-t">
                    <td className="p-2">{writer.id}</td>
                    <td className="p-2 text-right">{writer.name}</td>
                    <td className="p-2">{writer.year}</td>
                    <td className="p-2">10 May 2025 - 11:12 pm</td>
                    <td className="p-2">
                      <div className="flex gap-2">
                        <button className="px-2 py-1 text-sm rounded bg-yellow-400 hover:bg-yellow-500 text-black">
                          Edit
                        </button>
                        <button className="px-2 py-1 text-sm rounded bg-red-400 hover:bg-red-500 text-white">
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

        <div className="bg-white p-6 rounded-md border h-fit">
          <h2 className="text-lg font-medium mb-4 text-center">Thumbnail</h2>
          <div className="border rounded-md bg-gray-100 h-28 flex items-center justify-center mb-4">
            <div className="text-center">
              <p className="text-sm text-gray-500 mb-2">Drop your image here or browse</p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1 rounded">
                Browse
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </Layout>
  )
}
