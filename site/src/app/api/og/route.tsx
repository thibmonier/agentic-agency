import { ImageResponse } from "next/og";
import type { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const title = searchParams.get("title") || "Agentic Agency";
  const type = searchParams.get("type") || "default";

  const subtitle =
    type === "service"
      ? "Services"
      : type === "article"
        ? "Blog"
        : "Développement web & applications sur mesure";

  return new ImageResponse(
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: "100%",
        height: "100%",
        backgroundColor: "#1e3a5f",
        padding: "60px 80px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          marginBottom: "24px",
        }}
      >
        {type !== "default" && (
          <div
            style={{
              backgroundColor: "#4a7bb7",
              color: "white",
              padding: "6px 16px",
              borderRadius: "20px",
              fontSize: "18px",
            }}
          >
            {subtitle}
          </div>
        )}
      </div>
      <div
        style={{
          fontSize: title.length > 40 ? "42px" : "56px",
          fontWeight: "bold",
          color: "white",
          lineHeight: 1.2,
          maxWidth: "900px",
        }}
      >
        {title}
      </div>
      {type === "default" && (
        <div
          style={{
            fontSize: "24px",
            color: "#94a3b8",
            marginTop: "20px",
          }}
        >
          {subtitle}
        </div>
      )}
      <div
        style={{
          position: "absolute",
          bottom: "0",
          left: "0",
          right: "0",
          height: "7px",
          backgroundColor: "#4a7bb7",
        }}
      />
    </div>,
    { width: 1200, height: 627 }
  );
}
