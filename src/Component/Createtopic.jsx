import React, { useState, useRef } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Link from "@tiptap/extension-link";
import Image from "@tiptap/extension-image";
import Color from "@tiptap/extension-color";
import TextStyle from "@tiptap/extension-text-style";
import TextAlign from "@tiptap/extension-text-align";
import Layout from "./Layout";

// TipTap Menu Bar Component
const MenuBar = ({ editor }) => {
  if (!editor) {
    return null;
  }

  return (
    <div className="menu-bar" style={{ marginBottom: "10px", display: "flex", flexWrap: "wrap", gap: "5px" }}>
      {/* Text Formatting */}
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={editor.isActive("bold") ? "is-active" : ""}
        style={{
          padding: "5px 10px",
          background: editor.isActive("bold") ? "#ddd" : "#fff",
          border: "1px solid #ccc",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Bold
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={editor.isActive("italic") ? "is-active" : ""}
        style={{
          padding: "5px 10px",
          background: editor.isActive("italic") ? "#ddd" : "#fff",
          border: "1px solid #ccc",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Italic
      </button>
      <button
        onClick={() => editor.chain().focus().toggleUnderline().run()}
        className={editor.isActive("underline") ? "is-active" : ""}
        style={{
          padding: "5px 10px",
          background: editor.isActive("underline") ? "#ddd" : "#fff",
          border: "1px solid #ccc",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Underline
      </button>
      <button
        onClick={() => editor.chain().focus().toggleStrike().run()}
        className={editor.isActive("strike") ? "is-active" : ""}
        style={{
          padding: "5px 10px",
          background: editor.isActive("strike") ? "#ddd" : "#fff",
          border: "1px solid #ccc",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Strike
      </button>

      {/* Headings */}
      <select
        onChange={(e) => {
          const level = parseInt(e.target.value);
          if (level === 0) {
            editor.chain().focus().setParagraph().run();
          } else {
            editor.chain().focus().toggleHeading({ level }).run();
          }
        }}
        style={{ padding: "5px", border: "1px solid #ccc", borderRadius: "4px" }}
      >
        <option value="0">Paragraph</option>
        <option value="1">Heading 1</option>
        <option value="2">Heading 2</option>
        <option value="3">Heading 3</option>
        <option value="4">Heading 4</option>
        <option value="5">Heading 5</option>
        <option value="6">Heading 6</option>
      </select>

      {/* Text Alignment */}
      <button
        onClick={() => editor.chain().focus().setTextAlign("left").run()}
        className={editor.isActive({ textAlign: "left" }) ? "is-active" : ""}
        style={{
          padding: "5px 10px",
          background: editor.isActive({ textAlign: "left" }) ? "#ddd" : "#fff",
          border: "1px solid #ccc",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Left
      </button>
      <button
        onClick={() => editor.chain().focus().setTextAlign("center").run()}
        className={editor.isActive({ textAlign: "center" }) ? "is-active" : ""}
        style={{
          padding: "5px 10px",
          background: editor.isActive({ textAlign: "center" }) ? "#ddd" : "#fff",
          border: "1px solid #ccc",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Center
      </button>
      <button
        onClick={() => editor.chain().focus().setTextAlign("right").run()}
        className={editor.isActive({ textAlign: "right" }) ? "is-active" : ""}
        style={{
          padding: "5px 10px",
          background: editor.isActive({ textAlign: "right" }) ? "#ddd" : "#fff",
          border: "1px solid #ccc",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Right
      </button>
      <button
        onClick={() => editor.chain().focus().setTextAlign("justify").run()}
        className={editor.isActive({ textAlign: "justify" }) ? "is-active" : ""}
        style={{
          padding: "5px 10px",
          background: editor.isActive({ textAlign: "justify" }) ? "#ddd" : "#fff",
          border: "1px solid #ccc",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Justify
      </button>

      {/* Lists */}
      <button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={editor.isActive("bulletList") ? "is-active" : ""}
        style={{
          padding: "5px 10px",
          background: editor.isActive("bulletList") ? "#ddd" : "#fff",
          border: "1px solid #ccc",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Bullet List
      </button>
      <button
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={editor.isActive("orderedList") ? "is-active" : ""}
        style={{
          padding: "5px 10px",
          background: editor.isActive("orderedList") ? "#ddd" : "#fff",
          border: "1px solid #ccc",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Ordered List
      </button>

      {/* Text Color */}
      <input
        type="color"
        onInput={(e) => editor.chain().focus().setColor(e.target.value).run()}
        value={editor.getAttributes("textStyle").color || "#000000"}
        style={{ width: "30px", height: "30px", cursor: "pointer" }}
        title="Text Color"
      />

      {/* Links */}
      <button
        onClick={() => {
          const previousUrl = editor.getAttributes("link").href;
          const url = window.prompt("URL", previousUrl);

          if (url === null) {
            return;
          }

          if (url === "") {
            editor.chain().focus().extendMarkRange("link").unsetLink().run();
            return;
          }

          editor.chain().focus().extendMarkRange("link").setLink({ href: url }).run();
        }}
        className={editor.isActive("link") ? "is-active" : ""}
        style={{
          padding: "5px 10px",
          background: editor.isActive("link") ? "#ddd" : "#fff",
          border: "1px solid #ccc",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Link
      </button>

      {/* Images */}
      <button
        onClick={() => {
          const url = window.prompt("Enter the URL of the image:");

          if (url) {
            editor.chain().focus().setImage({ src: url }).run();
          }
        }}
        style={{
          padding: "5px 10px",
          background: "#fff",
          border: "1px solid #ccc",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Image
      </button>

      {/* Other */}
      <button
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        className={editor.isActive("blockquote") ? "is-active" : ""}
        style={{
          padding: "5px 10px",
          background: editor.isActive("blockquote") ? "#ddd" : "#fff",
          border: "1px solid #ccc",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Blockquote
      </button>
      <button
        onClick={() => editor.chain().focus().setHorizontalRule().run()}
        style={{
          padding: "5px 10px",
          background: "#fff",
          border: "1px solid #ccc",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Horizontal Rule
      </button>
      <button
        onClick={() => editor.chain().focus().undo().run()}
        style={{
          padding: "5px 10px",
          background: "#fff",
          border: "1px solid #ccc",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Undo
      </button>
      <button
        onClick={() => editor.chain().focus().redo().run()}
        style={{
          padding: "5px 10px",
          background: "#fff",
          border: "1px solid #ccc",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Redo
      </button>
    </div>
  );
};

export default function TopicManager() {
  const editorRef = useRef(null);
  const [topics, setTopics] = useState([]);
  const [topicName, setTopicName] = useState("سیرت رسول");
  const [topicNumber, setTopicNumber] = useState(1);
  const [selectedColor, setSelectedColor] = useState("#00A651");

  // TipTap Editor
  const editor = useEditor({
    extensions: [
      StarterKit,
      Link.configure({
        openOnClick: false,
      }),
      Image,
      TextStyle,
      Color,
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
    ],
    content: "سیرت رسول سے مراد رسول اللہ صلی اللہ علیہ وسلم کی مبارک زندگی، آپ کی اخلاق حسنہ، عادات طیبہ، اور آپ کی اسوہ حسنہ کا بیان ہے۔ مسلمانوں کے لیے آپ ایک اہم موضوع کی حیثیت سے اس زندگی کو آپ کے نقش قدم پر چلنے کی کوشش کرتے ہیں۔",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTopic = {
      id: topics.length + 1,
      name: topicName,
      number: topicNumber,
      about: editor.getHTML(),
      color: selectedColor,
      createdOn: new Date().toLocaleDateString("en-GB"),
    };
    setTopics([...topics, newTopic]);
    setTopicName("");
    setTopicNumber(topicNumber + 1);
    editor.commands.setContent("");
  };

  const handleEdit = (id) => {
    const topic = topics.find((t) => t.id === id);
    if (topic) {
      setTopicName(topic.name);
      setTopicNumber(topic.number);
      editor.commands.setContent(topic.about);
      setSelectedColor(topic.color);
      setTopics(topics.filter((t) => t.id !== id));
    }
  };

  const handleDelete = (id) => {
    setTopics(topics.filter((t) => t.id !== id));
  };

  return (
    <Layout>
      <div style={{ padding: "24px", fontFamily: "sans-serif" }}>
        <div
          style={{
            backgroundColor: "#fff",
            padding: "24px",
            borderRadius: "8px",
            border: "1px solid #ddd",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "16px",
            }}
          >
            <h2 style={{ fontSize: "20px", fontWeight: "bold" }}>
              Create Topics
            </h2>
            <div style={{ fontSize: "14px", color: "#888" }}>
              {new Date().toLocaleString()}
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
                gap: "16px",
                marginBottom: "24px",
              }}
            >
              <div>
                <label
                  style={{
                    display: "block",
                    marginBottom: "8px",
                    fontSize: "14px",
                    fontWeight: "500",
                  }}
                >
                  Topic Name - عنوان یا نام
                </label>
                <input
                  value={topicName}
                  onChange={(e) => setTopicName(e.target.value)}
                  className="gulzartext"
                  style={{
                    width: "100%",
                    padding: "8px",
                    borderRadius: "4px",
                    border: "1px solid #ccc",
                  }}
                />
              </div>

              <div>
                <label
                  style={{
                    display: "block",
                    marginBottom: "8px",
                    fontSize: "14px",
                    fontWeight: "500",
                  }}
                >
                  Numbering
                </label>
                <input
                  type="number"
                  value={topicNumber}
                  onChange={(e) => setTopicNumber(Number(e.target.value))}
                  style={{
                    width: "100%",
                    padding: "8px",
                    borderRadius: "4px",
                    border: "1px solid #ccc",
                  }}
                />
              </div>

              <div>
                <label
                  style={{
                    display: "block",
                    marginBottom: "8px",
                    fontSize: "14px",
                    fontWeight: "500",
                  }}
                >
                  Select Colour
                </label>
                <input
                  type="color"
                  value={selectedColor}
                  onChange={(e) => setSelectedColor(e.target.value)}
                  style={{
                    width: "100%",
                    height: "38px",
                    border: "none",
                    cursor: "pointer",
                  }}
                />
              </div>
            </div>

            <div style={{ marginBottom: "24px" }}>
              <label
                className="gulzartext"
                style={{
                  display: "block",
                  marginBottom: "8px",
                  fontSize: "14px",
                  fontWeight: "500",
                }}
              >
                About Topic - عنوان کا تعارف
              </label>
              <div
                style={{
                  backgroundColor: "#fff",
                  borderRadius: "6px",
                  border: "1px solid #ccc",
                  minHeight: "300px",
                }}
              >
                <MenuBar editor={editor} />
                <EditorContent
                  editor={editor}
                  className="gulzartext"
                  style={{ padding: "10px", minHeight: "250px" }}
                />
              </div>
            </div>

            <div style={{ textAlign: "center", marginBottom: "32px" }}>
              <button
                type="submit"
                style={{
                  backgroundColor: "#007BFF",
                  color: "#fff",
                  padding: "10px 24px",
                  borderRadius: "6px",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Create Topic
              </button>
            </div>
          </form>
        </div>

        {topics.length > 0 && (
          <div
            style={{
              marginTop: "40px",
              backgroundColor: "#fff",
              border: "1px solid #ddd",
              borderRadius: "8px",
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 2fr 3fr 2fr 2fr",
                backgroundColor: "#f9f9f9",
                padding: "12px",
                fontWeight: "600",
                fontSize: "14px",
                borderBottom: "1px solid #ddd",
              }}
            >
              <div>SR #</div>
              <div className="gulzartext">Topic name - عنوان یا نام</div>
              <div className="gulzartext">About Topic - عنوان کا تعارف</div>
              <div>Created On</div>
              <div>Action</div>
            </div>
            {topics.map((topic) => (
              <div
                key={topic.id}
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 2fr 3fr 2fr 2fr",
                  padding: "12px",
                  alignItems: "center",
                  fontSize: "14px",
                  borderTop: "1px solid #eee",
                }}
              >
                <div className="gulzartext">{topic.id}</div>
                <div className="gulzartext">{topic.name}</div>
                <div
                  className="gulzartext"
                  dangerouslySetInnerHTML={{ __html: topic.about }}
                />
                <div className="gulzartext">{topic.createdOn}</div>
                <div style={{ display: "flex", gap: "8px" }}>
                  <button
                    onClick={() => handleEdit(topic.id)}
                    style={{
                      backgroundColor: "#FFD700",
                      color: "#000",
                      padding: "6px 12px",
                      fontSize: "12px",
                      borderRadius: "4px",
                      border: "none",
                      cursor: "pointer",
                    }}
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(topic.id)}
                    style={{
                      backgroundColor: "#FFCCCC",
                      color: "#cc0000",
                      padding: "6px 12px",
                      fontSize: "12px",
                      borderRadius: "4px",
                      border: "none",
                      cursor: "pointer",
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
}