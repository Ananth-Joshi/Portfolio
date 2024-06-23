import React from 'react'
import CertCard from './CertCard'
import htcss from '../assets/certs/coursera.png'
import backdev from '../assets/certs/backend.png'

function Certifications() {
  return (
    <div className='flex flex-col md:w-1/2 lg:w-1/2 my-20 items-center mx-7'>
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
    </div>
  )
}

export default Certifications