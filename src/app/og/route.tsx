import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

async function loadGoogleFont(family: string, weight: number, text: string) {
  const url = `https://fonts.googleapis.com/css2?family=${encodeURIComponent(
    family
  )}:wght@${weight}&text=${encodeURIComponent(text)}`;
  const css = await (
    await fetch(url, { headers: { "User-Agent": "Mozilla/5.0" } })
  ).text();
  const match = css.match(
    /src: url\((.+?)\) format\('(opentype|truetype)'\)/
  );
  if (!match) throw new Error(`Could not load font: ${family}`);
  return (await fetch(match[1])).arrayBuffer();
}

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const title = searchParams.get("title") ?? "Jacob Sansbury";
  const date = searchParams.get("date") ?? "";
  const deck = searchParams.get("deck") ?? "";
  const kicker = searchParams.get("kicker") ?? "JACOB SANSBURY · THOUGHTS";

  const monoText = `${kicker}${date}WORKBYJACOB.COM·0123456789`;
  const [serif, mono] = await Promise.all([
    loadGoogleFont("Source Serif 4", 600, title + deck),
    loadGoogleFont("JetBrains Mono", 500, monoText),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#f6f1e6",
          padding: "72px 84px",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            borderBottom: "1px solid #d9cfbc",
            paddingBottom: 26,
          }}
        >
          <div
            style={{
              width: 12,
              height: 12,
              borderRadius: 12,
              backgroundColor: "#ff3b14",
            }}
          />
          <div
            style={{
              fontFamily: "JetBrains Mono",
              fontSize: 22,
              letterSpacing: "0.24em",
              color: "#a39a89",
            }}
          >
            {kicker}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <div
            style={{
              fontFamily: "Source Serif 4",
              fontSize: title.length > 34 ? 76 : 92,
              fontWeight: 600,
              color: "#14110d",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              maxWidth: 980,
            }}
          >
            {title}
          </div>
          {deck ? (
            <div
              style={{
                fontFamily: "Source Serif 4",
                fontSize: 34,
                color: "#7d7365",
                lineHeight: 1.3,
                maxWidth: 900,
              }}
            >
              {deck}
            </div>
          ) : null}
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            borderTop: "1px solid #d9cfbc",
            paddingTop: 26,
            fontFamily: "JetBrains Mono",
            fontSize: 22,
            letterSpacing: "0.18em",
            color: "#a39a89",
          }}
        >
          <div>{date}</div>
          <div>WORKBYJACOB.COM</div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        { name: "Source Serif 4", data: serif, weight: 600 },
        { name: "JetBrains Mono", data: mono, weight: 500 },
      ],
    }
  );
}
