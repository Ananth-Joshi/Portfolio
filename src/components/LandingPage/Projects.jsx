import React from 'react'
import ProjectCard from './ProjectCard'
import { FaCode, FaPython, FaReact } from 'react-icons/fa'
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
            stackIcons={[
                <FaReact color='#54aabe'/>,
                <RiFirebaseFill color='yellow'/>,
                <RiTailwindCssFill color='#3aa6e9'/>,
                <SiTypescript color='#3aa6e9'/>
            ]}
            link={'https://github.com/Ananth-Joshi/AutoQ'}
            />
            
            <ProjectCard 
            title={'TeXpert'} 
            text={'A document generator from text prompt using gemini API to generate LaTeX code.'}
            stackIcons={[
                <RiNextjsFill color='white'/>,
                <RiFirebaseFill color='yellow'/>,
                <SiTypescript color='#3aa6e9'/>
            ]}
            link={'https://github.com/Ananth-Joshi/texpert'}
            />
            
            <ProjectCard
            title={'Tic-Tac-Toe'} 
            text={'A graphical tic-tac-toe game built with Python using the PyGame library.'}
            stackIcons={[
                <FaPython color='white'/>,
            ]}
            link={'https://github.com/Ananth-Joshi/Tic-Tac-Toe'}
            />
        </div>

        {/* View All Projects Button */}
        <a
            href="https://github.com/Ananth-Joshi?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-2 items-center justify-center mt-6 px-6 py-2 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold shadow-md hover:scale-105 transition-transform"
        >
            <FaCode />
            View All Projects
        </a>
        </div>

  )
}

export default Projects