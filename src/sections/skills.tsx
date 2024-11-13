"use client";

import React from "react";
import { twMerge } from "tailwind-merge";
import { Star } from "@/assets/icons"; // Assuming Star is an imported component or icon
import {
  FaHtml5,
  FaGithub,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaPython,
  FaJava,
  FaPhp,
  FaGitAlt,
  FaDocker,
  FaDatabase as FaSqlDatabase,
  FaLaravel,
  FaUnity,
} from "react-icons/fa";
import { SiKotlin, SiCsharp, SiCplusplus, SiMysql, SiMongodb, SiPostgresql, SiVuedotjs, SiTypescript } from "react-icons/si"; 

// Spring Boot can be represented with Java icon
// Import Java icon from react-icons
import { FaJava as FaSpringBoot } from "react-icons/fa"; // Reusing Java icon for Spring Boot

const words = [
  { name: "HTML5", icon: <FaHtml5 className="text-red-800 text-3xl" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-600 text-3xl" /> },
  { name: "JavaScript", icon: <FaJsSquare className="text-yellow-500 text-3xl" /> },
  { name: "React Js", icon: <FaReact className="text-blue-500 text-3xl" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-600 text-3xl" /> },
  { name: "Python", icon: <FaPython className="text-blue-500 text-3xl" /> },
  { name: "Java", icon: <FaJava className="text-red-600 text-3xl" /> },
  { name: "PHP", icon: <FaPhp className="text-blue-700 text-3xl" /> },
  { name: "Kotlin", icon: <SiKotlin className="text-indigo-600 text-3xl" /> },
  { name: "C#", icon: <SiCsharp className="text-blue-600 text-3xl" /> },
  { name: "C++", icon: <SiCplusplus className="text-blue-500 text-3xl" /> },
  { name: "MySQL", icon: <SiMysql className="text-orange-600 text-3xl" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-600 text-3xl" /> },
  { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-500 text-3xl" /> },
  { name: "SQLite", icon: <FaSqlDatabase className="text-black text-3xl" /> },
  { name: "Vue.js", icon: <SiVuedotjs className="text-green-600 text-3xl" /> },
  { name: "Laravel", icon: <FaLaravel className="text-red-500 text-3xl" /> },
  { name: "Express.js", icon: <FaNodeJs className="text-green-600 text-3xl" /> },
  { name: "Spring Boot", icon: <FaSpringBoot className="text-orange-600 text-3xl" /> },
  { name: "Git", icon: <FaGitAlt className="text-orange-600 text-3xl" /> },
  { name: "GitHub", icon: <FaGithub className="text-black text-3xl" /> },
  { name: "Docker", icon: <FaDocker className="text-blue-400 text-3xl" /> },
  { name: "Unity", icon: <FaUnity className="text-black text-3xl" /> },
  // Replace Django's icon with the Python icon or a custom one
  { name: "Django", icon: <FaPython className="text-blue-500 text-3xl" /> },  // Django is Python-based
  // Add TypeScript skill
  { name: "TypeScript", icon: <SiTypescript className="text-blue-600 text-3xl" /> },
];

export function Skills({
  className,
  animateClassName,
}: {
  className?: string;
  animateClassName?: string;
}) {
  return (
    <section className="py-16 lg:py-4 overflow-x-clip">
      <div
        className={twMerge(
          "bg-gradient-to-r from-success-secondary to-info-default -mx-1",
          className
        )}
      >
        <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div
            className={twMerge(
              "flex flex-none gap-4 pr-4 py-3 [animation-duration:50s] ",
              animateClassName
            )}
          >
            {[...new Array(2)].fill(0).map((_, index) => (
              <React.Fragment key={index}>
                {words.map((word, i) => (
                  <div key={i} className="inline-flex gap-5 items-center">
                    {/* Render the icon */}
                    <span>{word.icon}</span>

                    {/* Conditionally render the name, if it exists */}
                    {word.name && (
                      <span className="text-dark-default uppercase font-extrabold text-sm">
                        {word.name}
                      </span>
                    )}

                    {/* Optionally render a Star icon */}
                    <Star className="size-6 text-dark-default -rotate-12" />
                  </div>
                ))}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
