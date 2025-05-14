import React, { useState } from "react";
import Layout from "./Layout";

export function StyleCreator() {
  const [currentDate] = useState(() => {
    const now = new Date();
    return `${now.getDate()} May ${now.getFullYear()} - ${now.getHours()}:${String(
      now.getMinutes()
    ).padStart(2, "0")} ${now.getHours() >= 12 ? "pm" : "am"}`;
  });

  const styles = [
    {
      id: 1,
      style1: "بحر (رمزم) متدارک متفاعلن مضاعف",
      style2: "فعلن فعلن فعلن فعلن فعلن فعلن فعلن فعلن",
      date: currentDate,
    },
    {
      id: 2,
      style1: "بحر (بندی) متقارب آزم مفعول محذوف مضاعف",
      style2: "فعلن فعلن فعلن فعلن فعلن فعلن فعلن فعلن",
      date: currentDate,
    },
    {
      id: 3,
      style1: "بحر (بندی) متقارب، متفاعلن مضاعف",
      style2: "فعلن فعلن فعلن فعلن فعلن فعلن فعلن فع",
      date: currentDate,
    },
    {
      id: 4,
      style1: "جمیل متفاعلن سالم",
      style2: "متفاعلن متفاعلن متفاعلن متفاعلن",
      date: currentDate,
    },
    {
      id: 5,
      style1: "جمیل متفاعلن سالم",
      style2: "متفاعلن متفاعلن",
      date: currentDate,
    },
    {
      id: 6,
      style1: "جمیل مسدس سالم",
      style2: "متفاعلن متفاعلن متفاعلن",
      date: currentDate,
    },
  ];

  return (
    <Layout>
    <div style={{ padding: "24px", maxWidth: "1000px", margin: "0 auto" }}>
      {/* Form */}
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "24px",
          }}
        >
          <h2 style={{ fontSize: "20px", fontWeight: "600" }}>Create Style</h2>
          <div style={{ fontSize: "14px", color: "#666" }}>{currentDate}</div>
        </div>

        <div style={{ marginBottom: "32px" }}>
          <div style={{ marginBottom: "16px" }}>
            <label style={{ display: "block", fontWeight: "500", marginBottom: "4px" }}>
              Style 1 - بحر
            </label>
            <input
            className="border"
              type="text"
              placeholder="بحر (رمزم) متدارک متفاعلن مضاعف"
              style={{ width: "100%", padding: "10px", textAlign: "right" }}
            />
          </div>

          <div style={{ marginBottom: "16px" }}>
            <label style={{ display: "block", fontWeight: "500", marginBottom: "4px" }}>
              Style 2 - وزن
            </label>
            <input
            className="border"
              type="text"
              placeholder="فعلن فعلن فعلن فعلن فعلن فعلن فعلن فعلن"
              style={{ width: "100%", padding: "10px", textAlign: "right" }}
            />
          </div>

          <div style={{ marginBottom: "16px" }}>
            <label style={{ display: "block", fontWeight: "500", marginBottom: "4px" }}>
              About Topic - عنوان کا تعارف
            </label>
            <div style={{ border: "1px solid #ccc", padding: "16px", minHeight: "120px", textAlign: "right", fontSize: "14px", color: "#555" }}>
              <p>
                بنیادی بحر، ہر متدارک پر مشتمل ہے۔ بحر متدارک یا "فاعلن" کے نام سے جانی جاتی ہے۔ (یہ ع ل ن ف ع ل ن یا ف ع ل ن)
              </p>
              <p>"فاعلن" پر "فاعلن" (باجنوب حرف ساکن کو حذف کرنا) لکھی سی ہے۔</p>
              <p>پھر "فعلن" کے "عین" کو ساکن کر کے "فَعْلن" حاصل کیا جاتا ہے۔ جو دو زمرہ کی پہچان ہے۔</p>
            </div>
          </div>

          <button
            style={{
              width: "100%",
              backgroundColor: "#007bff",
              color: "#fff",
              padding: "10px",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            Create Style
          </button>
        </div>
      </div>

      {/* Table */}
      <div style={{ overflowX: "auto" }}>
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            fontSize: "14px",
            textAlign: "left",
          }}
        >
          <thead style={{ backgroundColor: "#f9f9f9", color: "#666", textTransform: "uppercase" }}>
            <tr>
              <th style={thStyle}>SR #</th>
              <th style={thStyle}>Style 1 - بحر</th>
              <th style={thStyle}>Style 2 - وزن</th>
              <th style={thStyle}>Created On</th>
              <th style={thStyle}>Action</th>
            </tr>
          </thead>
          <tbody>
            {styles.map((style) => (
              <tr key={style.id} style={{ borderBottom: "1px solid #ddd" }}>
                <td style={tdStyle}>{style.id}</td>
                <td style={{ ...tdStyle, textAlign: "right" }}>{style.style1}</td>
                <td style={{ ...tdStyle, textAlign: "right" }}>{style.style2}</td>
                <td style={tdStyle}>{style.date}</td>
                <td style={tdStyle}>
                  <button style={editBtnStyle}>Edit</button>
                  <button style={deleteBtnStyle}>Delete</button>
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

const thStyle = {
  padding: "12px 16px",
  borderTop: "1px solid #ccc",
  borderBottom: "1px solid #ccc",
};

const tdStyle = {
  padding: "12px 16px",
};

const editBtnStyle = {
  backgroundColor: "#fff9e6",
  color: "#c27800",
  border: "1px solid #ffe58a",
  padding: "4px 8px",
  marginRight: "8px",
  cursor: "pointer",
  borderRadius: "4px",
  fontSize: "12px",
};

const deleteBtnStyle = {
  backgroundColor: "#ffe6e6",
  color: "#d9534f",
  border: "1px solid #f5c6cb",
  padding: "4px 8px",
  cursor: "pointer",
  borderRadius: "4px",
  fontSize: "12px",
};
