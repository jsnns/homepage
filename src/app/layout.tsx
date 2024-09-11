import type { Metadata } from "next";
import { Source_Serif_4 } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "@/app/globals.css";
import Script from "next/script";

const ss4 = Source_Serif_4({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jacob Sansbury — Founder, Engineer, Designer",
  description:
    "Jacob Sansbury is the Founder and CEO of Pluto.fi, an autonomous agent for personal finance. Previously he was a technical leader at Bridgewater Associates and NVIDIA.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Script
        defer
        data-domain="workbyjacob.com"
        src="https://plausible.io/js/script.js"
      />
      <SpeedInsights />
      <div className={ss4.className}>{children}</div>
    </html>
  );
}
