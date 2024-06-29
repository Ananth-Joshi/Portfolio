import React from 'react'

function ContactMe() {
  return (
    <div className='flex flex-col my-10 md:w-1/2 lg:w-1/2 w-5/6 items-center mx-7'>
        <div className='text-white text-3xl mb-5'>
            CONTACT ME
        </div>
        <form className='text-xl bg-[#1e293a] w-full p-4 rounded-xl text-white'>
            <div>
                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@example.com" required/>
            </div>
            <div class="sm:col-span-2">
              <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
              <textarea id="message" rows="6" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
            </div>
            <button type="submit" class="flex mx-auto my-4 text-sm items-center text-white p-2 rounded-lg hover:text-black bg-blue-500">Send message</button>
        </form>
    </div>
  )
}

export default ContactMe