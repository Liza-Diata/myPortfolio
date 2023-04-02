import React, { useState } from 'react'
import { HiMenu, HiX } from 'react-icons/hi' 
import { Link } from 'react-scroll'


const NavBar = () => {

    const [nav, setNav] = useState(false)
 

    const links = [
        {
            id: 1,
            link: 'home'
        },
        {
            id: 2,
            link: 'about'
        },
        {
            id: 3,
            link: 'skills'
        },
        {
            id: 4,
            link: 'portfolio'
        },
       
        {
            id: 5,
            link: 'contact'
        }
      
    ]
 
  return (
    <nav className='flex justify-between items-center w-full h-14 text-gray-300 fixed pl-4'>
        <div>
            <h1 className='font-signature font-bold text-4xl px-10 pt-5'>Ediliza</h1>
        </div>
        <div className='h-14 rounded-bl-full bg-[#6c5a3c]'>
            <ul className='hidden md:flex pt-3 px-10'>
                {links.map(({ id, link }) => (
                <li
                    key={id}
                    className='px-4 cursor-pointer capitalize
                    text-gray-300 font-bold hover:scale-105 duration-200'>
                    <Link to={link} smooth duration={500}>{link}</Link> 
                </li>
                ))}  
            </ul>
        </div>
        <div onClick={() => setNav(!nav)} 
            className='cursor-pointer pr-4 z-10 text-gray-300 md:hidden'>
            {nav ? <HiX size={30}/> : <HiMenu size={30} />}
        </div>
            {nav && (
            <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-[#1d2733] text-gray-300'>
                {links.map(({ id, link }) => (
                    <li key={id} className='px-4 cursor-pointer capitalize py-6 text-4xl '>
                        <Link onClick={() => setNav(!nav)} to={link} smooth duration={500}>{link}</Link>
                    </li>
                ))} 
            </ul>
            )}
    </nav>
  )
}

export default NavBar