"use client";

import React from "react";
import {
  Header,
  Hero,
  Projects,
  Tape,
  Testimonials,
  About,
  Contact,
  Footer,
  Faq,
} from "@/sections";

export default function Home() {
  const [activeLink, setActiveLink] = React.useState("#home");

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
  };

  return (
    <main>
      <Header activeLink={activeLink} handleLinkClick={handleLinkClick} />
      <section id="home">
        <Hero />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <Tape className="-rotate-3" animateClassName="animate-move-left" />
      <Testimonials />
      <section id="about">
        <About />
      </section>
      <Tape className="rotate-3" animateClassName="animate-move-right" />
      <section id="faq">
        <Faq />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer handleLinkClick={handleLinkClick} />
    </main>
  );
}
