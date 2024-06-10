import type { Metadata } from "next";
import Header from "@/components/header";
import "./globals.css";
import { Inter, Shrikhand } from "next/font/google";

export const metadata: Metadata = {
  title: "Seramone",
  description: "Manage your team cermonies",
};

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const shrikhand = Shrikhand({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-shrikhand",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${shrikhand.variable}`}>
      <head>
        <meta charSet="UTF-8" />
        <link rel="icon" href="/images/favicon.ico" sizes="any" />
      </head>
      <body className="flex flex-col min-h-dvh bg-base-300">
        <Header />
        {children}
      </body>
    </html>
  );
}
