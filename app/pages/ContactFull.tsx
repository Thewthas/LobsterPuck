import React from "react";
import Header from "./Header";
import Footer from "./Footer";
export const loader = async () => null;

const ContactFull: React.FC = () => {
  return (
    <div
      style={{
        fontFamily: "sans-serif",
        background: "#f4faff",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Header />

      {/* Main Content */}
      <main
        style={{
          width: "100%",
          maxWidth: "1200px", // จำกัดความกว้างสูงสุด
          margin: "40px auto", // กึ่งกลางจอ
          padding: "24px",
          background: "#fff",
          borderRadius: 12,
          boxShadow: "0 2px 8px rgba(33,150,243,0.08)",
          flex: 1,
          display: "flex",
          gap: 32,
          boxSizing: "border-box", // ป้องกัน padding บวกเกินจอ
        }}
      >
        {/* Left: Contact Info */}
        <section style={{ flex: "0 0 40%" }}>
          <h2
            style={{
              color: "#1976d2",
              fontSize: "1.8rem",
              fontWeight: "bold",
              marginBottom: "20px",
            }}
          >
            รายละเอียดการติดต่อ
          </h2>
          <p style={{ fontSize: "1.1rem", marginBottom: "12px" }}>
            <strong>เบอร์โทร:</strong>{" "}
            <a
              href="tel:0812345678"
              style={{ color: "#2196f3", textDecoration: "none" }}
            >
              095-xxx-xxxx
            </a>
          </p>
          <p style={{ fontSize: "1.1rem", marginBottom: "12px" }}>
            <strong>อีเมล:</strong>{" "}
            <a
              href="mailto:info@example.com"
              style={{ color: "#2196f3", textDecoration: "none" }}
            >
              lobsterpuckofficial@gmail.com
            </a>
          </p>

          <h3
            style={{
              color: "#1976d2",
              fontSize: "1.5rem",
              fontWeight: "bold",
              marginTop: "32px",
              marginBottom: "16px",
            }}
          >
            ช่องทาง Social
          </h3>
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              display: "flex",
              gap: 24,
              fontSize: "1.1rem",
            }}
          >
            <li>
              <a
                href="https://facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#2196f3", textDecoration: "none" }}
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://line.me/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#2196f3", textDecoration: "none" }}
              >
                LINE
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#2196f3", textDecoration: "none" }}
              >
                Instagram
              </a>
            </li>
          </ul>
        </section>

        {/* Right: Map */}
        <section
          style={{
            flex: "1 0 60%",
            background: "#e3f2fd",
            border: "2px dashed #90caf9",
            borderRadius: 10,
            minHeight: 500,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginRight: "16px", // <--- เว้นก่อนถึงขอบขวา
          }}
        >
          <span style={{ color: "#64b5f6", fontSize: 20 }}>
            แผนที่จะเเสดงตรงนี้
          </span>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ContactFull;
