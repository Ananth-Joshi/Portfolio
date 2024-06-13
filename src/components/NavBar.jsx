import React from 'react'
import logo from '../assets/logo.png'
import { FaGithub, FaHeart } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { motion } from 'framer-motion';

function NavBar() {
  return (
    <div className='flex items-center justify-around py-4 border-b border-[#f8fafc0f] w-screen'>
        <div className='flex items-center gap-2'>
            <div className='text-white font-extrabold text-5xl'>AJ</div>
            <div className='text-white font-extrabold'> ANANTH JOSHI</div>
              <motion.span whileTap={{translateY:-40, opacity:0}}>
                <FaHeart className= 'cursor-pointer' color='red' size={20}/>
              </motion.span>
              <FaHeart className= 'animate-pulse relative cursor-pointer' color='red' size={20}/>   
        </div>
        <div className='flex items-center gap-2'>
            <a href={'https://github.com/Ananth-Joshi'}><FaGithub color='white' className=' hover:scale-125' size={30}/></a>
            <a href={'https://www.linkedin.com/in/ananth-a-joshi/'}><FaLinkedin className=' hover:scale-125' color='white' size={30}/></a>
            <a href={'https://www.x.com'}><FaXTwitter color='white' className=' hover:scale-125' size={30}/></a>
        </div>
    </div>
  )
}

export default NavBar