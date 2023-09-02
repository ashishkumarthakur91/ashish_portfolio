import React from 'react'
import html from "../assets/skills/html.png"
import css from "../assets/skills/css.png"
import bootstrap from "../assets/skills/bootstrap.png"
import java from "../assets/skills/java.png"
import github from "../assets/skills/github.png"
import postman from "../assets/skills/postman.png"

import springboot from "../assets/skills/springboot.png"
import hibernate from "../assets/skills/hibernate.png"
import reactImg from "../assets/skills/reactImg.png"
import mysql from "../assets/skills/mysql.png"

const Skill = () => {

    const skills = [
        {
            id:1,
            src:html,
            title: "HTML",
            style: "shadow-orange-600"
        },
        {
            id:2,
            src:css,
            title: "CSS",
            style: "shadow-blue-700"
        },
        {
            id:3,
            src:bootstrap,
            title: "Bootstrap",
            style: "shadow-violet-900"
        },
        {
            id:4,
            src:java,
            title: "Java",
            style: "shadow-red-500"
        },
        {
            id:5,
            src:springboot,
            title: "SpringBoot",
            style: "shadow-lime-500"
        },
        {
            id:6,
            src:hibernate,
            title: "Hibernate",
            style: "shadow-stone-500"
        },
        {
            id:7,
            src:reactImg,
            title: "React",
            style: "shadow-blue-500"
        },
        {
            id:8,
            src:mysql,
            title: "MYSQL",
            style: "shadow-sky-600"
        },
        // {
        //     id:9,
        //     src:github,
        //     title: "Github",
        //     style: "shadow-gray-500"
        // },
        {
            id:9,
            src:postman,
            title: "Postman",
            style: "shadow-orange-500"
        },

    ]

  return (

        <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full ' >

            <div className='text-center mt-20'>
                <p className='text-4xl p-2 font-bold inline border-b-4 border-gray-500'>Skills</p>
                <p className='py-6'>These are the technologies I've knowledge !!</p>
            </div>

            <div className='w-full grid sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>

                {
                    skills.map(({id, src,title, style}) => (
                        <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                            <img src={src} alt="" className='w-20 mx-auto' />
                            <p className='mt-4'>{title}</p>
                        </div>
                    ))
                }

            </div>

        </div>
  )
}

export default Skill