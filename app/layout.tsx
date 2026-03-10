import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
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
  title: "Aash Enterprises | Farsan Gold Premium Snacks",
  description: "Authentic Farsan & Traditional Indian Snacks. Freshly prepared, delivering authentic taste and trusted quality.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50 flex flex-col min-h-screen selection:bg-amber-200 selection:text-amber-900`}
      >
        <Navbar />
        <main className="flex-grow flex flex-col pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
