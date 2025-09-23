import React, { useState } from 'react'
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { MdDone } from "react-icons/md";


function ContactMe() {
  const form = useRef();
  const [sent,setSent]=useState(false)
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(import.meta.env.VITE_SERVICE_ID,import.meta.env.VITE_TEMPLATE_ID, form.current, {
        publicKey: import.meta.env.VITE_PUBLIC_KEY,
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setSent(true)
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <div className='flex flex-col pointer-events-auto my-10 md:w-1/2 lg:w-1/2 w-5/6 items-center mx-7'>
        <div className='text-white text-3xl mb-5'>
            CONTACT ME
        </div>
        <form ref={form} onSubmit={sendEmail} className='text-xl bg-[#1e293a] w-full p-4 rounded-xl text-white'>
            <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                <input type="email" id="email" name='email' className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@example.com" required/>
            </div>
            <div className="sm:col-span-2 mt-1">
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
              <textarea id="message" rows="6" name='message' className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
            </div>
            {(!sent)?
            (<button type="submit" className="flex mx-auto my-4 text-sm items-center text-white p-2 rounded-lg hover:text-black bg-blue-500">
              Send message</button>):
            (<div className='flex justify-center items-center gap-1 my-4 bg-green-500 mx-auto text-green-800 text-sm rounded-lg p-2 w-28'>
              Sent<MdDone size={18}/>
            </div>)
            }
        </form>
    </div>
  )
}

export default ContactMe