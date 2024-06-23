import React from 'react'
import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaPython } from "react-icons/fa";
import { RiNextjsLine } from "react-icons/ri";
import { RiTailwindCssFill,RiFirebaseFill } from "react-icons/ri";
import Animation from './Animation';
import { SiTypescript } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { BiLogoMongodb } from "react-icons/bi";
import { SiAppwrite } from "react-icons/si";



function Skills() {
  return (
    <div className='flex flex-col mx-4 my-20 md:w-1/2 lg:w-1/2 items-center'>
        <div className='text-white text-3xl mb-5'>
            MY SKILLS
        </div>
        <div className='flex gap-2 flex-wrap justify-center'>
            <Animation delay={0.5} once={true}><FaHtml5 color='#e34e36' size={'10vh'}/></Animation>
            <Animation delay={0.6} once={true}><FaCss3Alt color='blue' size={'10vh'}/></Animation>
            <Animation delay={0.7} once={true}><IoLogoJavascript color='yellow' size={'10vh'} /></Animation>
            <Animation delay={0.8} once={true}><FaReact color='#54aabe' className='animate-spin-slow ' size={'10vh'}/></Animation>
            <Animation delay={0.9} once={true}><FaPython color='white' size={'10vh'}/></Animation>
            <Animation delay={1.0} once={true}><RiNextjsLine color='white' size={'10vh'}/></Animation>
            <Animation delay={1.1} once={true}><RiTailwindCssFill color='#3aa6e9' size={'10vh'}/></Animation>
            <Animation delay={1.2} once={true}><SiTypescript color='#3aa6e9' size={'10vh'}/></Animation>
            <Animation delay={1.3} once={true}><SiExpress color='white' size={'10vh'}/></Animation>
            <Animation delay={1.4} once={true}><SiMysql color='lightblue' size={'10vh'}/></Animation>
            <Animation delay={1.5} once={true}><BiLogoMongodb color='#00ED64' size={'10vh'}/></Animation>
            <Animation delay={1.6} once={true}><SiAppwrite color='#d74559' size={'10vh'}/></Animation>
            <Animation delay={1.6} once={true}><RiFirebaseFill color='yellow' size={'10vh'}/></Animation>
        </div>
    </div>
  )
}

export default Skills