import type { Metadata } from "next";
import { Providers } from "./providers";
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

export const metadata: Metadata = {
  metadataBase: new URL("https://divineade-idan.vercel.app"), // change this

  title: {
    default: "Divine Ade | Frontend Developer & Full Stack Engineer",
    template: "%s | Divine Ade",
  },

  description:
    "Divine Ade is a Frontend Developer and Full Stack Engineer specializing in Next.js, React, and scalable web applications. Explore projects, UI systems, and modern web solutions.",

  keywords: [
    "Divine Ade",
    "Frontend Developer Nigeria",
    "Next.js Developer",
    "React Developer",
    "Full Stack Developer",
    "TypeScript Developer",
    "Web Developer Portfolio",
    "JavaScript Engineer",
  ],

  authors: [{ name: "Divine Ade" }],
  creator: "Divine Ade",

  openGraph: {
    title: "Divine Ade | Frontend Developer & Full Stack Engineer",
    description:
      "Portfolio of Divine Ade showcasing modern web apps, scalable systems, and UI engineering using Next.js, React, and TypeScript.",
    url: "https://divineade-idan.vercel.app",
    siteName: "Divine Ade Portfolio",
    images: [
      {
        url: "/swe.png", // add this image
        width: 1200,
        height: 630,
        alt: "Divine Ade Portfolio",
      },
    ],
    locale: "en-NG",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Divine Ade | Frontend Developer",
    description:
      "Building high-performance web apps with Next.js, React, and TypeScript.",
    images: ["/swe.png"],
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/favicon.ico",
  },

  category: "technology",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}