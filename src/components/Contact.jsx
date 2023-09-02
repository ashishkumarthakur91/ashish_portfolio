import React from 'react'
import {BsFillSendFill} from 'react-icons/bs'
const Contact = () => {
  return (
        <div className='flex flex-col p-4 mx-auto justify-center max-w-screen-lg h-full'>

            <div className='text-center mt-20'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Contact</p>
                <p className='py-8'>Submit the from below to get in touch with me !!</p>
            </div>

            <div className='flex justify-center items-center'>
                <form action="https://getform.io/f/e66a0f22-0f1d-4357-9863-28aed35e51e9" method='POST' className='flex flex-col w-full md:w-1/2 my-4'>

                    <input type='text' name='name' placeholder='Enter your name' className='p2 bg-transparent border-2 rounded-md text-white focus:outline-none'/>

                    <input type='number' name='number' placeholder='Enter your phone number' className='mt-3 p2 bg-transparent border-2 rounded-md text-white focus:outline-none'/>

                    <input type='email' name='email' placeholder='Enter your email' className='mt-3 p2 bg-transparent border-2 rounded-md text-white focus:outline-none'/>

                    <textarea name="message" placeholder='Enter your message' rows="9" className='mt-3 p2 bg-transparent border-2 rounded-md text-white focus:outline-none'></textarea>

                    <button className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300'>Send<span><BsFillSendFill size={20} className='ml-2'/></span></button>

                </form>
            </div>

        </div>
  )
}

export default Contact