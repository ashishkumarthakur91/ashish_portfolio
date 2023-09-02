import React from 'react'
import Smart_Contact_Manager from "../assets/projects/SCM.JPG";
import Hospital_Management_System from "../assets/projects/HMS.JPG";
import Blog_App from "../assets/projects/Blog_App.png";
import {FaGithub} from 'react-icons/fa';

const Project = () => {

    const projects =[
        
        {
            id:1,
            src: Hospital_Management_System,
            icon:<FaGithub/>,
            href: "https://github.com/MrThakurProgrammer/Hospital-Management-System",
        },

        {
            id:2,
            src: Smart_Contact_Manager,
            icon:<FaGithub/>,
            href: "https://github.com/MrThakurProgrammer/smart-contact-manager",
        },

        {
            id:3,
            src: Blog_App,
            icon:<FaGithub/>,
            href: "https://github.com/MrThakurProgrammer/Blog-App",
        },

    ]

  return (
    
       
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>

            <div className='pb-8 text-center mt-20'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Projects</p>
                <p className='py-6'>Check out some of my projects right here !!</p>
            </div>

            <div className='w-full grid sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>

            { 
                projects.map(({id, src, href, icon})=>(   
                <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                    <img src={src} alt="" className='rounded-md duration-200 hover:scale-105'/>
                    <div className='flex justify-center'>
                        <a href={href} className=' p-3 text-4xl duration-200 hover:scale-105 '>{icon}</a>
                    </div>
                </div>  
                ))
            }

            </div>

        </div>

  )
}

export default Project