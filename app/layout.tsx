import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BizUp — Business Growth & Digital Solutions",
  description:
    "BizUp helps businesses grow with Google Review Cards, Google Business Profile services, websites, website management, Meta Ads and TikTok Ads.",
  keywords: [
    "BizUp",
    "business growth",
    "Google Business Profile",
    "Google Review Cards",
    "NFC review cards",
    "business websites",
    "Meta Ads",
    "TikTok Ads",
    "Pakistan",
  ],
  authors: [
    {
      name: "BizUp",
    },
  ],
  openGraph: {
    title: "BizUp — Business Growth & Digital Solutions",
    description:
      "We Don't Just Market Businesses. We Build Them.",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}