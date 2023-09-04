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
            title:"HMS",
            description:"A Hospital Management System using Advanced Java and JDBC is a web-based application that using technologies like Servlets and JSP for the user interface and JDBC for database connectivity. It helps Basic functionality of hospital like manage patient information, appointments and other administrative tasks. Advanced Java and JDBC are used to ensure secure data handling and effective communication with the database.",
        },

        {
            id:2,
            src: Smart_Contact_Manager,
            icon:<FaGithub/>,
            href: "https://github.com/MrThakurProgrammer/smart-contact-manager",
            title:"SCM",
            description:"A Smart Contact Manager project using Java Framework SpringBoot and Hibernate is a web application that allows functionality of contact like users to efficiently store, organize, and retrieve contact information their contacts. This project enables contact creation, updating, search, categorization, and secure user authentication while providing a user-friendly web interface designed with HTML, CSS, and Bootstrap. "
        },

        {
            id:3,
            src: Blog_App,
            icon:<FaGithub/>,
            href: "https://github.com/MrThakurProgrammer/Blog-App",
            title:"Blog App",
            description:"A Blog Application using a RESTful API with Spring Boot and Hibernate is a web-based platform that enables users to create, read, update, and delete blog posts and associated data. It's built on the Spring Boot framework for rapid development and uses Hibernate for database operations, making it a robust and scalable solution for bloggers and content creators."
        },

    ]

  return (
    
       
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>

            <div className='pb-8 text-center mt-20'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Projects</p>
                <p className='py-6'>Check out some of my projects right here !!</p>
            </div>

            <div className='w-full grid sm:grid-cols-2 gap-8 text-center py-8 px-12 sm:px-0'>

            { 
                projects.map(({id, src, href, icon, title, description})=>(   
                
                <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                   
                    <img src={src} alt=" " className='rounded-md duration-200 hover:scale-105'/>
                    
                    <div className='flex justify-center mt-3'>
                        <a href={href} className=' p-3 text-4xl duration-200 hover:scale-105 '>{icon}</a>
                    </div>
                   
                    <div className='flex justify-center '>
                        <h3 className='text-2xl text-rose-600 uppercase font-bold my-3'> {title} </h3>
                    </div>
                    
                    <div className='flex text-justify'> 
                        <p className=' font-light text-gray-500'>{description}</p>
                    
                    </div>
                
                </div>  
                
                ))
            }

            </div>

        </div>

  )
}

export default Project