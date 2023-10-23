import "./globals.css";
import type { Metadata } from "next";
import RecoilRootProvider from "./recoilRootProvider";

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
