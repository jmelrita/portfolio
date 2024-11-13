import React from "react";
import Image from "next/image";
import {
  MemojiAvatar1,
  MemojiAvatar2,
  MemojiAvatar3,
  MemojiAvatar4,
  MemojiAvatar5,
} from "@/assets/images";
import { SectionHeader, Card } from "@/components";

const testimonials = [
  {
    name: "Chan Dela Peña",
    position: "Engineering Manager & Data Custodian | Premise",
    text: "I had the pleasure of mentoring Gab during his time in the Xpay/Premise Cadet Developer Program, and I'm thoroughly impressed by his growth, dedication, and technical skills. He consistently demonstrated strong problem-solving abilities, a proactive learning attitude, and an eagerness to take on new challenges. Whether tackling complex coding tasks or collaborating with peers, Gab always brought a positive attitude and a sharp analytical mind to the table.I have no doubt that Gab will continue to excel in his career and make meaningful contributions to any team. I highly recommend him for any future opportunities.",
    avatar: MemojiAvatar1,
  },
  {
    name: "Juvy Obrero",
    position: "E-Commerce Officer | Meatworld International Inc.",
    text: "It was a pleasure working with Gab during his internship at Meatworld International Inc. He took charge of backend database operations and Odoo.sh testing, quickly becoming a valuable member of our team. Gab also made a big impact on the frontend by integrating Meta Pixel and enhancing the Odoo UI, which noticeably improved our website's performance. His proactive approach to troubleshooting and customer support was impressive, and the onboarding documentation he created for future interns has already proven to be a valuable resource. I have no doubt Gab will continue to achieve great things in his career.",
    avatar: MemojiAvatar2,
  },
  {
    name: "Georgie Recabo",
    position: "Fullstack Developer | iCargo",
    text: "Gab made a real impact during his internship at iCargo as a fullstack developer. He worked on both the backend, using Laravel API for development and integration, and the frontend, where he utilized React and React Prime to create a smooth and responsive interface. Gab also played a key role in refining the UI design and implementing frontend logic, which significantly improved the user experience. His enthusiasm for learning and commitment to delivering quality work stood out throughout the internship. I'm confident that Gab has a bright future ahead of him.",
    avatar: MemojiAvatar3,
  },
  {
    name: "Marice Sol Cruz-Camillo",
    position: "Student | TUP Taguig",
    text: "Gab was an excellent mentor when he taught me about the MERN stack. He not only provided clear and detailed explanations but also created helpful video tutorials and coding examples that made the learning process much smoother. His approach to teaching was hands-on, breaking down complex concepts into manageable steps. Thanks to his guidance, I gained a solid understanding of the MERN stack and felt much more confident in my coding skills. I'm grateful for his support and highly recommend him as a mentor.",
    avatar: MemojiAvatar4,
  },
  {
    name: "Luis Ramirez",
    position: "CEO | GoVirtual",
    text: "Gab has been a fantastic asset as a freelance developer, working on multiple projects for us. On the E-Learning Platform, he delivered a beautifully designed, user-friendly interface that elevated the user experience. He also developed a robust backend system for the Quick Forms API, ensuring its functionality and security. His dedication to quality and ability to consistently exceed expectations made him an invaluable part of both projects, always bringing outstanding results.",
    avatar: MemojiAvatar5,
  },
  {
    name: "Renyeljay Sioc",
    position: "IT Support | Meatworld International Inc.",
    text: "Leading our thesis project, Gab provided invaluable guidance throughout the development process. He used the MERN stack for the web app and React Native for the mobile app, ensuring a solid technical foundation. He also took charge of designing the user interface with Figma, creating a consistent and user-friendly look across the entire project. His mentorship made complex tasks manageable, and his expertise in both frontend and backend development played a key role in our project's success. I'm truly grateful for his support and leadership throughout.",
    avatar: MemojiAvatar1,
  },
  {
    name: "Crislhan Fabila",
    position: "Student | TUP Taguig",
    text: "Collaborating on various projects with Gab was a truly valuable experience. He always shared his knowledge and skills, whether it was about frontend development, backend integration, or project design. His clear explanations and hands-on approach made things easier and helped us manage the projects better. The guidance and expertise he offered were crucial to our success, and the skills I gained from these experiences have been incredibly helpful.",
    avatar: MemojiAvatar2,
  },
  {
    name: "John Heinrich Fabros",
    position: "Junior Software Engineer | Globagility",
    text: "Working with Gab on different projects during our college days was a great experience. His skills in both frontend and backend development really boosted the quality of our work. Whether we were tackling tough problems or improving the design, Gab always came up with smart solutions and paid attention to details. He was always ready to help, making it easy for us to work together. I valued the chance to learn from him and grow through these projects.",
    avatar: MemojiAvatar3,
  },
  {
    name: "Angel Ivory",
    position: "Student | EAC-Cavite",
    text: "During the internship, his hard work and dedication were clear. He often shared helpful tips that made tasks easier to manage, and his practical problem-solving skills had a big impact on our progress. Working with him made the entire experience smoother, more productive, and genuinely enjoyable.",
    avatar: MemojiAvatar4,
  },
  {
    name: "Jason Garganera Castillon",
    position: "Student | EAC-Cavite",
    text: "Gab was a great teammate during our internship. He was always dedicated and willing to share what he knew. His skills in both frontend and backend development really stood out, and he handled problems in a practical way. His approach made it easier for us to get things done and achieve better results. Working with him made the internship more productive and enjoyable, and I'm grateful for the chance to learn from someone who valued teamwork.",
    avatar: MemojiAvatar5,
  },
];

export function Testimonials() {
  return (
    <section className="py-16 lg:py-24">
      <div>
        <SectionHeader
          eyebrow="Happy Associates"
          title="What Associates Say About Me"
          description="Don't just take my word for it. See what my clients have to say about my work."
        />
        <div className="mt-12 lg:mt-20 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4 -my-4">
          <div className="flex gap-8 pr-8 flex-none animate-move-left [animation-duration:90s] hover:[animation-play-state:paused]">
            {[...new Array(3)].fill(0).map((_, index) => (
              <React.Fragment key={index}>
                {testimonials.map((testimonial) => (
                  <Card
                    key={testimonial.name}
                    className="max-w-xs md:max-w-md p-6 md:p-8 border-2 border-transparent transition-all duration-500 hover:-rotate-[1.5deg] hover:border-light-default hover:border-2"
                  >
                    <div className="flex gap-4 items-center">
                      <div className="size-14 bg-dark-variant2 inline-flex items-center justify-center rounded-full flex-shrink-0">
                        <Image
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="max-h-full"
                        />
                      </div>
                      <div>
                        <div className="font-semibold">{testimonial.name}</div>
                        <div className="text-sm text-light-default/40">
                          {testimonial.position}
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 md:mt-6 text-sm md:text-base max-h-32 overflow-x-auto scrollbar-thin pr-2">
                      {testimonial.text}
                    </div>
                  </Card>
                ))}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
