import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          background:
            "linear-gradient(135deg, #020617 0%, #07111f 52%, #0f172a 100%)",
          color: "#f8fafc",
          fontFamily: "Segoe UI",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at 20% 20%, rgba(34, 211, 238, 0.22), transparent 28%), radial-gradient(circle at 82% 18%, rgba(59, 130, 246, 0.18), transparent 22%)",
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "72px",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "14px",
              fontSize: 26,
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: "#a5f3fc",
            }}
          >
            Developer Portfolio
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
            <div
              style={{
                fontSize: 82,
                fontWeight: 700,
                lineHeight: 1.05,
                maxWidth: "760px",
              }}
            >
              Yenula Nimneth
            </div>
            <div
              style={{
                fontSize: 34,
                lineHeight: 1.5,
                color: "#cbd5e1",
                maxWidth: "860px",
              }}
            >
              IT undergraduate focused on modern web development, practical
              software projects, and polished user experiences.
            </div>
          </div>
          <div
            style={{
              display: "flex",
              gap: "18px",
              color: "#e2e8f0",
              fontSize: 24,
            }}
          >
            <div
              style={{
                padding: "16px 24px",
                borderRadius: "999px",
                border: "1px solid rgba(34, 211, 238, 0.28)",
                background: "rgba(34, 211, 238, 0.1)",
              }}
            >
              Next.js
            </div>
            <div
              style={{
                padding: "16px 24px",
                borderRadius: "999px",
                border: "1px solid rgba(255,255,255,0.12)",
                background: "rgba(255,255,255,0.05)",
              }}
            >
              Frontend + Full-Stack Growth
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
