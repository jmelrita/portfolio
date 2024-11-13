"use client";

import React from "react";
import Image from "next/image";
import { Card } from "@/components";
import { ArrowUpRight } from "@/assets/icons";
import { Grain, Gab } from "@/assets/images";

export function Contact() {
  const [hoveredButton, setHoveredButton] = React.useState<string | null>(null);
  const [hoveredContactButton, setHoveredContactButton] =
    React.useState<boolean>(false);
  const [isFormVisible, setFormVisible] = React.useState(false);

  const handleContactClick = () => {
    setFormVisible(!isFormVisible);
  };

  return (
    <div className="pb-16 pt-12 lg:pb-24 lg:pt-20 xs:mx-2 sm:mx-0 z-0">
      <div className="container">
        <div className="bg-gradient-to-r from-success-secondary to-info-default text-dark-variant py-8 px-10 rounded-3xl text-center md:text-left relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-5 -z-10"
            style={{
              backgroundImage: `url(${Grain.src})`,
            }}
          ></div>
          <div className="flex flex-col md:flex-row gap-8 items-center md:gap-16">
            <div>
              <h2 className="font-serif text-lg md:text-2xl lg:text-3xl">
                Let&#39;s create something amazing together
              </h2>
              <p className="text-sm md:text-base mt-2">
                Ready to bring your next project to life? Let&#39;s connect and
                discuss how I can help you achieve your goals.
              </p>
            </div>
            <div
              onClick={handleContactClick}
              className="cursor-pointer pointer-events-auto z-50"
              onMouseEnter={() => setHoveredContactButton(true)}
              onMouseLeave={() => setHoveredContactButton(false)}
            >
              <button
                type="button"
                className="text-light-default bg-dark-variant inline-flex items-center px-6 h-12 rounded-xl gap-2 w-max border border-dark-variant cursor-pointer"
              >
                <span className="font-semibold">
                  {isFormVisible ? "Close" : "Contact Me"}
                </span>
                <ArrowUpRight
                  className={`size-4 transition-transform duration-500 ${
                    hoveredContactButton ? "rotate-[225deg]" : "rotate-0"
                  }`}
                />
              </button>
            </div>
          </div>
        </div>

        {isFormVisible && (
          <div className="mt-10 lg:mb-12 md:mb-4 grid grid-cols-1 lg:grid-cols-2 lg:gap-8 gap-10">
            <Card className="pb-6">
              <div className="flex justify-center mb-6">
                <Image
                  src={Gab}
                  alt="Gabriel Mendoza"
                  layout="responsive"
                  className="hover:scale-105 duration-500 ease-in-out object-cover"
                />
              </div>
              <div className="text-center px-6">
                <h2 className="uppercase font-semibold tracking-widest bg-gradient-to-r from-success-secondary to-info-default text-center text-transparent bg-clip-text mx-2 md:text-2xl">
                  Gabriel Mendoza
                </h2>
                <p className="font-serif mt-1 md:text-xl">
                  Full Stack Developer
                </p>
                <p className="mt-4 md:text-base text-sm text-justify">
                  Let&#39;s make your project a reality together! With extensive
                  experience in full-stack development and a commitment to
                  creating innovative solutions, I deliver results that fit your
                  specific needs. Whether you&#39;re launching a new app or
                  upgrading an existing one, I&#39;m ready to assist you every
                  step of the way.
                </p>
              </div>
            </Card>

            <Card className="p-6">
              <form
                action="https://getform.io/f/66bad9b1-3e7b-445e-a0a5-add0122bc6a3"
                method="POST"
                encType="multipart/form-data"
              >
                <div className="grid gap-4">
                  <div className="flex flex-col">
                    <label className="py-2 text-lg tracking-wide">Name</label>
                    <input
                      className="py-1.5 px-2.5 font-normal rounded-lg bg-light-default text-dark-tertiary outline-none"
                      type="text"
                      name="name"
                      required
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="py-2 text-lg tracking-wide">
                      Phone Number
                    </label>
                    <input
                      className="py-1.5 px-2.5 font-normal rounded-lg bg-light-default text-dark-tertiary outline-none"
                      type="text"
                      name="phone"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="py-2 text-lg tracking-wide">Email</label>
                    <input
                      className="py-1.5 px-2.5 font-normal rounded-lg bg-light-default text-dark-tertiary outline-none"
                      type="email"
                      name="email"
                      required
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="py-2 text-lg tracking-wide">
                      Subject
                    </label>
                    <input
                      className="py-1.5 px-2.5 font-normal rounded-lg bg-light-default text-dark-tertiary outline-none"
                      type="text"
                      name="subject"
                      required
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="py-2 text-lg tracking-wide">
                      Message
                    </label>
                    <textarea
                      className="py-1.5 px-2.5 font-normal rounded-lg bg-light-default text-dark-tertiary outline-none"
                      rows={5}
                      name="message"
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="bg-light-default text-dark-tertiary h-12 w-full rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8 md:w-auto px-6 hover:bg-gradient-to-r from-success-secondary/60 to-info-default/60 hover:border-transparent duration-300 ease-in-out pointer-events-auto z-[1000]"
                    onMouseEnter={() => setHoveredButton("Send Message")}
                    onMouseLeave={() => setHoveredButton(null)}
                  >
                    <span className="inline-flex items-center gap-2 hover:scale-105 duration-300 ease-in-out">
                      <span>Send Message</span>
                      <ArrowUpRight
                        className={`size-4 transition-transform duration-500 ${
                          hoveredButton === "Send Message"
                            ? "rotate-[225deg]"
                            : "rotate-0"
                        }`}
                      />
                    </span>
                  </button>
                </div>
              </form>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}
