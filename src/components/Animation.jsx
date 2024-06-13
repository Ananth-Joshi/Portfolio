import React from 'react'
import { motion } from 'framer-motion'
function Animation({children,delay,once}) {
  return (
    <motion.div initial={{opacity:0,translateX:'-40px'}}
         whileInView={{opacity:1,translateX:'0'}}
         transition={{duration:1,delay:delay,repeat:false}}
         viewport={{once:once}}
         >
            {children}
    </motion.div>
  )
}

export default Animation