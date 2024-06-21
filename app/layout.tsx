import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rahul - Full Stack Developer",
  description:
    "Welcome to my personal portfolio website. I am a passionate and skilled full stack developer with expertise in modern web technologies, including HTML, CSS, JavaScript, TypeScript, React, Next.js, Node.js, Express.js, MongoDB, and more. Explore the portfolio to learn more about my projects, skills, and experience in building dynamic and responsive web applications.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="no-scrollbar">
      <body>{children}</body>
    </html>
  );
}
