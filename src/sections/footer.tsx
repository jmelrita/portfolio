"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight, DoubleArrowUp } from "@/assets/icons";

const footerLinks = [
  {
    title: "Github",
    href: "https://github.com/GabTheGreat25",
  },
  {
    title: "Linkedin",
    href: "https://www.linkedin.com/in/gaabsyy25",
  },
  {
    title: "Facebook",
    href: "https://www.facebook.com/Codeeee_is_Lifeeee",
  },
  {
    title: "Twitter",
    href: "https://twitter.com/Gaabsyy25",
  },
];

export function Footer({
  handleLinkClick,
}: {
  handleLinkClick: (link: string) => void;
}) {
  const [hoveredButton, setHoveredButton] = React.useState<string | null>(null);

  return (
    <footer className="relative z-10 overflow-x-clip">
      <div className="absolute lg:h-[400px] md:h-[325px] h-[300px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-success-secondary/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10"></div>
      <div className="container">
        <div className="flex items-end justify-center md:mb-12 mb-6">
          <a href="#home" onClick={() => handleLinkClick("#home")}>
            <div className="p-4 duration-300 ease-in rounded-full bg-gradient-to-r from-success-secondary to-info-default shadow-lg cursor-pointer hover:scale-110">
              <DoubleArrowUp className="size-10" />
            </div>
          </a>
        </div>
        <div className="border-t border-light-default/15 pb-6 md:pb-0 text-sm flex flex-col md:flex-row md:justify-between items-center gap-x-8">
          <div className="inline-flex items-center text-light-default">
            <Image src="/logo.png" alt="logo" width="100" height="100" />
            <span>&copy; 2024. All rights reserved.</span>
          </div>
          <nav className="flex flex-col md:flex-row items-center gap-8 md:gap-5 lg:gap-4 mb-6 md:mb-0">
            {footerLinks.map((link) => (
              <a
                key={link.title}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 hover:scale-110 duration-500 ease-in-out"
                onMouseEnter={() => setHoveredButton(link.title)}
                onMouseLeave={() => setHoveredButton(null)}
              >
                <span className="font-semibold">{link.title}</span>
                <ArrowUpRight
                  className={`size-4 transition-transform duration-700 ${
                    hoveredButton === link.title
                      ? "rotate-[225deg]"
                      : "rotate-0"
                  }`}
                />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
