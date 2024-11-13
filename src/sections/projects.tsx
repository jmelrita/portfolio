"use client";

import React from "react";
import Image from "next/image";
import * as Mockup from "@/assets/images";
import { CheckCircle, ArrowUpRight } from "@/assets/icons";
import { SectionHeader, Card } from "@/components";

const portfolioProjects = [
  {
    company: "Self Project",
    year: "2024",
    title: "Own Projects",
    results: [
      { title: "Focused on backend with Node, Express" },
      { title: "Developed frontend with React, Next, Vue" },
      { title: "Databases of MongoDB, MySQL" },
    ],
    link: "https://github.com/jmelrita/ownproject",
    linkTitle: "Visit Source Code",
    image: Mockup.OwnProjects,
  },
  {
    company: "Capstone Project",
    year: "2024",
    title: "Pa-Healot",
    results: [
      { title: "Built with MERN stack" },
      { title: "Integrated Gcash payments, Twilio notifications, and React JS" },
      { title: "UI powered by Tailwind CSS, hosted on Vercel" },
    ],
    link: "https://github.com/jmelrita/pa-healot",
    linkTitle: "Visit Live Site",
    image: Mockup.pahealot,
  },
  {
    company: "Figma Crypto",
    year: "2023",
    title: "BAUCHA Crypto Voucher",
    results: [
      { title: "Contributed to the frontend development using React" },
      { title: "Collaborated on UI/UX design with Figma for a cohesive look" },
      { title: "Gained hands-on experience in a hackathon team environment" },
    ],
    link: "https://www.figma.com/design/GuV6hEJOj63s1QcWl8GWZr/crypto-8?node-id=0-1&t=RBekDImdGqaM1r6P-0",
    linkTitle: "Visit Figma Design",
    image: Mockup.Baucha,
  },
  
  {
    company: "School Project",
    year: "2022",
    title: "Php Pet Clinic",
    results: [
      { title: "Developed using PHP for robust backend functionality" },
      { title: "Styled with CSS to achieve a responsive and modern design" },
      { title: "Enhanced interactivity with HTML and JavaScript integration" },
    ],
    link: "https://github.com/jmelrita/petclinic",
    linkTitle: "Visit Source Code",
    image: Mockup.PetClinic,
  },
  {
    company: "School Project",
    year: "2022",
    title: "Flex IT",
    results: [
      { title: "Developed using Javascript, HTML AND CSS "},
      { title: "Styled with CSS to achieve a responsive and modern design" },
      { title: "Enhanced interactivity with HTML and JavaScript " },
    ],
    link: "https://jmelrita.github.io/ritaflexit.github.io/",
    linkTitle: "Visit Source Code",
    image: Mockup.flexit,
  },
  {
    company: "Tic Tac Toe",
    year: "2022",
    title: "Tic Tac Toe",
    results: [
      { title: "Developed using Javascript" },
      { title: "Styled with CSS to achieve a responsive and modern design" },
      { title: "Enhanced interactivity with HTML and JavaScript, JQUERY, JSON" },
    ],
    link: "https://jmel.vercel.app/javascript/game.html",
    linkTitle: "Visit Source Code",
    image: Mockup.tictactoe,
  },
  {
    company: "API",
    year: "2022",
    title: "Weather Forecast",
    results: [
      { title: "Implemented the frontend with Javascript for dynamic functionality" },
      { title: "Styled the application using CSS for responsiveness" },
      { title: "API forecast" },
    ],
    link: "https://jmel.vercel.app/api/forecast.html",
    linkTitle: "Visit Source Code",
    image: Mockup.weather,
  },

  {
    company: "School Project",
    year: "2022",
    title: "Calculator Numpad",
    results: [
      { title: "Works also numpad operators" },
      { title: "Developed a well-organized layout with visually appealing design" },
      { title: "Enhanced the site with carefully implemented features and elements" },
    ],
    link: "https://jmel.vercel.app/javascript/calculator.html",
    linkTitle: "Visit Live Site",
    image: Mockup.calculator,
  },
  {
    company: "API",
    year: "2020",
    title: "API GeoLocation",
    results: [
      { title: "Built the frontend using Javascript for a dynamic web experience" },
      { title: "Searching location track" },
      { title: "GeoLocation API" },
    ],
    link: "https://jmel.vercel.app/api/location.html",
    linkTitle: "Visit Source Code",
    image: Mockup.location,
  },
  {
    company: "API",
    year: "2020",
    title: "API Recipe Finder",
    results: [
      { title: "Built the frontend using Javascript for a dynamic web experience" },
      { title: "Searching recipe " },
      { title: "Recipe Finder API" },
    ],
    link: "https://jmel.vercel.app/api/location.html",
    linkTitle: "Visit Source Code",
    image: Mockup.recipe,
  },
];

const PROJECTS_PER_PAGE = 15;

export function Projects() {
  const [hoveredButton, setHoveredButton] = React.useState<string | null>(null);
  const [currentPage, setCurrentPage] = React.useState(0);

  const totalPageCount = Math.ceil(portfolioProjects.length / PROJECTS_PER_PAGE);

  const startIndex = currentPage * PROJECTS_PER_PAGE;
  const visibleProjects = portfolioProjects.slice(startIndex, startIndex + PROJECTS_PER_PAGE);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => (prevPage + 1) % totalPageCount);
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => (prevPage - 1 + totalPageCount) % totalPageCount);
  };

  return (
    <div className="pb-10 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="BSIT-4"
          title="Featured Projects"
          description="Discover the creative solutions I've crafted to bring ideas to life."
        />
        <div className="flex flex-col mt-1 gap-1 md:mt-10">
          {visibleProjects.map((project, index) => (
            <Card
              key={project.title}
              className="px-8 pb-0 md:px-10 xs:mx-2 sm:mx-0 pt-8 md:pt-12 lg:pt-16 lg:px-20 group lg:h-[30rem] md:h-[40rem] h-[31rem] sticky"
              style={{
                top: `calc(8px + ${index * 30}px)`,
              }}
            >
              <div className="lg:grid lg:grid-cols-2">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-success-secondary to-info-default inline-flex font-bold uppercase tracking-widest text-sm gap-2 text-transparent bg-clip-text">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="font-serif text-xl mt-2 md:mt-5 md:text-4xl lg:text-3xl">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-light-default/5 mt-4" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result) => (
                      <li key={result.title} className="flex items-center gap-4 text-xs md:text-base text-light-default/50">
                        <CheckCircle className="size-6 flex-shrink-0" />
                        <span className="flex-1">{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={project.link}
                    onMouseEnter={() => setHoveredButton(project.title)}
                    onMouseLeave={() => setHoveredButton(null)}
                    className="flex items-center justify-center md:justify-start"
                  >
                    <button className="bg-light-default text-dark-tertiary h-12 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8 md:w-auto px-6 hover:bg-gradient-to-r from-success-secondary/60 to-info-default/60 hover:border-transparent duration-300 ease-in-out pointer-events-none">
                      <span className="inline-flex items-center gap-2 hover:scale-105 duration-300 ease-in-out pointer-events-auto">
                        <span className="md:text-base text-sm">{project.linkTitle}</span>
                        <ArrowUpRight
                          className={`size-4 transition-transform duration-500 ${
                            hoveredButton === project.title ? "rotate-[225deg]" : "rotate-0"
                          }`}
                        />
                      </span>
                    </button>
                  </a>
                </div>
                <div className="relative group-hover:scale-105 md:-mb-[6.25rem] -mb-12 duration-700 ease-in-out">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
