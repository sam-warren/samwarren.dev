import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { profile } from "@/lib/content";

export const alt = `${profile.name}, ${profile.role.toLowerCase()}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Hex mirrors of the --bg, --ink and --ink-muted tokens in globals.css; Satori does not read OKLCH.
const bg = "#fcfcfe";
const ink = "#181a20";
const muted = "#5b5d65";

export default async function Image() {
  const [regular, medium] = await Promise.all([
    readFile(join(process.cwd(), "assets/HostGrotesk-Regular.ttf")),
    readFile(join(process.cwd(), "assets/HostGrotesk-Medium.ttf")),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: 96,
          background: bg,
          fontFamily: "Host Grotesk",
          fontSize: 56,
          lineHeight: 1.3,
        }}
      >
        <div style={{ color: ink, fontWeight: 500 }}>{profile.name}</div>
        <div style={{ color: muted, fontWeight: 400 }}>{profile.role}</div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Host Grotesk", data: regular, weight: 400, style: "normal" },
        { name: "Host Grotesk", data: medium, weight: 500, style: "normal" },
      ],
    },
  );
}
