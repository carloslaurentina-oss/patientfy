import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import LayoutShell from "@/components/layout/LayoutShell";

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
        <LayoutShell>{children}</LayoutShell>
      </body>
    </html>
  );
}
