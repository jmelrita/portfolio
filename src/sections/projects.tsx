"use client";

import React from "react";
import Image from "next/image";
import * as Mockup from "@/assets/images";
import { CheckCircle, ArrowUpRight } from "@/assets/icons";
import { SectionHeader, Card } from "@/components";

const portfolioProjects = [
  {
    company: "FreeTime",
    year: "Present",
    title: "Own Projects",
    results: [
      {
        title: "Focused on backend with Node, Express, Nest, Fastify",
      },
      {
        title: "Developed frontend with React, Next, Angular, Vue",
      },
      { title: "Integrated databases with MongoDB, PostgreSQL, MySQL" },
    ],
    link: "https://github.com/GabTheGreat25/OwnProjects",
    linkTitle: "Visit Source Code",
    image: Mockup.OwnProjects,
  },
  {
    company: "Freelance",
    year: "2024",
    title: "E-Learning Platform",
    results: [
      {
        title:
          "Built the frontend using React, Vite, and Million.js for optimal performance",
      },
      {
        title:
          "Styled with Tailwind CSS and DaisyUI for a responsive user interface",
      },
      {
        title:
          "Managed state and data fetching with Redux Toolkit and RTK Query",
      },
    ],
    link: "https://github.com/GabTheGreat25/E-Learning-Freelance-Frontend",
    linkTitle: "Visit Source Code",
    image: Mockup.ELearning,
  },
  {
    company: "Freelance",
    year: "2024",
    title: "Quick Forms Api",
    results: [
      { title: "Developed backend using Express, Node.js, and MongoDB" },
      {
        title:
          "Implemented clean architecture, Cloudinary integration, and email services",
      },
      {
        title:
          "Utilized Postman for testing and applied RBAC using MongoDB discriminators",
      },
    ],
    link: "https://github.com/GabTheGreat25/Quick-Formsl-Freelance-Backend",
    linkTitle: "Visit Source Code",
    image: Mockup.QuickForms,
  },
  {
    company: "Thesis",
    year: "2024",
    title: "Lhanlee Beauty Lounge",
    results: [
      {
        title:
          "Built with MERN stack, enhanced by Million.js and Redux Toolkit",
      },
      {
        title:
          "Integrated PayMaya payments, Twilio notifications, and React Native",
      },
      { title: "UI powered by Tailwind CSS, hosted on Render and Vercel" },
    ],
    link: "https://www.lhanlee-salon.com",
    linkTitle: "Visit Live Site",
    image: Mockup.LhanleeSalon,
  },
  {
    company: "School Project",
    year: "2023",
    title: "Camera Rental",
    results: [
      {
        title:
          "Developed with MERN stack, enhanced by Redux Toolkit and RTK Query",
      },
      {
        title:
          "Integrated Material-UI for a responsive and modern user interface",
      },
      { title: "Backend hosted on Render, frontend deployed via Vercel" },
    ],

    link: "https://camera-rental-fe.vercel.app",
    linkTitle: "Visit Live Site",
    image: Mockup.CameraRental,
  },
  {
    company: "School Project",
    year: "2023",
    title: "Final-Project-ITOS322-T",
    results: [
      {
        title:
          "Built with Tailwind, SCSS, HTML, and JavaScript for flexibility",
      },
      { title: "Tailwind and SCSS enabled a modern, responsive design" },
      { title: "Deployed the application using GitHub Pages for easy access" },
    ],
    link: "https://gabthegreat25.github.io/Final-Project-ITOS322-T",
    linkTitle: "Visit Live Site",
    image: Mockup.VloggersTv,
  },
  {
    company: "Web 3 Hackathon",
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
    title: "Laravel Pet Care",
    results: [
      { title: "Built with Laravel for both backend and frontend development" },
      { title: "Styled with Tailwind to achieve a modern, responsive design" },
      { title: "Enhanced interactivity using JavaScript for dynamic features" },
    ],

    link: "https://github.com/GabTheGreat25/Laravel-Pet-Care",
    linkTitle: "Visit Source Code",
    image: Mockup.PetCare,
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

    link: "https://github.com/GabTheGreat25/php_pet_clinic",
    linkTitle: "Visit Source Code",
    image: Mockup.PetClinic,
  },
  {
    company: "Freelance",
    year: "2022",
    title: "Vloggers TV",
    results: [
      {
        title: "Built the frontend with Angular for a dynamic user experience",
      },
      {
        title:
          "Styled using SCSS and Tailwind for a cohesive, responsive design",
      },
      {
        title: "Collaborated on UI/UX design in Figma to ensure visual appeal",
      },
    ],

    link: "https://github.com/GabTheGreat25/VloggersTV",
    linkTitle: "Visit Source Code",
    image: Mockup.Vloggers,
  },
  {
    company: "Freelance",
    year: "2022",
    title: "Maya CLI",
    results: [
      {
        title: "Developed the frontend using Angular for a dynamic application",
      },
      {
        title:
          "Styled with SCSS and Tailwind to ensure a modern, responsive UI",
      },
      {
        title:
          "Led design efforts in Figma for a cohesive and appealing interface",
      },
    ],
    link: "https://github.com/GabTheGreat25/cli",
    linkTitle: "Visit Source Code",
    image: Mockup.MayaCli,
  },
  {
    company: "Freelance",
    year: "2022",
    title: "Yahu",
    results: [
      {
        title:
          "Implemented the frontend with Angular for dynamic functionality",
      },
      {
        title:
          "Styled the application using SCSS and Tailwind for responsiveness",
      },
      {
        title:
          "Contributed to design with Figma for a cohesive and modern interface",
      },
    ],
    link: "https://github.com/GabTheGreat25/yahu-rider-web",
    linkTitle: "Visit Source Code",
    image: Mockup.Yahu,
  },
  {
    company: "Freelance",
    year: "2022",
    title: "Promdi Farm",
    results: [
      {
        title: "Built the frontend using Angular for a dynamic web experience",
      },
      { title: "Styled the application with SCSS for a customizable design" },
      { title: "Added design elements and logic to ensure responsiveness" },
    ],
    link: "https://github.com/GabTheGreat25/prodifarm-web",
    linkTitle: "Visit Source Code",
    image: Mockup.PromdiFarm,
  },
  {
    company: "School Project",
    year: "2022",
    title: "Basics of HTML",
    results: [
      {
        title: "Developed using HTML and CSS to teach foundational web skills",
      },
      {
        title:
          "Styled the application to create a responsive, user-friendly design",
      },
      {
        title:
          "Enhanced functionality with design elements and interactive logic",
      },
    ],
    link: "https://gabthegreat25.github.io/Everything-You-Need-To-Know-About-HTML5",
    linkTitle: "Visit Live Site",
    image: Mockup.BasicsOfHtml,
  },
  {
    company: "School Project",
    year: "2022",
    title: "TUP Website",
    results: [
      {
        title:
          "Built my first website using HTML and CSS for structure and style",
      },
      {
        title:
          "Developed a well-organized layout with visually appealing design",
      },
      {
        title:
          "Enhanced the site with carefully implemented features and elements",
      },
    ],
    link: "https://gabthegreat25.github.io/First_Website/index.html",
    linkTitle: "Visit Live Site",
    image: Mockup.Tup,
  },
];

