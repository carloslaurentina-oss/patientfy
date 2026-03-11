import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Patientfy - Dental Practice",
  description: "Professional dental care services for your whole family",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased bg-neutral-25 text-neutral-1000">
        <div className="page-wrapper">
          <main className="main-wrapper">
            <Navbar />
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
