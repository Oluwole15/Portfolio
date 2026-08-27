import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.nelsonoluwole.xyz";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: siteUrl,
  },
  title: {
    default: "Nelson Oluwole — Senior Product Designer",
    template: "%s | Nelson Oluwole",
  },
  description: "I design digital products users understand and return to.",
  applicationName: "Nelson Oluwole",
  authors: [{ name: "Nelson Oluwole", url: siteUrl }],
  creator: "Nelson Oluwole",
  publisher: "Nelson Oluwole",
  keywords: [
    "Nelson Oluwole",
    "Product Designer",
    "UI/UX Designer",
    "Senior Product Designer",
    "SaaS Design",
    "Design Systems",
    "Lagos Product Designer",
    "Fintech UI",
  ],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: ["/favicon.ico"],
  },
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Nelson Oluwole",
    title: "Nelson Oluwole — Senior Product Designer",
    description: "I design digital products users understand and return to.",
  },
  twitter: {
    card: "summary_large_image",
    site: "@nelsonyolemi1",
    title: "Nelson Oluwole — Senior Product Designer",
    description: "I design digital products users understand and return to.",
    creator: "@nelsonyolemi1",
  },
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col pt-24 md:pt-24">{children}</body>
    </html>
  );
}
