import React from 'react'
import Animation from './Animation'

function ProjectCard({title,text,stackIcons,link}) {
  return (
    <Animation delay={0.3}>
      <a href={link}>
        <div className='flex flex-col flex-1 my-4 bg-[#1e293a] rounded-lg p-4 cursor-pointer hover:border border-green-500 md:w-64 lg:w-64'>
          <div className='text-2xl text-white font-extrabold'>{title}</div>
          <div className='text-white break-words'>{text}</div>
          <div className='flex gap-2 mt-1'>
            {
                stackIcons
            }
          </div>
        </div>
      </a>
    </Animation>
  )
}

export default ProjectCard