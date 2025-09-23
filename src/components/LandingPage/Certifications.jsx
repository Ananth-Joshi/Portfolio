import React from 'react'
import CertCard from './CertCard'
import htcss from '../../assets/certs/coursera.png'
import backdev from '../../assets/certs/backend.png'
import { FaCode } from 'react-icons/fa'
import { PiCertificate } from 'react-icons/pi'

function Certifications() {
  return (
    <div className='flex flex-col md:w-1/2 lg:w-1/2 my-20 items-center pointer-events-auto mx-7'>
        <div className='text-white text-3xl mb-5'>
            MY CERTIFICATIONS
        </div>
        <div className='flex felx-col flex-wrap gap-3'>
            <CertCard
            imgLink={htcss}
            title={'HTML,CSS,Javascript for Web Developers.'}
            desc={'Coursera course on basics of web development'}
            link={'https://www.coursera.org/verify/QJQP47BSGY6F'}
            />
            <CertCard
            imgLink={backdev}
            title={'Back End Development and APIs.'}
            desc={'Free Code Camp certificate on backend development using ExpressJS and Mongoose.'}
            link={'https://www.freecodecamp.org/certification/AJ123/back-end-development-and-apis'}
            />
        </div>
        <a
            href="https://github.com/Ananth-Joshi?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-2 items-center justify-center mt-6 px-6 py-2 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold shadow-md hover:scale-105 transition-transform"
        >
            <PiCertificate />
            View All Certifications
        </a>
    </div>
  )
}

export default Certifications