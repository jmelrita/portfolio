import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeader, Card, CardHeader, ToolboxItems } from "@/components";
import * as Icon from "@/assets/icons";
import { Music, Map, MemojiSmile, Mel, MonaCat } from "@/assets/images";

const toolBoxItems1 = [
  {
    title: "VsCode",
    iconType: Icon.VsCode,
  },
  {
    title: "JavaScript",
    iconType: Icon.Javascript,
  },
  {
    title: "HTML5",
    iconType: Icon.HTML5,
  },
  {
    title: "CSS3",
    iconType: Icon.CSS3,
  },
  {
    title: "React",
    iconType: Icon.ReactIcon,
  },
  {
    title: "Chrome",
    iconType: Icon.Chrome,
  },
  {
    title: "Github",
    iconType: Icon.Github,
  },
  {
    title: "Typescript",
    iconType: Icon.Typescript,
  },
  {
    title: "Android Studio",
    iconType: Icon.AndroidStudio,
  },
  {
    title: "Angular",
    iconType: Icon.Angular,
  },
  {
    title: "Bootstrap",
    iconType: Icon.Bootstrap,
  },
  {
    title: "Express",
    iconType: Icon.Express,
  },
  {
    title: "Git",
    iconType: Icon.Git,
  },
  {
    title: "GitIgnore",
    iconType: Icon.GitIgnore,
  },
  {
    title: "Github Pages",
    iconType: Icon.GithubPages,
  },
  {
    title: "jQuery",
    iconType: Icon.JQuery,
  },
  {
    title: "Laravel",
    iconType: Icon.Laravel,
  },
  {
    title: "MariaDB",
    iconType: Icon.MariaDB,
  },
];

const toolBoxItems2 = [
  {
    title: "MongoDB",
    iconType: Icon.MongoDB,
  },
  {
    title: "Mongoose",
    iconType: Icon.Mongoose,
  },
  {
    title: "MySQL",
    iconType: Icon.Mysql,
  },
  {
    title: "Next",
    iconType: Icon.Next,
  },
  {
    title: "Node",
    iconType: Icon.Node,
  },
  {
    title: "Npm",
    iconType: Icon.Npm,
  },
  {
    title: "Php",
    iconType: Icon.Php,
  },
  {
    title: "PostgreSql",
    iconType: Icon.PostgreSql,
  },
  {
    title: "Prisma",
    iconType: Icon.Prisma,
  },
  {
    title: "Render",
    iconType: Icon.Render,
  },
  {
    title: "Sass",
    iconType: Icon.Sass,
  },
  {
    title: "Tailwind",
    iconType: Icon.Tailwind,
  },
  {
    title: "Vercel",
    iconType: Icon.Vercel,
  },
  {
    title: "Vue",
    iconType: Icon.Vue,
  },
  {
    title: "Wix",
    iconType: Icon.Wix,
  },
  {
    title: "WordPress",
    iconType: Icon.Wordpress,
  },
  {
    title: "Xampp",
    iconType: Icon.Xampp,
  },
  {
    title: "PostCss",
    iconType: Icon.PostCss,
  },
  {
    title: "Vite",
    iconType: Icon.Vite,
  },
];

const hobbies = [
  {
    title: "Movie",
    emoji: "🎥",
    left: "3%",
    top: "3%",
  },
  {
    title: "Photography",
    emoji: "📸",
    left: "3%",
    top: "35%",
  },
  {
    title: "Guitar",
    emoji: "🎸",
    left: "75%",
    top: "3%",
  },
  {
    title: "Gaming",
    emoji: "🎮",
    left: "39%",
    top: "3%",
  },
  {
    title: "Basketball",
    emoji: "🏀",
    left: "3%",
    top: "65%",
  },
  {
    title: "Music",
    emoji: "🎵",
    left: "75%",
    top: "65%",
  },
  {
    title: "Fitness",
    emoji: "🏋",
    left: "40%",
    top: "35%",
  },
  {
    title: "Badminton",
    emoji: "🏸",
    left: "70%",
    top: "35%",
  },
  {
    title: "Reading",
    emoji: "📚",
    left: "40%",
    top: "65%",
  },
];

