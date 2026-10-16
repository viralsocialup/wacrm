import { ImageResponse } from "next/og";

// Renders the brand mark (violet square + white chat glyph) as a PNG at the
// requested size for the PWA manifest. `?maskable=1` adds extra padding so
// Android's adaptive-icon mask never crops the glyph.
export async function GET(
  request: Request,
  { params }: { params: Promise<{ size: string }> },
) {
  const { size: raw } = await params;
  const size = Math.min(Math.max(parseInt(raw, 10) || 192, 48), 1024);
  const maskable = new URL(request.url).searchParams.get("maskable") === "1";
  const glyph = Math.round(size * (maskable ? 0.4 : 0.56));

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#7c3aed",
          borderRadius: maskable ? 0 : Math.round(size * 0.2),
        }}
      >
        <svg
          width={glyph}
          height={glyph}
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
      </div>
    ),
    { width: size, height: size },
  );
}
