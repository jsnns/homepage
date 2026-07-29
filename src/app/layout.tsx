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

export const metadata: Metadata = {
  title: "Jacob Sansbury — Founder, Engineer, Designer",
  description:
    "Jacob Sansbury is the Founder of Spawn.co, a platform for creating and sharing interactive experiences.",
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
