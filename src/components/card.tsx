import React, { ComponentPropsWithoutRef } from "react";
import { twMerge } from "tailwind-merge";
import { Grain } from "@/assets/images";

export function Card({
  className,
  children,
  ...props
}: ComponentPropsWithoutRef<"div">) {
  return (
    <div
      className={twMerge(
        "bg-dark-default overflow-hidden z-0 rounded-3xl relative after:content-[''] after:absolute after:inset-0 after:z-10 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-light-default/20 after:pointer-events-none",
        className,
      )}
      {...props}
    >
      <div
        className="absolute inset-0 -z-10 opacity-5"
        style={{ backgroundImage: `url(${Grain.src})` }}
      ></div>
      {children}
    </div>
  );
}
