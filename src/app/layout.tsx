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

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://nelsonyolemi.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Nelson Oluwole — Founder & Senior Product Designer",
    template: "%s | Nelson Oluwole",
  },
  description:
    "Portfolio of Nelson Oluwole, Founder and Senior Product Designer specializing in intuitive digital products, SaaS platforms, mobile applications, and design systems.",
  applicationName: "Nelson Oluwole Portfolio",
  authors: [{ name: "Nelson Oluwole", url: siteUrl }],
  creator: "Nelson Oluwole",
  publisher: "Nelson Oluwole",
  keywords: [
    "Nelson Oluwole",
    "Product Designer",
    "UI/UX Designer",
    "Senior Product Designer",
    "Design Educator",
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
    siteName: "Nelson Oluwole Portfolio",
    title: "Nelson Oluwole — Founder & Senior Product Designer",
    description:
      "Designing intuitive digital products that solve real problems, simplify complexity, and create measurable value.",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Nelson Oluwole — Founder & Senior Product Designer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nelson Oluwole — Founder & Senior Product Designer",
    description:
      "Designing intuitive digital products that solve real problems, simplify complexity, and create measurable value.",
    creator: "@nelsonyolemi1",
    images: ["/og-image.svg"],
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
