import "./globals.css";
import type { Metadata } from "next";
import { Inter, VT323 } from "next/font/google";
import { RecoilRoot } from "recoil";
import RecoilRootProvider from "./recoilRootProvider";

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
      <body className="font-dos scrollbar-hide bg-white">
        <RecoilRootProvider>{children}</RecoilRootProvider>
      </body>
    </html>
  );
}
