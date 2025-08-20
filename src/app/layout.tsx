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
  title: "RevProcess",
  description: "RevProcess helps creators and brands scale with powerful backend systems.",
  keywords: "scale business, content creation, backend secret, revenue growth, creators",
  authors: [{ name: "RevProcess" }],
  robots: "index, follow",
  icons: {
    icon: "/images/logo.png",
    shortcut: "/images/logo.png",
    apple: "/images/logo.png",
  },
  openGraph: {
    title: "RevProcess",
    description: "Scale your brand with RevProcess.",
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
    <html lang="en" className="bg-background">
      <body
        className={`${inter.variable} ${dmSans.variable} font-inter antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
