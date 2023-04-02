import React from 'react'
import hero  from '../image/hero.webp'
import { Link } from 'react-scroll'

const Home = () => {

   return (
    <section id="home" className='min-h-screen flex py-10 md:flex-row flex-col items-center bg-[#1d2733]'>
      <div className='flex-1 flex items-center justify-center'>
        <img src={hero} alt="..." className='md:w-11/12 h-full object-cover pl-10 rounded-3xl' />
      </div> 
        <div className='flex-1'>
          <div className='md:text-left text-center'>
            <h1 className='md:text-5xl text-2xl md:leading-normal leading-10 text-gray-300 font-bold md:text-start text-center'>
              <span className='text-[#e22b76] md:text-6xl text-5xl font-extrabold'>HELLO!<br/></span>
              My Name is Ediliza Diata
            </h1>
            <h4 className='md:text-2xl text-lg text-gray-300 md:leading-normal leading-5 font-bold mb-5'> FullStack Web Developer</h4>
            <Link to='portfolio' className='btn-pink text-gray-300 cursor-pointer'>Portfolio</Link>
        </div>
      </div>  
    </section>
  )
}

export default Home