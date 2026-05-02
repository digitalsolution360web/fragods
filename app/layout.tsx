import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import MobileContactBar from "@/components/MobileContactBar";
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
  title: "Fragods | Pure Care & Timeless Fragrance",
  description: "Experience the perfect blend of nature and luxury with Fragods premium skincare and fragrance essentials.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#faf9f8] flex flex-col min-h-screen selection:bg-rose-200 selection:text-rose-900`}
      >
        <Navbar />
        <main className="flex-grow flex flex-col">
          {children}
        </main>
        <Footer />
        {/* Desktop only floating WhatsApp */}
        <div className="hidden md:block">
          <WhatsAppWidget />
        </div>
        {/* Mobile sticky bottom contact bar */}
        <MobileContactBar />
        {/* Add bottom padding on mobile so content isn't hidden behind sticky bar */}
        <div className="block md:hidden h-11" />
      </body>
    </html>
  );
}
