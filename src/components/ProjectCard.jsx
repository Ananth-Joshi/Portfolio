import React from 'react'
import Animation from './Animation'

function ProjectCard({title,text,stackIcons}) {
  return (
    <Animation delay={1.5}>
      <a>
        <div className='flex flex-col w-full max-w-1/2 bg-[#1e293a] rounded-lg p-4 cursor-pointer'>
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