const PROJECTS_PER_PAGE = 3;

export function Projects() {
  const [hoveredButton, setHoveredButton] = React.useState<string | null>(null);
  const [currentPage, setCurrentPage] = React.useState(0);
  const autoPlayRef = React.useRef<NodeJS.Timeout | null>(null);

  const totalPageCount = Math.ceil(
    portfolioProjects.length / PROJECTS_PER_PAGE,
  );

  const startIndex = currentPage * PROJECTS_PER_PAGE;
  const visibleProjects = portfolioProjects.slice(
    startIndex,
    startIndex + PROJECTS_PER_PAGE,
  );

  const resetAutoPlay = () => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }
    autoPlayRef.current = setInterval(() => {
      setCurrentPage((prevPage) => (prevPage + 1) % totalPageCount);
    }, 30000);
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => (prevPage + 1) % totalPageCount);
    resetAutoPlay();
  };

  const handlePreviousPage = () => {
    setCurrentPage(
      (prevPage) => (prevPage - 1 + totalPageCount) % totalPageCount,
    );
    resetAutoPlay();
  };

  React.useEffect(() => {
    resetAutoPlay();
    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [resetAutoPlay]);

  return (
    <div className="pb-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="2 Years Of Freelance Results"
          title="Featured Projects"
          description="Discover the creative solutions I've crafted to bring ideas to life."
        />
        <div className="flex flex-col mt-10 gap-10 md:mt-20">
          {visibleProjects.map((project, index) => (
            <Card
              key={project.title}
              className="px-8 pb-0 md:px-10 xs:mx-2 sm:mx-0 pt-8 md:pt-12 lg:pt-16 lg:px-20 group lg:h-[30rem] md:h-[40rem] h-[31rem] sticky"
              style={{
                top: `calc(100px + ${index * 30}px)`,
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
                      <li
                        key={result.title}
                        className="flex items-center gap-4 text-xs md:text-base text-light-default/50"
                      >
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
                        <span className="md:text-base text-sm">
                          {project.linkTitle}
                        </span>
                        <ArrowUpRight
                          className={`size-4 transition-transform duration-500 ${
                            hoveredButton === project.title
                              ? "rotate-[225deg]"
                              : "rotate-0"
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
        <div className="flex items-center justify-between gap-4 mt-8 font-serif">
          <button
            onClick={handlePreviousPage}
            className="bg-secondary-default text-light-default h-12 w-full rounded-xl font-semibold inline-flex items-center justify-start gap-2 md:w-auto px-6"
          >
            <p className="tracking-widest lg:text-3xl md:text-2xl text-lg font-semibold bg-gradient-to-r from-success-secondary to-info-default text-start text-transparent bg-clip-text hover:scale-110 duration-300 ease-in-out">
              Previous
            </p>
          </button>
          <button
            onClick={handleNextPage}
            className="bg-primary-default text-light-default h-12 w-full rounded-xl font-semibold inline-flex items-center justify-end gap-2 md:w-auto px-6"
          >
            <p className="tracking-widest lg:text-3xl md:text-2xl text-lg font-semibold bg-gradient-to-r from-success-secondary to-info-default text-end text-transparent bg-clip-text hover:scale-110 duration-300 ease-in-out">
              Next
            </p>
          </button>
        </div>
      </div>
    </div>
  );
}
