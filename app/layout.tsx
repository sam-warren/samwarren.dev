import type { Metadata, Viewport } from "next";
import { Host_Grotesk } from "next/font/google";
import { profile } from "@/lib/content";
import "./globals.css";

const sans = Host_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-sans",
});

const description = `${profile.role} in Victoria, BC. Full-stack work for public services and private corporations.`;

export const metadata: Metadata = {
  metadataBase: new URL("https://samwarren.dev"),
  title: profile.name,
  description,
  openGraph: {
    title: profile.name,
    description,
    url: "/",
    siteName: profile.name,
    type: "website",
  },
  twitter: { card: "summary_large_image", creator: "@samwarrendev" },
};

export const viewport: Viewport = {
  themeColor: "#fcfcfe",
  colorScheme: "light",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={sans.variable}>
      <body>{children}</body>
    </html>
  );
}
