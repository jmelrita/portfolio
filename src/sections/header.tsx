"use client";

import React from "react";

export function Header({
  activeLink,
  handleLinkClick,
}: {
  activeLink: string;
  handleLinkClick: (link: string) => void;
}) {
  return (
    <section className="flex items-center justify-center fixed top-3 w-full z-[1000]">
      <nav className="flex gap-1 p-0.5 border border-light-shadow rounded-full bg-light-default/10 backdrop-blur">
        <a
          className={`nav__link ${activeLink === "#home" ? "bg-light-default text-dark-default" : ""}`}
          href="#home"
          onClick={() => handleLinkClick("#home")}
        >
          Home
        </a>
        <a
          className={`nav__link ${activeLink === "#projects" ? "bg-light-default text-dark-default" : ""}`}
          href="#projects"
          onClick={() => handleLinkClick("#projects")}
        >
          Projects
        </a>
        <a
          className={`nav__link ${activeLink === "#about" ? "bg-light-default text-dark-default" : ""}`}
          href="#about"
          onClick={() => handleLinkClick("#about")}
        >
          About
        </a>
        <a
          className={`nav__link ${activeLink === "#faq" ? "bg-light-default text-dark-default" : ""}`}
          href="#faq"
          onClick={() => handleLinkClick("#faq")}
        >
          FAQ
        </a>
        <a
          className={`nav__link ${activeLink === "#contact" ? "bg-light-default text-dark-default" : ""}`}
          href="#contact"
          onClick={() => handleLinkClick("#contact")}
        >
          Contact
        </a>
      </nav>
    </section>
  );
}
