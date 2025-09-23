import React from 'react'
import { IoEyeSharp } from "react-icons/io5";

function CertCard({imgLink,title,desc,link}) {
  return (
    <div className='flex flex-wrap pointer-events-auto p-4 w-full justify-center lg:justify-start rounded-lg items-center gap-3 bg-[hsl(216,32%,17%)]'>
        <img src={imgLink} className=' h-52 lg:w-1/3'/>
        <div className='lg:w-1/2'> 
            <div className='text-2xl text-white font-extrabold break-words'>{title}</div>
            <div className='text-white break-words'>{desc}</div>
            <a href={link} className=' cursor-pointer'><IoEyeSharp size={20} color='white' /></a>
        </div>
    </div>
  )
}

export default CertCard