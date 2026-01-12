import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { CustomCursor } from "@/components/Animations/CustomCursor";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kalatram AI | Premium IT Solutions & Digital Innovation",
  description: "Next-generation software development, AI solutions, and digital transformation for visionary brands.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.variable} ${outfit.variable} antialiased`} suppressHydrationWarning>
        <CustomCursor />
        <div className="mesh-gradient" />
        <div className="noise-overlay" />
        {children}
      </body>
    </html>
  );
}
