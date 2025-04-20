import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ConvexClerkProvider from "@/providers/ConvexClerkProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RedBody AI - Get Ripped",
  description: "Modern Fitness AI Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ConvexClerkProvider>
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar></Navbar>
        <div className="fixed inset-0 -z-1" style={{ "--cyber-grid-color": "rgba(255, 0, 0, 0.2)" } as React.CSSProperties}>
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background"></div>
          <div className="absolute inset-0 bg-[linear-gradient(var(--cyber-grid-color)_1px,transparent_1px),linear-gradient(90deg,var(--cyber-grid-color)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
        </div>

        <main className="pt-24 flex-grow">
          {children}
        </main>
        <Footer></Footer>
      </body>
    </html>
    </ConvexClerkProvider>
  );
}
