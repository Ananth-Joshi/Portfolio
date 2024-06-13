import React from 'react'
import ProjectCard from './ProjectCard'
import { FaPython, FaReact } from 'react-icons/fa'
import { RiFirebaseFill, RiTailwindCssFill } from 'react-icons/ri'
import { SiTypescript } from 'react-icons/si'

function Projects() {
  return (
    <div className='flex flex-col w-3/4 items-center my-5'>
        <div className='text-white text-3xl mb-5'>MY PROJECTS</div>
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
            />
            <ProjectCard 
            title={'Malware Scanner'} 
            text={'A simple file hash based malware scanner using python, Gemini and virusTotal API.'}
            stackIcons={
                [
                    <FaPython color='white'/>,
                ]
            }
            />
            <ProjectCard
            title={'Tic-Tac-Toe'} 
            text={'A graphical tic-tac-toe game built with Python using the PyGame library.'}
            stackIcons={
                [
                    <FaPython color='white'/>,
                ]
            }
            />
            
            
        </div>
    </div>
  )
}

export default Projects