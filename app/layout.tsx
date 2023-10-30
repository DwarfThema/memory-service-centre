import "./globals.css";
import type { Metadata } from "next";
import RecoilRootProvider from "./recoilRootProvider";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.memory-service-centre.com"),
  title: "M.S.C",
  description: "THEME-MUSEUM : Memory Service Centre by Dasom Song",
  openGraph: {
    title: "Memory Service Centre",
    description: "THEME-MUSEUM : Memory Service Centre by Dasom Song",
    url: "https://www.memory-service-centre.com",
    images: [
      {
        url: "/thumbnail.jpeg",
        width: 800,
        height: 600,
      },
      {
        url: "/thumbnail.jpeg",
        width: 1800,
        height: 1600,
        alt: "My custom alt",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "M.S.C",
    description: "THEME-MUSEUM : Memory Service Centre by Dasom Song",
    creator: "Dasom Song & Junho Park",
    images: ["/thumbnail.jpeg"],
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-dos scrollbar-hide bg-white">
        <Analytics />
        <RecoilRootProvider>{children}</RecoilRootProvider>
      </body>
    </html>
  );
}
