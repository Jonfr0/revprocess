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
  title: {
    default: "RevProcess",
    template: "%s | RevProcess"
  },
  description: "Scale Your Brand Beyond 6-Figures Using The Backend Secret. Discover how creators with tiny audiences are quietly making 10x more than their competitors while you're grinding 12-hour days for scraps.",
  keywords: ["scale business", "content creation", "backend secret", "revenue growth", "growth operator", "AI Operator", "business scaling", "Info Publishing", "Info Product Agency"],
  authors: [{ name: "RevProcess", url: "https://revprocess.com" }],
  creator: "RevProcess",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/images/logo.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/images/logo.png",
    apple: "/images/logo.png",
  },
  openGraph: {
    title: "RevProcess - Scale Your Brand Beyond 6-Figures Using The Backend Secret",
    description: "Discover how creators with tiny audiences are quietly making 10x more than their competitors.",
    type: "website",
    locale: "en_US",
    url: "https://revprocess.com",
    siteName: "RevProcess",
    images: [
      {
        url: "/images/logo-6af508.png",
        width: 1200,
        height: 630,
        alt: "RevProcess - Scale Your Brand Beyond 6-Figures",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RevProcess - Scale Your Brand Beyond 6-Figures",
    description: "Discover how creators with tiny audiences are quietly making 10x more than their competitors.",
    images: ["/images/logo-6af508.png"],
  },
  alternates: {
    canonical: "https://revprocess.com",
  },
  verification: {
    google: "your-google-site-verification-code",
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
