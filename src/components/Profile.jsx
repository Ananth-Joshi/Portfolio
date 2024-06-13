import React from 'react'
import profileImg from '../assets/profileImage.jpeg'
import { motion } from 'framer-motion'
import { Typewriter } from 'react-simple-typewriter'

function Profile() { 
  
  return (
    <div className='flex flex-wrap-reverse items-center mb-4 pt-12 pb-6 justify-center mx-4 gap-5'>
        <motion.div 
        initial={{opacity:0,translateX:'-40px'}}
        whileInView={{opacity:1,translateX:'0'}}
        transition={{duration:1}}
        >
          <div className=' text-white text-4xl font-bold '>Ananth A Joshi</div>
          <div className='text-slate-400 font-medium text-xl'><Typewriter words={['Full Stack Developer','Engineering Student','Programmer']} cursor={true} loop={true}></Typewriter></div>
          <div className='text-white break-words py-4 w-[400px]'>I'm a passionate developer with a strong foundation 
          in both front-end and back-end development. 
            I enjoy crafting user-friendly interfaces and building robust, scalable applications.</div>
        </motion.div>   
        <motion.img
         initial={{opacity:0,translateX:'40px'}}
         whileInView={{opacity:1,translateX:'0'}}
         transition={{duration:1}}
         src={profileImg} className='h-48 rounded-md'></motion.img>
    </div>
  )
}

export default Profile