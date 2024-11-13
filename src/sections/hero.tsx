"use client";

import React from "react";
import Image from "next/image";
import { MemojiComputer, Grain, BlobSunglasses } from "@/assets/images";
import * as Icon from "@/assets/icons";
import { Resume } from "@/assets/files";
import { HeroOrbit, TechIcons } from "@/components";

export function Hero() {
  const [isHovered, setIsHovered] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [progress, setProgress] = React.useState(0);
  const [showTransformed, setShowTransformed] = React.useState(false);
  const [isTransitioning, setIsTransitioning] = React.useState(false);

  const handleConnectClick = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setShowTransformed((prev) => !prev);
      setIsTransitioning(false);
    }, 800);
  };

  const handleDownload = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    setLoading(true);
    setProgress(0);

    const simulateProgress = (currentProgress: number) => {
      if (currentProgress >= 100) {
        setLoading(false);
        setProgress(100);

        window.open(Resume, "_blank");

        const link = document.createElement("a");
        link.href = Resume;
        link.download = "Gabriel-Mendoza-Resume.pdf";
        link.click();
        return;
      }

      setProgress(currentProgress + 10);
      setTimeout(() => simulateProgress(currentProgress + 10), 100);
    };

    simulateProgress(0);
  };

  return (
    <div className="py-100 md:py-48 lg:py-20 z-0 relative overflow-x-clip">
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
        <div
          className="absolute inset-0 opacity-5 -z-30"
          style={{
            backgroundImage: `url(${Grain.src})`,
          }}
        ></div>
        <div className="size-[620px] hero__ring"></div>
        <div className="size-[820px] hero__ring"></div>
        <div className="size-[1020px] hero__ring"></div>
        <div className="size-[1220px] hero__ring"></div>
        {showTransformed ? (
          <div
            className={`transition-opacity duration-1000 ease-in-out ${isTransitioning ? "opacity-0" : "opacity-100"}`}
          >
            <HeroOrbit size={440} rotation={-14}>
              <a
                href="https://github.com/GabTheGreat25"
                target="_blank"
                rel="noreferrer"
                className="hero__hover"
              >
                <TechIcons component={Icon.Github} size={"size-16"} />
              </a>
            </HeroOrbit>
            <HeroOrbit size={445} rotation={95}>
              <a
                href="https://www.chess.com/member/gaabsyy"
                target="_blank"
                rel="noreferrer"
                className="hero__hover"
              >
                <TechIcons component={Icon.Chess} size={"size-16"} />
              </a>
            </HeroOrbit>
            <HeroOrbit size={520} rotation={-41}>
              <a
                href="https://codepen.io/gabthegreat25"
                target="_blank"
                rel="noreferrer"
                className="hero__hover"
              >
                <TechIcons component={Icon.Codepen} size={"size-16"} />
              </a>
            </HeroOrbit>
            <HeroOrbit size={525} rotation={233}>
              <a
                href="https://medium.com/@gabrielarafolmendoza25"
                target="_blank"
                rel="noreferrer"
                className="hero__hover"
              >
                <TechIcons component={Icon.Medium} size={"size-20"} />
              </a>
            </HeroOrbit>
            <HeroOrbit size={530} rotation={150}>
              <a
                href="https://www.facebook.com/Codeeee_is_Lifeeee"
                target="_blank"
                rel="noreferrer"
                className="hero__hover"
              >
                <TechIcons component={Icon.Facebook} size={"size-16"} />
              </a>
            </HeroOrbit>
            <HeroOrbit size={535} rotation={120}>
              <a
                href="https://stackoverflow.com/users/19642389/gabthegreat"
                target="_blank"
                rel="noreferrer"
                className="hero__hover"
              >
                <TechIcons component={Icon.Stackoverflow} size={"size-16"} />
              </a>
            </HeroOrbit>
            <HeroOrbit size={540} rotation={200}>
              <a
                href="https://dev.to/gabthegreat25"
                target="_blank"
                rel="noreferrer"
                className="hero__hover"
              >
                <TechIcons component={Icon.DevTo} size={"size-16"} />
              </a>
            </HeroOrbit>
            <HeroOrbit size={550} rotation={20}>
              <a
                href="https://discord.com/users/433106513280892928"
                target="_blank"
                rel="noreferrer"
                className="hero__hover"
              >
                <TechIcons component={Icon.Discord} size={"size-16"} />
              </a>
            </HeroOrbit>
            <HeroOrbit size={560} rotation={-75}>
              <a
                href="https://open.spotify.com/user/31qvjsvrsasz3ywlhwvbuqpnjzvy"
                target="_blank"
                rel="noreferrer"
                className="hero__hover"
              >
                <TechIcons component={Icon.Spotify} size={"size-16"} />
              </a>
            </HeroOrbit>
            <HeroOrbit size={565} rotation={75}>
              <a
                href="https://www.linkedin.com/in/gaabsyy25"
                target="_blank"
                rel="noreferrer"
                className="hero__hover"
              >
                <TechIcons component={Icon.LinkedIn} size={"size-16"} />
              </a>
            </HeroOrbit>
            <HeroOrbit size={590} rotation={50}>
              <a
                href="https://t.me/Gabz092501"
                target="_blank"
                rel="noreferrer"
                className="hero__hover"
              >
                <TechIcons component={Icon.Telegram} size={"size-16"} />
              </a>
            </HeroOrbit>
            <HeroOrbit size={600} rotation={97}>
              <a
                href="https://www.figma.com/@gabrielmendoza"
                target="_blank"
                rel="noreferrer"
                className="hero__hover"
              >
                <TechIcons component={Icon.Figma} size={"size-16"} />
              </a>
            </HeroOrbit>
            <HeroOrbit size={605} rotation={263}>
              <a
                href="https://codesandbox.io/u/gabthegreat25"
                target="_blank"
                rel="noreferrer"
                className="hero__hover"
              >
                <TechIcons component={Icon.CodeSandbox} size={"size-16"} />
              </a>
            </HeroOrbit>
            <HeroOrbit size={620} rotation={172}>
              <a
                href="https://twitter.com/Gaabsyy25"
                target="_blank"
                rel="noreferrer"
                className="hero__hover"
              >
                <TechIcons component={Icon.XTwitter} size={"size-16"} />
              </a>
            </HeroOrbit>
            <HeroOrbit size={640} rotation={-5}>
              <a
                href="https://www.instagram.com/gabthegreat25"
                target="_blank"
                rel="noreferrer"
                className="hero__hover"
              >
                <TechIcons component={Icon.Instagram} size={"size-16"} />
              </a>
            </HeroOrbit>
          </div>
        ) : (
          <div
            className={`transition-opacity duration-1000 ease-in-out ${!isTransitioning ? "opacity-100" : "opacity-0"}`}
          >
            <HeroOrbit
              size={430}
              rotation={-14}
              shouldOrbit
              orbitDuration="30s"
              shouldSpin
              spinDuration="3s"
            >
              <Icon.Sparkle className="size-8 text-success-secondary/20" />
            </HeroOrbit>
            <HeroOrbit
              size={440}
              rotation={79}
              shouldOrbit
              orbitDuration="32s"
              shouldSpin
              spinDuration="3s"
            >
              <Icon.Sparkle className="size-5 text-success-secondary/20" />
            </HeroOrbit>
            <HeroOrbit
              size={520}
              rotation={-41}
              shouldOrbit
              orbitDuration="34s"
            >
              <div className="size-2 bg-success-secondary/20 rounded-full"></div>
            </HeroOrbit>
            <HeroOrbit
              size={530}
              rotation={178}
              shouldOrbit
              orbitDuration="36s"
              shouldSpin
              spinDuration="3s"
            >
              <Icon.Sparkle className="size-10 text-success-secondary/20" />
            </HeroOrbit>
            <HeroOrbit
              size={550}
              rotation={20}
              shouldOrbit
              orbitDuration="38s"
              shouldSpin
              spinDuration="6s"
            >
              <Icon.Star className="size-12 text-success-secondary" />
            </HeroOrbit>
            <HeroOrbit
              size={585}
              rotation={-130}
              shouldOrbit
              orbitDuration="39s"
              shouldSpin
              spinDuration="7s"
            >
              <Icon.Star className="size-12 text-success-secondary" />
            </HeroOrbit>
            <HeroOrbit
              size={590}
              rotation={98}
              shouldOrbit
              orbitDuration="40s"
              shouldSpin
              spinDuration="6s"
            >
              <Icon.Star className="size-8 text-success-secondary" />
            </HeroOrbit>
            <HeroOrbit
              size={525}
              rotation={-58}
              shouldOrbit
              orbitDuration="42s"
              shouldSpin
              spinDuration="7s"
            >
              <Icon.Star className="size-8 text-success-secondary" />
            </HeroOrbit>
            <HeroOrbit size={650} rotation={-5} shouldOrbit orbitDuration="42s">
              <div className="size-2 bg-success-secondary/20 rounded-full"></div>
            </HeroOrbit>
            <HeroOrbit
              size={415}
              rotation={-50}
              shouldOrbit
              orbitDuration="42s"
            >
              <div className="size-2 bg-success-secondary/20 rounded-full"></div>
            </HeroOrbit>
            <HeroOrbit
              size={710}
              rotation={144}
              shouldOrbit
              orbitDuration="44s"
              shouldSpin
              spinDuration="3s"
            >
              <Icon.Sparkle className="size-14 text-success-secondary/20" />
            </HeroOrbit>
            <HeroOrbit
              size={850}
              rotation={-25}
              shouldOrbit
              orbitDuration="46s"
              shouldSpin
              spinDuration="4s"
            >
              <Icon.Sparkle className="size-20 text-success-secondary/20" />
            </HeroOrbit>
            <HeroOrbit size={720} rotation={85} shouldOrbit orbitDuration="46s">
              <div className="size-3 bg-success-secondary/20 rounded-full"></div>
            </HeroOrbit>
            <HeroOrbit
              size={800}
              rotation={-72}
              shouldOrbit
              orbitDuration="48s"
              shouldSpin
              spinDuration="6s"
            >
              <Icon.Star className="size-28 text-success-secondary" />
            </HeroOrbit>
            <HeroOrbit
              size={900}
              rotation={120}
              shouldOrbit
              orbitDuration="50s"
              shouldSpin
              spinDuration="7s"
            >
              <Icon.Star className="size-28 text-success-secondary" />
            </HeroOrbit>
          </div>
        )}
      </div>
      <div className="container">
        <div className="flex flex-col items-center justify-center">
          <Image
            className="size-[100px]"
            src={MemojiComputer}
            alt="MemojiComputer"
          />
          <div className="bg-dark-tertiary border border-dark-default px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
            <div className="bg-success-default size-2.5 rounded-full relative">
              <div className="bg-success-default absolute inset-0 rounded-full animate-ping-large"></div>
            </div>
            <div className="text-sm font-medium">
              Available for new projects
            </div>
          </div>
          <div className="max-w-lg mx-auto">
            <h1 className="font-serif text-3xl md:text-5xl text-center mt-8 mx-6 md:mx-0 tracking-wide">
              I&rsquo;m{" "}
              <span className="tracking-widest bg-gradient-to-r from-success-secondary to-info-default text-center text-transparent bg-clip-text animate-shine shadow-lg glow">
                Jun Mel Rita
              </span>{" "}
            </h1>            <h1 className="font-serif text-4xl md:text-10xs text-center mt-1 mx-6 md:mx-0 tracking-wide">
          
            </h1>

            <p className="mt-4 md:mx-2 mx-4 text-justify text-light-default/80 md:text-sm text-xs">
            Hi, I’m Jun Mel Rita, a passionate software engineer and web developer with a strong foundation in HTML, CSS, JavaScript, Reactjs, Node.js. C#, Java , PHP, Laravel, ASP .NET Framework, Vue.js, MySQL, Python, and Kotlin 
            . While I’m early in my professional journey, I’ve dedicated myself to honing my skills through hands-on projects and continuous learning. I’m eager to apply my creativity and problem-solving abilities to build engaging, user-friendly web experiences. On this site, you’ll find a selection of my work, showcasing my commitment to writing clean, efficient code and delivering high-quality solutions. I’m excited to contribute to innovative projects and grow as a developer.
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
              <a
                href={Resume}
                download="Gabriel-Mendoza-Resume.pdf"
                onClick={handleDownload}
                className={`inline-flex items-center gap-2 border border-light-default/15 px-6 h-12 rounded-xl z-50 relative overflow-clip`}
              >
                {loading ? (
                  <div className="flex flex-col">
                    <div>
                      <span className="font-semibold p-1">{`Downloading ${progress}%`}</span>
                    </div>
                    <div className="w-full bg-light-default/40 rounded-full h-1.5 mt-1 mb-2">
                      <div
                        className="rounded-full bg-gradient-to-r from-success-secondary to-info-default h-full"
                        style={{ width: `${progress}%` }}
                      ></div>
                    </div>
                  </div>
                ) : (
                  <div
                    className="relative group hover:scale-105 duration-300 ease-in-out inline-flex items-center gap-x-3"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                  >
                    <div className="absolute rounded-full group-hover:h-[500px] group-hover:w-[250px] top-0 left-1/2 -translate-x-1/2 group-hover:bg-success-secondary/90 group-hover:[mask-image:radial-gradient(100%_100%_at_bottom_center,black,black_70%,transparent)] group-hover:transition-all group-hover:duration-500 group-hover:ease-in-out"></div>
                    <span className="font-semibold">Download Resume</span>
                    <Icon.ArrowDown
                      className={`size-4 transition-transform duration-500 ${
                        isHovered ? "rotate-90" : "rotate-0"
                      }`}
                    />
                  </div>
                )}
              </a>
              <button
                onClick={handleConnectClick}
                className="hidden md:inline-flex items-center gap-2 border border-light-default bg-light-default text-dark-default h-12 px-6 rounded-xl z-50 hover:bg-gradient-to-r from-success-secondary/60 to-info-default/60 hover:border-transparent pointer-events-none duration-300 ease-in-out"
              >
                <div className="hover:scale-105 duration-300 ease-in-out pointer-events-auto">
                  {showTransformed ? (
                    <div className="inline-flex items-center gap-2">
                      <span className="font-semibold">Let&#39;s Go Back</span>
                      <Image
                        src={BlobSunglasses}
                        alt="BlobSunglasses"
                        className="size-6"
                      />
                    </div>
                  ) : (
                    <div className="inline-flex items-center gap-2">
                      <span className="font-semibold">Let&#39;s Connect</span>
                      <span>👋</span>
                    </div>
                  )}
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
