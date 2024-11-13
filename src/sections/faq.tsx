import React, { useState } from "react";
import { SectionHeader, Card } from "@/components";
import { ArrowUpRight } from "@/assets/icons";

const faqItems1 = [
  {
    question: "Are you available for work programming projects?",
    answer:
      "Yes, I am currently accepting work programming projects. I focus on delivering high-quality work and enjoy collaborating with clients to create innovative solutions. If you have a project in mind, feel free to reach out to discuss the details.",
  },
  {
    question:
      "What do you consider when deciding your rates for working projects?",
    answer:
      "My pricing varies based on the project's complexity and scope. I provide a detailed quote after understanding your specific requirements, ensuring transparency and no hidden fees. Let's discuss your project to determine the best approach.",
  },
  {
    question: "How do you manage project deadlines and communication?",
    answer:
      "I use tools like Trello for project management and Slack for real-time communication. I believe in setting clear deadlines and maintaining open lines of communication to ensure projects stay on track.",
  },
];

const faqItems2 = [
  {
    question: "What is your preferred method of communication with clients?",
    answer:
      "I prefer using Viber and Gmail for client communication. This allows for clear and efficient exchanges, ensuring that I can promptly address any questions or feedback throughout the project.",
  },
  {
    question:
      "Are you willing to take on urgent projects that require quick turnaround times?",
    answer:
      "Yes, I am open to taking on urgent projects. My ability to accommodate these requests will depend on the specific timeline and requirements of the project. I always strive to meet deadlines while ensuring high-quality work.",
  },
  {
    question: "How do you handle revisions and feedback during a project?",
    answer:
      "I believe that revisions are a crucial part of the project process. I encourage clients to provide feedback, and I work collaboratively to make necessary adjustments to ensure the final product meets their expectations.",
  },
];

export function Faq() {
  const [expandedIndexes, setExpandedIndexes] = useState<number[]>([
    0,
    faqItems1.length + faqItems2.length - 1,
  ]);

  const toggleExpand = (index: number) => {
    setExpandedIndexes((prev) => {
      if (prev.includes(index)) {
        return prev.filter((i) => i !== index);
      } else {
        return [...prev, index];
      }
    });
  };

  return (
    <div className="pt-16">
      <div className="container">
        <SectionHeader
          eyebrow="Have Some Questions?"
          title="Frequently Asked Questions"
          description="Find all the answers you're looking for right here."
        />
        <div className="mt-10 grid md:gap-8 grid-cols-1 md:grid-cols-2 xs:mx-2 sm:mx-0">
          <div>
            {faqItems1.map((item, index) => {
              const isOpen = expandedIndexes.includes(index);
              return (
                <Card
                  key={index}
                  className={`faq-card p-6 mb-6 cursor-pointer transition-all duration-500 ease-in-out ${isOpen ? "lg:h-[215px] md:h-[225px]" : "h-auto"}`}
                  onClick={() => toggleExpand(index)}
                >
                  <div className="flex justify-between gap-6 items-start">
                    <h3 className="font-semibold lg:text-lg md:text-base text-sm">
                      {item.question}
                    </h3>
                    <div className="flex-shrink-0">
                      <ArrowUpRight
                        className={`size-5 transition-transform duration-500 ease-in-out ${isOpen ? "rotate-0" : "rotate-180"}`}
                      />
                    </div>
                  </div>
                  <div
                    className={`transition-opacity duration-500 ease-in-out ${isOpen ? "opacity-100" : "opacity-0 h-0 overflow-hidden"}`}
                  >
                    {isOpen && (
                      <p className="mt-4 lg:text-sm text-xs text-light-default/80">
                        {item.answer}
                      </p>
                    )}
                  </div>
                </Card>
              );
            })}
          </div>
          <div>
            {faqItems2.map((item, index) => {
              const adjustedIndex = index + faqItems1.length;
              const isOpen = expandedIndexes.includes(adjustedIndex);
              return (
                <Card
                  key={adjustedIndex}
                  className={`faq-card p-6 mb-6 cursor-pointer transition-all duration-500 ease-in-out ${isOpen ? "lg:h-[215px] md:h-[225px]" : "h-auto"}`}
                  onClick={() => toggleExpand(adjustedIndex)}
                >
                  <div className="flex justify-between gap-6 items-start">
                    <h3 className="font-semibold lg:text-lg md:text-base text-sm">
                      {item.question}
                    </h3>
                    <div className="flex-shrink-0">
                      <ArrowUpRight
                        className={`size-5 transition-transform duration-500 ease-in-out ${isOpen ? "rotate-0" : "rotate-180"}`}
                      />
                    </div>
                  </div>
                  <div
                    className={`transition-opacity duration-500 ease-in-out ${isOpen ? "opacity-100" : "opacity-0 h-0 overflow-hidden"}`}
                  >
                    {isOpen && (
                      <p className="mt-4 lg:text-sm text-xs text-light-default/80">
                        {item.answer}
                      </p>
                    )}
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
