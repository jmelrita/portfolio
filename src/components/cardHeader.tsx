import React from "react";
import { twMerge } from "tailwind-merge";
import { Star } from "@/assets/icons";

export function CardHeader({
  title,
  description,
  className,
  isHovered,
}: {
  title: string;
  description: string;
  className?: string;
  isHovered?: boolean;
}) {
  return (
    <div className={twMerge("flex flex-col p-6 md:py-8 md:px-10", className)}>
      <div className="inline-flex items-center gap-2">
        <Star
          className={twMerge(
            "md:size-9 size-6 text-success-secondary transition-transform duration-300",
            isHovered ? "rotate-45 duration-500 ease-in-out" : "",
          )}
        />
        <h3 className="font-serif md:text-3xl text-xl">{title}</h3>
      </div>
      <p className="text-light-default/60 mt-2 md:text-base text-sm">
        {description}
      </p>
    </div>
  );
}
