"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";
import { TbBrandTypescript } from "react-icons/tb";

const about = {
  title: "About me",
  description: "Here are some information about me :)",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Anastasiia Volosevych",
    },

    {
      fieldName: "Experience",
      fieldValue: "4 Years",
    },

    {
      fieldName: "Nationality",
      fieldValue: "Ukrainian",
    },

    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },

    {
      fieldName: "Languages",
      fieldValue: "English, Russian, Ukrainian",
    },
  ],
};

const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My experience",
  description: "Companies I've been working for:",
  items: [
    {
      company: "VEON Services",
      position: "Front-End Developer",
      duration: "2024 - Present",
    },

    {
      company: "Legion Entertainment",
      position: "Front-End Developer",
      duration: "2025 - Present",
    },

    {
      company: "Amazon",
      position: "Warehouse Associate",
      duration: "2021 - 2024",
    },
  ],
};

const education = {
  icon: "/assets/resume/cap.svg",
  title: "My education",
  description:
    "This online university taught me a lot, including concepts in Information Technology, real coding practices, and general knowledge like Calculus. The Full Stack course helped me understand how the Back End works through real-time practice.",
  items: [
    {
      institution: "WGU",
      degree: "Computer Science",
      duration: "2022 - 2024",
    },

    {
      institution: "Online Course platform",
      degree: "Full Stack Web Development Bootcamp",
      duration: "2019 - 2021",
    },
  ],
};

const skills = {
  title: "My skills",
  description: "Skills I mastered:",

  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },

    {
      icon: <FaCss3 />,
      name: "css 3",
    },

    {
      icon: <FaJs />,
      name: "javascript",
    },

    {
      icon: <FaReact />,
      name: "react",
    },

    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },

    {
      icon: <TbBrandTypescript />,
      name: "TypeScript",
    },

    {
      icon: <SiTailwindcss />,
      name: "Tailwind.css",
    },

    {
      icon: <FaNodeJs />,
      name: "node.js",
    },

    {
      icon: <FaFigma />,
      name: "figma",
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 0.4,
          duration: 0.4,
          ease: "easeIn",
        },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About</TabsTrigger>
          </TabsList>

          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>

                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>

                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col
                        items-center justify-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>

                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>

                            <p className="text-white/60 leading-normal">
                              {item.company}
                            </p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>

                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>

                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col
                          items-center justify-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>

                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>

                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>

                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>

                <ul className="grid grid-cols-2 sd:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent trnasition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

            {/* about */}
            <TabsContent
              value="about"
              className="w-full text-clip xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>

                <p className="max-w-[600px] text-white/70 mx-auto xl:mx-0">
                  {about.description}
                </p>

                <ul className="grid grid-cols-1 gap-y-4 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li className="flex gap-2" key={index}>
                        <span className="text-white/60">{item.fieldName}:</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
