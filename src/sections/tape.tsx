"use client";

import React from "react";
import { twMerge } from "tailwind-merge";
import { Star } from "@/assets/icons";

const words = [
  "Innovative",
  "Efficient",
  "Dynamic",
  "Collaborative",
  "Versatile",
  "Scalable",
  "Optimized",
  "Responsive",
  "Creative",
  "Modern",
  "Adaptable",
  "Cutting-edge",
  "Strategic",
  "Impactful",
  "Structured",
  "Agile",
  "Seamless",
  "User-focused",
  "Progressive",
  "Intuitive",
  "Robust",
  "Detailed",
  "Reliable",
  "Driven",
  "Passionate",
  "Technological",
  "Focused",
  "Resourceful",
  "Original",
  "Ambitious",
  "Sustainable",
];

export function Tape({
  className,
  animateClassName,
}: {
  className?: string;
  animateClassName?: string;
}) {
  return (
    <section className="py-16 lg:py-24 overflow-x-clip">
      <div
        className={twMerge(
          "bg-gradient-to-r from-success-secondary to-info-default -mx-1",
          className,
        )}
      >
        <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div
            className={twMerge(
              "flex flex-none gap-4 pr-4 py-3 [animation-duration:60s]",
              animateClassName,
            )}
          >
            {[...new Array(2)].fill(0).map((_, index) => (
              <React.Fragment key={index}>
                {words.map((word) => (
                  <div key={word} className="inline-flex gap-4 items-center">
                    <span className="text-dark-default uppercase font-extrabold text-sm">
                      {word}
                    </span>
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
