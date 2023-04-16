import React from 'react'
import { Link } from 'react-scroll'

const Bot = () => {
  return (
      <div className='fixed bottom-5 right-4 z-[999] cursor-pointer text-gray-800 bg-gray-300 text-4xl w-16 h-16 flex   sm:right-8 items-center justify-center rounded-full animate-bounce'>
      <Link to='contact'>
      <ion-icon name="chatbubble-ellipses"></ion-icon>
      </Link>
      </div>
  )
}

export default Bot