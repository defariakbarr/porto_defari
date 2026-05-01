import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Defari — Frontend Developer",
  description:
    "Portfolio of Defari, a frontend developer passionate about building modern, performant, and beautiful web experiences.",
  keywords: ["frontend developer", "portfolio", "react", "next.js", "web developer"],
  authors: [{ name: "Defari" }],
  openGraph: {
    title: "Defari — Frontend Developer",
    description: "Portfolio of Defari, a frontend developer.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.variable} h-full antialiased`}>{children}</body>
    </html>
  );
}
