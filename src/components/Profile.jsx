import React from 'react';
import {FaLinkedin, FaYoutube, FaGithub, FaTelegram} from 'react-icons/fa';
import profileImg from '../assets/ProfileImg.jpeg'

const Profile = () => {

    const Social = [
        {
            id:1,
            link:"https://www.linkedin.com/in/mrthakurprogrammer/",
            icon:<FaLinkedin />
        },
        {
            id:2,
            link:"https://www.youtube.com/@MrThakurProgrammer",
            icon:<FaYoutube />
        },       
        {
            id:3,
            link:"https://github.com/MrThakurProgrammer",
            icon:<FaGithub />
        },
        {
            id:4,
            link:"https://t.me/javatutorials91",
            icon:<FaTelegram />
        },
        
    ]

  return (
    <section className="min-h-screen flex flex-col justify-start items-center p-2 text-center">
        <h2 className="text-3xl text-rose-600 uppercase font-bold">Ashish Kumar Thakur</h2>
        <h3 className="py-2 text-2xl">Software Developer</h3>
        <p className="max-w-xl font-light text-gray-500">
            Hi,
            welcome to my site, I'm a Full Stack Java Developer.<br/> I love to work on web dev, mobile app & automation projects. 
        </p>

        <div className="flex justify-evenly py-8 md:py-4 text-4xl w-full md:w-1/2">
            {
                Social.map(({id, link, icon}) => (
                    <a href={link} key={id} className="cursor-pointer duration-300 hover:rose-600" target='_blank' rel='noopener noreferrer'>{icon}</a>
                ))
            }
        </div>

        <div>

            <img src={profileImg} alt="" className="w-56 h-62 md:w-60 md:h-80 object-top rounded-xl shadow-md shadow-gray-500" />

            <a href="/Ashish_Kumar_Thakur_Java_Developer_Resume.pdf" download={true} className="flex items-center justify-center mt-2 bg-gradient-to-r from-rose-600 to-blue-600 text-white py-2 rounded-lg">Resume</a>
       
        </div>

    </section>
  )
}

export default Profile