export function About() {
  const [isHovered, setIsHovered] = useState(false);
  const [isToolboxHovered, setIsToolboxHovered] = useState(false);
  const [isBeyondHovered, setIsBeyondHovered] = useState(false);
  const constraintsRef = React.useRef(null);

  return (
    <div className="py-20 lg:py-28 overflow-x-hidden">
      <div className="container">
        <SectionHeader
          eyebrow="About Me"
          title="The Innovative thinker with big dreams"
          description="Learn more about who I am, what I do, and what inspires me."
        />
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-x-10 items-center xs:mx-2 sm:mx-0">
          <div className="relative">
            <div className="hover:scale-105 duration-500 ease-in-out bg-light-default border-2 border-light-default/60 rounded-lg p-2 transform md:rotate-6 rotate-3">
              <Image src={Mel} alt="MelShades" className="rounded-lg" />
            </div>
          </div>
          <div>
            <p className="text-lg pt-10 text-justify sm:text-base">
              Experienced Software Engineer and Web Developer  with internship specializing in crafting
              seamless user experiences, backend development, mobile app
              creation, and scalable solutions. Committed to continuous learning
              and professional growth, actively engaging in tech communities,
              volunteering, and attending industry seminars, while consistently
              delivering high-quality, innovative results that solve complex
              challenges.
            </p>
            <div>
              <motion.div
                animate={{
                  x: [0, "85%", 0],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative"
              >
                <Image
                  src={MonaCat}
                  alt="Mona Cat"
                  width={100}
                  height={100}
                  className="hover:scale-110 duration-500 ease-in-out"
                />
              </motion.div>
            </div>
          </div>
        </div>
        <div className="mt-20 flex flex-col gap-8 xs:mx-2 sm:mx-0">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 lg:grid-cols-3">
            <Card className="h-[320px] md:col-span-2 lg:col-span-1">
              <a href="https://movies-self-theta.vercel.app/#/">
                <CardHeader
                  title="My Music"
                  description="Discover the music that inspires and shapes my journey."
                  isHovered={isHovered}
                />
                <div className="md:w-64 w-[17.5rem] mx-auto mt-2 md:mt-0 relative group pointer-events-none">
                  <div className="absolute rounded-full h-[450px] w-[600px] bottom-0 left-1/2 -translate-x-1/2 bg-success-secondary/70 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10 transition-all duration-500 ease-in-out group-hover:h-[515px] md:group-hover:h-[535px] group-hover:w-[700px] group-hover:bg-success-secondary/85"></div>
                  <Image
                    src={Music}
                    alt="Music"
                    className="hover:-translate-y-1 md:hover:translate-y-3 transition-transform duration-500 ease-in-out md:hover:scale-[1.175] hover:scale-110 relative z-10 pointer-events-auto cursor-pointer"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                  />
                </div>
              </a>
            </Card>
            <Card className="h-[320px] md:col-span-3 lg:col-span-2">
              <CardHeader
                title="My Toolbox"
                description="Explore the technologies and tools I use to craft exceptional digital experiences."
                isHovered={isToolboxHovered}
              />
              <span
                onMouseEnter={() => setIsToolboxHovered(true)}
                onMouseLeave={() => setIsToolboxHovered(false)}
                className="m-0 p-0"
              >
                <ToolboxItems
                  items={toolBoxItems1}
                  itemsWrapperClassName="animate-move-left [animation-duration:120s] hover:[animation-play-state:paused]"
                />
              </span>
              <span
                onMouseEnter={() => setIsToolboxHovered(true)}
                onMouseLeave={() => setIsToolboxHovered(false)}
                className="m-0 p-0"
              >
                <ToolboxItems
                  items={toolBoxItems2}
                  className="mt-6"
                  itemsWrapperClassName="-translate-x-1/2 animate-move-right [animation-duration:120s] hover:[animation-play-state:paused]"
                />
              </span>
            </Card>
          </div>
          <div className="grid gap-8 grid-cols-1 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
              <CardHeader
                title="Beyond the Code"
                description="Explore my interests and hobbies beyond the digital realm."
                className="p-6"
                isHovered={isBeyondHovered}
              />
              <div className="relative flex-1" ref={constraintsRef}>
                {hobbies.map((hobby) => (
                  <motion.div
                    key={hobby.title}
                    className="inline-flex justify-center items-center gap-2 px-6 bg-gradient-to-r from-success-secondary to-info-default rounded-full py-1.5 absolute cursor-pointer"
                    style={{
                      left: hobby.left,
                      top: hobby.top,
                    }}
                    drag
                    dragConstraints={constraintsRef}
                    onHoverStart={() => setIsBeyondHovered(true)}
                    onHoverEnd={() => setIsBeyondHovered(false)}
                    onDragStart={() => setIsBeyondHovered(true)}
                    onDragEnd={() => setIsBeyondHovered(false)}
                  >
                    <span className="font-medium text-dark-tertiary md:text-base text-xs">
                      {hobby.title}
                    </span>
                    <span className="md:text-base text-xs">{hobby.emoji}</span>
                  </motion.div>
                ))}
              </div>
            </Card>
            <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1 cursor-pointer">
              <a
                href="https://www.google.com/maps?q=Singalong+st+malate+manila&FORM=HDRSC6&cp=14.573766~120.993891&lvl=16.6"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={Map}
                  alt="Map"
                  className="h-full w-full object-cover object-left-top"
                />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full  after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-dark-tertiary/30">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-success-secondary to-info-default -z-20 animate-ping [animation-duration:2s]"></div>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-success-secondary to-info-default -z-10"></div>
                  <Image
                    src={MemojiSmile}
                    alt="Memoji Smile"
                    className="size-20"
                  />
                </div>
              </a>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
