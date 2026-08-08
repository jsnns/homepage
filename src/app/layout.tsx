import type { Metadata } from "next";
import { JetBrains_Mono, Source_Serif_4 } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "@/app/globals.css";
import Script from "next/script";

const ss4 = Source_Serif_4({ subsets: ["latin"], axes: ["opsz"] });
const jbMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jbmono",
});

const homeOg =
  "/og?" +
  new URLSearchParams({
    title: "Jacob Sansbury",
    deck: "Half of my employees don't have bodies.",
    kicker: "SPAWN · SAN FRANCISCO",
  }).toString();

export const metadata: Metadata = {
  metadataBase: new URL("https://workbyjacob.com"),
  title: "Jacob Sansbury — Founder, Engineer, Designer",
  description:
    "Jacob Sansbury is the Founder of Spawn.co, a platform for creating and sharing interactive experiences.",
  openGraph: {
    title: "Jacob Sansbury",
    images: [{ url: homeOg, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jacob Sansbury",
    images: [homeOg],
  },
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
      <body>
        <div className={`${ss4.className} ${jbMono.variable}`}>{children}</div>
      </body>
    </html>
  );
}
