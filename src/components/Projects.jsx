import React from 'react'
import ProjectCard from './ProjectCard'
import { FaPython, FaReact } from 'react-icons/fa'
import { RiFirebaseFill, RiTailwindCssFill } from 'react-icons/ri'
import { SiTypescript } from 'react-icons/si'

function Projects() {
  return (
    <div className='flex pointer-events-auto flex-col items-center my-10 w-5/6 mb-5'>
        <div className='text-white text-3xl'>MY PROJECTS</div>
        <div className='flex min-w-1/2 flex-wrap justify-center gap-2'>
            <ProjectCard
            title={'autoQ'} 
            text={'A web app designed specifically to simplify creation of question papers.'}
            stackIcons={
                [
                    <FaReact color='#54aabe'/>,
                    <RiFirebaseFill color='yellow'/>,
                    <RiTailwindCssFill color='#3aa6e9'/>,
                    <SiTypescript color='#3aa6e9'/>
                ]
            }
            link={'https://github.com/Ananth-Joshi/AutoQ'}
            />
            <ProjectCard 
            title={'Malware Scanner'} 
            text={'A simple file hash based malware scanner using python, Gemini and virusTotal API.'}
            stackIcons={
                [
                    <FaPython color='white'/>,
                ]
            }
            link={'https://github.com/Ananth-Joshi/Malware-Scanner'}
            />
            <ProjectCard
            title={'Tic-Tac-Toe'} 
            text={'A graphical tic-tac-toe game built with Python using the PyGame library.'}
            stackIcons={
                [
                    <FaPython color='white'/>,
                ]
            }
            link={'https://github.com/Ananth-Joshi/Tic-Tac-Toe'}
            />
        </div>
    </div>
  )
}

export default Projects