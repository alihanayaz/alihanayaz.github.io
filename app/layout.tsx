import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.scss";
import { Navbar } from "./components/Navbar";

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
        <div className="container">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
