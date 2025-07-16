import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";
import { Analytics } from "@vercel/analytics/react";
import { ConvexClientProvider } from "./ConvexClientProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TN Connect",
  description:
    "Connect with TN visa professionals and find companies that sponsor TN visas",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <Script
          src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.6.0/dist/confetti.browser.min.js"
          strategy="beforeInteractive"
        />
      </head>
      <body className={inter.className}>
        <ConvexClientProvider>
          <Navbar />
          {children}
          <Footer />
          <Analytics />
        </ConvexClientProvider>
      </body>
    </html>
  );
}
