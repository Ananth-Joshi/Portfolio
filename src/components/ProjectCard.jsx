import React from 'react'
import Animation from './Animation'

function ProjectCard({title,text,stackIcons}) {
  return (
    <Animation delay={0.3}>
      <a>
        <div className='flex flex-col flex-1 my-4 bg-[#1e293a] h-full max-w-fit rounded-lg p-4 cursor-pointer w-64'>
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