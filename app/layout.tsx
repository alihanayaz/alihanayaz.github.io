import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.scss";
import Navbar from "./components/Navbar";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Alihan Ayaz",
  description: "Software Developer based in Istanbul, Turkey",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.className}`}>
        <svg width="100%" height="100%">
          <filter id="filterNoise">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.80"
              numOctaves="4"
              stitchTiles="stitch"
            />
          </filter>
          <rect width="100%" height="100%" filter="url(#filterNoise)"></rect>
        </svg>
        <div className="circle one"></div>
        <div className="circle two"></div>
        <div className="container">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
