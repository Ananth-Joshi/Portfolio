import React from 'react'
import profileImg from '../../assets/profileImage.jpeg'
import { motion } from 'framer-motion'
import { Typewriter } from 'react-simple-typewriter'
import { IoMdDownload, IoMdTime } from "react-icons/io";
import resume from '../../assets/resume.pdf'
import { Link } from 'react-router-dom';

function Profile() { 
  return (
    <div className='flex pointer-events-auto flex-wrap-reverse mb-4 pt-12 pb-6 justify-center mx-4 gap-5'>
      <motion.div 
        initial={{opacity:0,translateX:'-40px'}}
        whileInView={{opacity:1,translateX:'0'}}
        transition={{duration:1}}
      >
        <div className='text-white text-4xl font-bold'>Ananth A Joshi</div>
        <div className='text-slate-400 font-medium text-xl'>
          <Typewriter words={['Full Stack Developer','Engineering Graduate','Programmer']} cursor={true} loop={true}/>
        </div>
        <div className='text-white break-words py-4 lg:w-[400px] md:w-[400px]'>
          I'm a passionate developer with a strong foundation 
          in both front-end and back-end development.  
          I enjoy crafting user-friendly interfaces and building robust, scalable applications.
        </div>

        {/* Buttons Container */}
        <div className='flex gap-4 mt-4'>
          <motion.a 
            href={resume} 
            download 
            className='flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold shadow-md hover:scale-105'
            initial={{opacity:0,translateX:'40px'}} 
            whileInView={{opacity:1,translateX:'0'}} 
            transition={{duration:1}}
          >
            <IoMdDownload/>
            Resume
          </motion.a>

          <motion.div
            initial={{opacity:0,translateX:'40px'}} 
            whileInView={{opacity:1,translateX:'0'}} 
            transition={{duration:1, delay:0.1}}
          >
            <Link
              to="/timeline" 
              className='flex items-center gap-2 px-4 py-2 rounded-xl bg-gray-700 text-white font-semibold shadow-md hover:scale-105'
            >
              <IoMdTime/>
              Timeline
            </Link>
          </motion.div>
        </div>

      </motion.div>   

      <motion.img
        initial={{opacity:0,translateX:'40px'}}
        whileInView={{opacity:1,translateX:'0'}}
        transition={{duration:1}}
        src={profileImg} 
        className='h-48 rounded-md'
      />
    </div>
  )
}

export default Profile
