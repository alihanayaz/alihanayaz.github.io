import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.scss";
import { Navbar } from "./components/Navbar";

const dmSans = DM_Sans({ subsets: ["latin"] });

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
      <body className={`${dmSans.className}`}>
        <div className="container">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
