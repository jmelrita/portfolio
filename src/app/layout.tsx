import type { Metadata } from "next";
import { Inter, Calistoga } from "next/font/google";
import { twMerge } from "tailwind-merge";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const calistoga = Calistoga({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Gabriel's Portfolio",
  description:
    "Hi, I’m Jun Mel Rita, a passionate software engineer and web developer with a strong foundation in [list programming languages or technologies you know, e.g., HTML, CSS, JavaScript, React, Node.js]. While I’m early in my professional journey, I’ve dedicated myself to honing my skills through hands-on projects and continuous learning. I’m eager to apply my creativity and problem-solving abilities to build engaging, user-friendly web experiences. On this site, you’ll find a selection of my work, showcasing my commitment to writing clean, efficient code and delivering high-quality solutions. I’m excited to contribute to innovative projects and grow as a developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <link rel="icon" href="/logo.png" type="image/png" />
      </head>
      <body
        className={twMerge(
          inter.variable,
          calistoga.variable,
          "bg-dark-secondary text-light-default antialiased font-sans",
        )}
      >
        {children}
      </body>
    </html>
  );
}
