import { ImageResponse } from "next/og";
import { readFile } from "fs/promises";
import { join } from "path";

export const alt = "Nelson Oluwole — Senior Product Designer";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  let logoBase64 = "";
  try {
    const logoBuffer = await readFile(join(process.cwd(), "public/icon-192.png"));
    logoBase64 = `data:image/png;base64,${logoBuffer.toString("base64")}`;
  } catch {
    logoBase64 = "";
  }

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#09090b",
          backgroundImage:
            "radial-gradient(circle at 50% 40%, rgba(99, 102, 241, 0.25) 0%, rgba(79, 70, 229, 0.08) 50%, rgba(9, 9, 11, 1) 100%)",
          padding: "40px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            maxWidth: "1060px",
            height: "530px",
            backgroundColor: "rgba(24, 24, 27, 0.5)",
            border: "1.5px solid rgba(99, 102, 241, 0.4)",
            borderRadius: "32px",
            padding: "40px",
          }}
        >
          {logoBase64 ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={logoBase64}
              alt="Nelson Oluwole Logo"
              width={112}
              height={112}
              style={{ borderRadius: "50%", marginBottom: "20px" }}
            />
          ) : null}

          <div
            style={{
              fontSize: "48px",
              fontWeight: 800,
              color: "#ffffff",
              letterSpacing: "-0.03em",
              marginBottom: "6px",
            }}
          >
            Nelson Oluwole
          </div>

          <div
            style={{
              fontSize: "24px",
              fontWeight: 600,
              color: "#a1a1aa",
              letterSpacing: "-0.01em",
              marginBottom: "18px",
            }}
          >
            Senior Product Designer
          </div>

          <div
            style={{
              fontSize: "18px",
              fontWeight: 400,
              color: "#71717a",
              textAlign: "center",
              maxWidth: "640px",
              lineHeight: 1.4,
              marginBottom: "28px",
            }}
          >
            I design digital products users understand &amp; return to.
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "rgba(99, 102, 241, 0.15)",
              border: "1px solid rgba(99, 102, 241, 0.4)",
              borderRadius: "9999px",
              padding: "8px 24px",
              color: "#818cf8",
              fontSize: "16px",
              fontWeight: 600,
            }}
          >
            www.nelsonoluwole.xyz
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
