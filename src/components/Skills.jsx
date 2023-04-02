import React from 'react'
import html from '../image/html-5.png'
import css from '../image/css-3.png'
import javaScript from '../image/java-script.png'
import mongodb from '../image/MongoDB.png'
import node from '../image/nodejs.png'
import php from '../image/php.png'
import mysql from '../image/mysql.png'
import tailwind from '../image/tailwind.png'
import react from '../image/science.png'
import bootstrap from '../image/Bootstrap.png'
import laravel from '../image/laravel.png'
import sass from '../image/Sass.png'



const Skills = () => {

    const tech = [
        {
            id: 1,
            src: html,
            title: 'HTML',
            style: 'shadow-orange-500'
        },
        {
            id: 2,
            src: css,
            title: 'CSS',
            style: 'shadow-blue-500'
        },
        {
            id: 3,
            src: javaScript,
            title: 'JavaScript',
            style: 'shadow-amber-500'
        },
        {
            id: 4,
            src: mongodb,
            title: 'MongoDB',
            style: 'shadow-green-500'
        },
        {
            id: 5,
            src: node,
            title: 'Node.js',
            style: 'shadow-green-500'
        },
        {
            id: 6,
            src: php,
            title: 'PHP',
            style: 'shadow-purple-500'
        },
        {
            id: 7,
            src: mysql,
            title: 'MySQL',
            style: 'shadow-sky-500'
        },
        {
            id: 8,
            src: react,
            title: 'REACT',
            style: 'shadow-sky-300'
        },
        {
            id: 9,
            src: tailwind,
            title: 'Tailwind CSS',
            style: 'shadow-sky-500'
        },
        {
            id: 10,
            src: bootstrap,
            title: 'Bootstrap',
            style: 'shadow-indigo-500'
        },
        {
            id: 11,
            src: laravel,
            title: 'Laravel',
            style: 'shadow-red-500'
        },
        {
            id: 12,
            src: sass,
            title: 'Sass',
            style: 'shadow-pink-500'
        }



    ]

  return (
    <div name='skills' className="w-full text-white bg-[#1d2733] md:h-screen">
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full md:px-20'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500 mx-auto'>Skills</p>
            <p className='py-2 mx-auto'>These are the technologies I've worked with</p> 
            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 pt-20 sm:px-0'>
                {tech.map(({id, src, title, style}) => (
                <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                    <img src={src} className='w-20 h-20 mx-auto' alt="" />
                    <p>{title}</p>
                </div>
                ))}           
            </div>
        </div>
    </div>
    
  )
}
export default Skills