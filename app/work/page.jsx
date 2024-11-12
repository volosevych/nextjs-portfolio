"use client";

import {motion} from "framer-motion";
import React, {useState} from 'react';

import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';

import {BsArrowUpRight, BsGithub} from 'react-icons/bs';

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@radix-ui/react-tooltip";

import Link from 'next/link';
import Image from 'next/image';

const projects = [
  {
    num: '01',
    category: 'frontend',
    title: 'project 1',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem ea amet optio id, natus voluptatibus deserunt esse.',

    stack: [
      {name: 'Html 5'}, {name: 'Css 3'}, {name: 'JavaScript'}
    ],
    image: '/assets/work/thumb1.png',
    live: '',
    github: ''
  },

  {
    num: '02',
    category: 'frontend',
    title: 'project 2',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem ea amet optio id, natus voluptatibus deserunt esse.',

    stack: [
      {name: 'Html 5'}, {name: 'Css 3'}, {name: 'JavaScript'}
    ],
    image: '/assets/work/thumb2.png',
    live: '',
    github: ''
  },

  {
    num: '03',
    category: 'frontend',
    title: 'project 3',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem ea amet optio id, natus voluptatibus deserunt esse.',

    stack: [
      {name: 'Html 5'}, {name: 'Css 3'}, {name: 'JavaScript'}
    ],
    image: '/assets/work/thumb3.png',
    live: '',
    github: ''
  }
]

const Work = () => {
  const [project, setProject] = useState(projects[0]);
  return (
    <motion.section 
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
      >
      <div className="container mx-auto">
          <div className="flex flex-col xl:flex-row xl:gap-[30px]">
            <div className="w-full xl:w-[50%] xl:g-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
                <div>
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

                  <div>
                    <Link href={project.live}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-[70xp]">
                            <BsArrowUpRight/>
                          </TooltipTrigger>

                          <TooltipContent>
                            <p>Live project</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </Link>
                  </div>
                </div>
            </div>

            <div className="w-full xl:w-[50%]">

            </div>
          </div>
      </div>
    </motion.section>
  )
}

export default Work
