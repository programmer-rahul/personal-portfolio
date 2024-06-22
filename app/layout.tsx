import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Sofia_Sans, Playpen_Sans } from "next/font/google";

export const metadata: Metadata = {
  title: "Rahul - Full Stack Developer",
  description:
    "Welcome to my personal portfolio website. I am a passionate and skilled full stack developer with expertise in modern web technologies, including HTML, CSS, JavaScript, TypeScript, React, Next.js, Node.js, Express.js, MongoDB, and more. Explore the portfolio to learn more about my projects, skills, and experience in building dynamic and responsive web applications.",
};

const primaryFont = Sofia_Sans({
  weight: "variable",
  display: "swap",
  subsets: ["latin"],
  variable: "--font-primary",
});

const secondaryFont = Playpen_Sans({
  weight: "variable",
  display: "swap",
  subsets: ["latin"],
  variable: "--font-secondary",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="no-scrollbar">
      <body className={cn(primaryFont.variable, secondaryFont.variable)}>
        {children}
      </body>
    </html>
  );
}
