import "./globals.css";
import type { Metadata } from "next";
import { Inter, VT323 } from "next/font/google";

const mainFont = VT323({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "M.S.C",
  description: "Memory Service Centre",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={mainFont.className}>{children}</body>
    </html>
  );
}
