import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import LenisScroll from "@/components/LenisScroll";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kanwar Singh | Software Developer Engineer",
  description:
    "Portfolio website of Kanwar Singh, a Software Developer Engineer with 3+ years of experience in frontend, backend, and blockchain development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <LenisScroll>{children}</LenisScroll>
      </body>
    </html>
  );
}
