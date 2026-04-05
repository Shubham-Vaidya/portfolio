import type { Metadata } from "next";
import { Bebas_Neue, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas-neue",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Shubham Vaidya — Creative Developer",
  description:
    "Portfolio of Shubham Vaidya — Computer Engineering student from Mumbai building real-world applications with Java, C++, Python, and modern web technologies.",
  keywords: ["Shubham Vaidya", "developer", "portfolio", "Mumbai", "React", "Next.js"],
  openGraph: {
    title: "Shubham Vaidya — Creative Developer",
    description: "Creative Developer & Problem Solver from Mumbai.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.variable} ${bebasNeue.variable} font-sans antialiased bg-background text-foreground`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
