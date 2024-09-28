import React from 'react'
import ProjectCard from './ProjectCard'
import { FaPython, FaReact } from 'react-icons/fa'
import { RiFirebaseFill, RiTailwindCssFill ,RiNextjsFill} from 'react-icons/ri'
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
            title={'TeXpert'} 
            text={'A document generator from text prompt using gemini API to generate LaTeX code.'}
            stackIcons={
                [
                    <RiNextjsFill color='white'/>,
                    <RiFirebaseFill color='yellow'/>,
                ]
            }
            link={'https://github.com/Ananth-Joshi/texpert'}
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