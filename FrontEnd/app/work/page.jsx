"use client";

import {motion} from "framer-motion";
import React, {useState} from 'react';

import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';

import {BsArrowUpRight, BsGithub} from 'react-icons/bs';

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@radix-ui/react-tooltip";

import Link from 'next/link';
import Image from 'next/image';

import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: '01',
    category: 'frontend',
    title: 'project 1',
    description: 'A responsive SaaS landing page built with React, Vue, Vite, and Tailwind CSS.',

    stack: [
      {name: 'React'}, {name: 'Vite'}, {name: 'Tailwind CSS'}
    ],
    image: '/assets/projects/project-1.png',
    live: 'https://volosevych.github.io/saas-landing-page/',
    github: 'https://github.com/volosevych/saas-landing-page'
  },

  {
    num: '02',
    category: 'frontend',
    title: 'project 2',
    description: "This website is fully responsive for mobile devices. Plus, I've added dark and light themes to keep your eyes comfortable at night!",

    stack: [
      {name: 'Bootstrap 4'}, {name: 'HTML & CSS'}, {name: 'CSS Animations'}
    ],
    image: '/assets/projects/project-2.jpg',
    live: 'https://volosevych.github.io/Bootstrap-Landing-Page/',
    github: 'https://github.com/volosevych/Bootstrap-Landing-Page?tab=readme-ov-file'
  },

  {
    num: '03',
    category: 'frontend',
    title: 'project 3',
    description: 'A fully responsive SaaS landing page built with React and Tailwind CSS, designed for seamless user experience across all devices. Deployed on GitHub Pages for fast and reliable hosting',

    stack: [
      {name: 'React'}, {name: 'Tailwind CSS'}, {name: 'Love'}
    ],
    image: '/assets/projects/project-3.png',
    live: 'https://volosevych.github.io/Bootstrap-Landing-Page/',
    github: 'https://github.com/volosevych/Bootstrap-Landing-Page?tab=readme-ov-file'
  }
]

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  }

  return (
    <motion.section 
      initial={{opacity: 0}}
      animate={{opacity: 1, transition: {delay: 2.4, duration: 0.4, ease: 'easeIn'}}}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
      >
      <div className="container mx-auto">
          <div className="flex flex-col xl:flex-row xl:gap-[30px]">
            <div className="w-full xl:w-[50%] xl:g-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
                <div className="flex flex-col gap-[30px] h-[50%]">
                  <div className="text-8xl leading-none font-extrabold text-transparent text-outline">{project.num}</div>

                  <h2 className="text-[42px] font-bold leading-none text-white 
                  group-hover:text-accent transition-all duration-500 capitalize">{project.category} project</h2>

                  <p className="text-white/60">{project.description}</p>

                  <ul className="flex gap-4">
                    {project.stack.map((item, index) => {
                      return <li 
                          key={index} 
                          className="text-xl text-accent">
                        {item.name}
                        {index !== project.stack.length - 1 && ","}
                      </li>
                    })}
                  </ul>

                  <div className="border border-white/20"></div>

                  <div className="flex items-center gap-3">
                    {/* Live project link */}
                    <Link href={project.live} target="_blank">
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                            <BsArrowUpRight className="text-white text-3xl group-hover:text-accent"/>
                          </TooltipTrigger>

                          <TooltipContent>
                            <p className="bg-white text-black px-1">Live project</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </Link>

                    {/* Github Project Link */}
                    <Link href={project.github} target="_blank">
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                            <BsGithub className="text-white text-3xl group-hover:text-accent"/>
                          </TooltipTrigger>

                          <TooltipContent>
                            <p className="bg-white text-black px-1">Github repository</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </Link>
                  </div>
                </div>
            </div>

            <div className="w-full xl:w-[50%]">
                <Swiper spaceBetween={30} slidesPerView={1} className="xl:h-[520px] mb-12" onSlideChange={handleSlideChange}>
                  {projects.map((project, index) => {
                    return <SwiperSlide key={index} className="w-full">
                      <div className="h-[460px] relative group flex justify-center items-center">
                        <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>

                        <div className="relative w-full h-full">
                          <Image src={project.image} fill className="object-cover" alt=""/>
                        </div>
                      </div>
                    </SwiperSlide>
                  })}
                  <WorkSliderBtns 
                    containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)]
                    xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                    btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
                    />
                </Swiper>
            </div>
          </div>
      </div>
    </motion.section>
  )
}

export default Work
