import type { Metadata, Viewport } from "next";
import { Inter, DM_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Scale Your Brand Beyond 6-Figures | RevProcess",
  description: "Discover how creators with tiny audiences are quietly making 10x more than their competitors using The Backend Secret. Ready to focus 100% on content?",
  keywords: "scale business, content creation, backend secret, revenue growth, creators",
  authors: [{ name: "RevProcess" }],
  robots: "index, follow",
  openGraph: {
    title: "Scale Your Brand Beyond 6-Figures | RevProcess",
    description: "Discover how creators with tiny audiences are quietly making 10x more than their competitors using The Backend Secret.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${dmSans.variable} font-inter antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
